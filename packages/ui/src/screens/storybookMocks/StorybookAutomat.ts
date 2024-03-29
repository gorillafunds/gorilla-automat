import { IGorillaAutomat } from "@gorilla-automat/domain"
import wait from "wait"

export class StorybookAutomat implements IGorillaAutomat {
  protected isConnected: boolean
  public files: any
  public meta: any

  constructor() {
    this.isConnected = false
  }

  public initializeWallet = async () => {
    return "Wallet initialized"
  }

  public connectWallet = async () => {
    alert("Connecting wallet...")
    this.isConnected = true
    // Go to the next screen
    return true
  }

  public disconnectWallet = () => {
    alert("Wallet disconnected")
    this.isConnected = false
    window?.location.reload()
  }

  public walletConnected = () => {
    return this.isConnected
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

  public checkShopPermission = () => {
    alert("Shop Permission is false")
    return false
  }

  public grantMintPermission = () => {
    alert("Granting permission")
  }

  public handleZip = () => {
    alert("Handle zip")
    return true
  }

  public uploadToArweave = async () => {
    await wait(2500)
    return true
  }

  public mintAndList = async () => {
    await wait(1000)
    return true
  }

  public getFileCount = () => {
    return 1
  }
}
