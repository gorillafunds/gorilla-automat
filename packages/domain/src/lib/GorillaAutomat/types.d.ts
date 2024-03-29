import { Wallet } from "mintbase"

export interface IGorillaAutomat {
  initializeWallet: (isMainnet?: boolean) => Promise<any>
  /** Returns a boolean if the next screen should be called or not */
  connectWallet: () => Promise<boolean>
  disconnectWallet: () => void
  walletConnected: () => boolean
  getShops: () => Promise<any>
  checkShopPermission: Function
  grantMintPermission: Function
  handleZip: Function
  uploadToArweave: Function
  mintAndList: Function
  getFileCount: Function
}

export type AutomatConstructor = new () => IGorillaAutomat
