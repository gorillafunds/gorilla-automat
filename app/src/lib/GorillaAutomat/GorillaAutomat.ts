import { Wallet, Chain, Network } from "mintbase"
import { IGorillaAutomat } from "./IGorillaAutomat"

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
  }

  public disconnectWallet = () => {
    this.wallet.disconnect()
  }

  public walletConnected = () => {
    return this.wallet?.isConnected() || false
  }

  public getShops = async () => {
    if (!this.wallet) throw new Error("No wallet connected")
    // TODO: Return actual data
    return [
      {
        label: "Shop 1",
        value: "Shop 1",
      },
      {
        label: "Shop 2",
        value: "Shop 2",
      },
    ]
  }
}
