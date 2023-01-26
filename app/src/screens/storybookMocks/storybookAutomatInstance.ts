import { IGorillaAutomat } from "../../lib"

class StorybookAutomat implements IGorillaAutomat {
  public initializeWallet = async () => {
    return "Wallet initialized"
  }

  public connectWallet = async () => {
    alert("Connecting wallet...")
    return "Wallet connected!"
  }

  public disconnectWallet = () => {
    alert("Wallet disconnected")
  }

  public walletConnected = () => {
    return true
  }

  public getShops = async () => {
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

const storybookAutomatInstance = new StorybookAutomat()

/** Singleton instance of StorybookAutomat */
export default Object.freeze(storybookAutomatInstance)
