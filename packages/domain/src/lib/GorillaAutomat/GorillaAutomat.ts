import { Wallet, Chain, Network, MetadataField } from "mintbase"
import axios from "axios"
import { IGorillaAutomat } from "./types.d"
import {
  getOwnedShops,
  checkShopPermission,
  unpackZip,
  extractFileArrayJson,
  pollExecution,
} from "../../services"
import { getMinter, buildMetadataArray } from "../../helper"

export class GorillaAutomat implements IGorillaAutomat {
  private wallet!: Wallet
  public files!: File[]
  public metaData: any
  private mintConfig: any
  private listConfig: any[] = []

  public initializeWallet = async () => {
    const { data } = await new Wallet().init({
      networkName: Network.testnet,
      chain: Chain.near,
      apiKey: process.env.MINTBASE_API_KEY as string,
    })

    this.wallet = data.wallet
  }

  public connectWallet = async () => {
    this.wallet.connect({ requestSignIn: true })
    // Don't call the next screen, it happens on redirect
    return false
  }

  public disconnectWallet = () => {
    this.wallet.disconnect()
  }

  public walletConnected = () => {
    return this.wallet?.isConnected() || false
  }

  public getShops = async () => {
    if (!this.wallet) throw new Error("No wallet connected")
    const { accountId } = this.wallet.activeAccount!
    const shops = await getOwnedShops(accountId)

    return shops
  }

  public checkShopPermission = async (shopId: string) => {
    const hasPermission = await checkShopPermission(shopId)
    return hasPermission
  }

  public grantMintPermission = async (shopId: string) => {
    const minter = getMinter(shopId)
    this.wallet.grantMinter(minter, shopId)
  }

  public handleZip = async (zipFile: File) => {
    // unpack,sanitize and process zipFile
    const fileArray = await unpackZip(zipFile)
    const { json, array } = await extractFileArrayJson(fileArray)
    this.files = array
    this.metaData = json
  }

  public uploadToArweave = async (config: ArweaveConfig, storeId: string) => {
    if (!this.wallet.minter) {
      throw new Error("Wallet is not connected")
    }
    const minter = getMinter(storeId)

    // Build metadata array from files
    const metaDataArray = buildMetadataArray(this.files, config, this.metaData)

    try {
      // Configure minter
      for (const metaDataItem of metaDataArray) {
        this.wallet.minter.setMetadata(metaDataItem)
      }

      // Actual upload
      this.mintConfig = await Promise.all(
        this.files.map(async (file) => {
          await this.wallet.minter?.uploadField(MetadataField.Media, file)
          const id = await this.wallet.minter?.getMetadataId()
          const account = this.wallet.activeAccount?.accountId
          const signature = await this.wallet.signMessage("hello")

          return {
            signature,
            account,
            storeId,
            minter,
            amount: Number(config.amount),
            ref: id?.data,
            extra: [],
            split_percentages: {
              [`${account}`]: 10000,
              [`${minter}`]: 0,
            },
            forever_royalties: { [`${minter}`]: 10000 },
            royalty_percentage: 100,
          }
        }),
      )
    } catch (_) {
      return false
    }

    return true
  }

  public mintAndList = async (storeId: string) => {
    if (!this.wallet.minter) {
      throw new Error("Wallet is not connected")
    }
    const account = this.wallet.activeAccount?.accountId
    const minter = getMinter(storeId)
    const signature = await this.wallet.signMessage("hello")

    // Minting process
    const mintResponse = await axios.post(API_ENDPOINT, {
      function: "mint",
      array: this.mintConfig,
    })
    const mintResult = mintResponse.data
    if (!mintResult.executionArn) return false

    // Poll Minting process
    const execution = await pollExecution(mintResult.executionArn)

    // Build list config
    let receiptResultArray: any[] = []

    for (let index = 0; index < execution.execution_results.length; index++) {
      let string = execution.execution_results[index].Payload.body
      console.log("execution", execution)
      let parsed_body = JSON.parse(string)
      console.log("parsed_body", parsed_body)
      const receiptsArray = parsed_body.logs.map((log: string) => {
        const receiptResult = log.split("N:")
        return JSON.parse(receiptResult[1])
      })
      receiptResultArray = receiptResultArray.concat(receiptsArray)
    }
    console.log("receiptResultArray:", receiptResultArray)
    const tokens: any[] = []
    const tokenArray = receiptResultArray.map((result, index) => {
      for (const token of result.data[0].token_ids) {
        tokens.push({ id: token, price: "1.0" })
      }
      return tokens
    })

    for (let index = 0; index < tokens.length; index++) {
      let listConfig = {
        signature,
        account,
        storeId: storeId,
        minter,
        tokenId: tokens[index].id,
        price: tokens[index].price,
      }
      this.listConfig.push(listConfig)
    }

    // Start Listing stateMachine
    const listResponse = await axios.post(API_ENDPOINT, {
      array: this.listConfig,
      function: "list",
    })
    const listResult = listResponse.data
    if (!listResult.executionArn) return false

    // Poll Listing
    const listExecution = await pollExecution(listResult.executionArn)
    console.log("listExecution", listExecution)

    return true
  }
}

type ArweaveConfig = {
  amount: number
  title: string
  description: string
}

const API_URL = "https://2usno4ct5l.execute-api.eu-central-1.amazonaws.com/prod"
const API_ENDPOINT = `${API_URL}/start-automat`
