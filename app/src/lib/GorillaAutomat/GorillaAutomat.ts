import { Wallet, Chain, Network } from "mintbase"
import { IGorillaAutomat } from "./types.d"
import { getOwnedShops } from "../../helper"

export class GorillaAutomat implements IGorillaAutomat {
  private wallet: Wallet

  public initializeWallet = async () => {
    const { data } = await new Wallet().init({
      networkName: Network.testnet,
      chain: Chain.near,
      apiKey: process.env.NEXT_PUBLIC_MINTBASE_API_KEY as string,
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
}
