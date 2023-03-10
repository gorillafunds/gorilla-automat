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
  private signature: any
  private message!: string
  public files!: File[]
  public metaData: any
  private mintConfig: any
  private listConfig: any[] = []
  // TODO: Remove as soon as next does not render twice
  private uploadStarted = false
  private processStarted = false

  public initializeWallet = async () => {
    const { data } = await new Wallet().init({
      networkName: Network.testnet,
      chain: Chain.near,
      apiKey: process.env.MINTBASE_API_KEY as string,
    })

    this.wallet = data.wallet
  }

  public connectWallet = async () => {
    await this.wallet.connect({ requestSignIn: true })

    // Don't call the next screen, it happens on redirect
    return false
  }

  private signateWallet = async () => {
    const API_ENDPOINT = `${process.env.GORILLA_API_URL}/get-message`
    const response = await axios.get(API_ENDPOINT)
    this.message = response.data

    this.signature = await this.wallet.signMessage(this.message)
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
    if (this.uploadStarted) return
    this.uploadStarted = true

    // Signate wallet for the first time
    this.signateWallet()

    if (!this.wallet.minter) {
      throw new Error("Wallet is not connected")
    }
    const minter = getMinter(storeId)

    // Build metadata array from files
    const metaDataArray = buildMetadataArray(this.files, config, this.metaData)

    try {
      // Actual upload
      this.mintConfig = await Promise.all(
        this.files.map(async (file, index) => {
          await this.wallet.minter?.uploadField(MetadataField.Media, file)
          this.wallet.minter?.setMetadata(metaDataArray[index])
          const id = await this.wallet.minter?.getMetadataId()
          const account = this.wallet.activeAccount?.accountId

          return {
            signature: this.signature,
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

  public mintAndList = async (storeId: string, price: string | number) => {
    if (this.processStarted) return
    this.processStarted = true

    if (!this.wallet.minter) {
      throw new Error("Wallet is not connected")
    }
    const account = this.wallet.activeAccount?.accountId
    const minter = getMinter(storeId)
    // Minting process
    const mintResponse = await axios.post(API_ENDPOINT, {
      function: "mint",
      array: this.mintConfig,
      message: this.message,
      signature: this.signature,
    })

    const mintResult = mintResponse.data
    if (!mintResult.executionArn) return false

    // Poll Minting process
    const execution = await pollExecution(mintResult.executionArn)
    // Build list config
    const receipts = execution.execution_results.reduce(
      (prev: any, execResult: any) => {
        let body = execResult.execution_results.Payload.body.Payload.body
        let parsedBody = JSON.parse(body)
        const bodyReceipts = parsedBody.map((item: any) => {
          const receipt = item.data[0].token_ids
          return receipt
        })
        return prev.concat(...bodyReceipts)
      },
      [],
    )

    let tokens: any[] = []
    tokens = receipts.map((tokenId: string) => ({
      id: tokenId,
      price,
    }))

    await this.signateWallet()

    tokens.forEach((token: any) => {
      const listConfig = {
        signature: this.signature,
        account,
        storeId: storeId,
        minter,
        tokenId: token.id,
        price: token.price,
      }
      this.listConfig.push(listConfig)
    })

    // Start Listing stateMachine
    const listResponse = await axios.post(API_ENDPOINT, {
      array: this.listConfig,
      function: "list",
      message: this.message,
      signature: this.signature,
    })
    const listResult = listResponse.data
    if (!listResult.executionArn) return false

    // Poll Listing
    await pollExecution(listResult.executionArn)

    return true
  }
}

type ArweaveConfig = {
  amount: number
  title: string
  description: string
}

const API_URL = "https://o2wxtikji9.execute-api.eu-central-1.amazonaws.com/prod"
const API_ENDPOINT = `${API_URL}/start-parent-automat`
