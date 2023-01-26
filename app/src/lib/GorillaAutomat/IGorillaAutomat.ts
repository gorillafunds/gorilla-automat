import { Wallet } from "mintbase"

export interface IGorillaAutomat {
  initializeWallet: () => Promise<any>
  connectWallet: () => Promise<any>
  disconnectWallet: () => void
  walletConnected: () => boolean
  getShops: () => Promise<any>
}
