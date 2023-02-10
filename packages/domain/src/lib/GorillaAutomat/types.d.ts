import { Wallet } from "mintbase"

export interface IGorillaAutomat {
  initializeWallet: () => Promise<any>
  /** Returns a boolean if the next screen should be called or not */
  connectWallet: () => Promise<boolean>
  disconnectWallet: () => void
  walletConnected: () => boolean
  getShops: () => Promise<any>
  grantMintPermission: Function
  handleZip: Function
}

export type AutomatConstructor = new () => IGorillaAutomat
