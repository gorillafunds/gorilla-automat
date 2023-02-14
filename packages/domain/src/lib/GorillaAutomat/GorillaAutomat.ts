import { Wallet, Chain, Network, MetadataField } from "mintbase"
import { IGorillaAutomat } from "./types.d"
import { getOwnedShops, checkShopPermission } from "../../services"
import { getMinter, buildMetadataArray } from "../../helper"
import { unpackZip, extractFileArrayJson } from "../../services"

export class GorillaAutomat implements IGorillaAutomat {
  private wallet!: Wallet
  public files!: File[]
  public metaData: any
  private mintConfig: any

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
    const account = this.wallet.activeAccount
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
          const signature = await this.wallet.signMessage("GorillaAutomat")

          return {
            signature,
            account,
            storeId,
            minter,
            amount: config.amount,
            ref: "",
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
}

type ArweaveConfig = {
  amount: number
  title: string
  description: string
}
