/**
 * Returns the correct minterId, based on the
 * shopId being a testnet or mainnet store */
export const getMinter = (shopId: string) => {
  const testnetMinter = "gorillatest.testnet"
  const mainnetMinter = "gorillaminter.near"

  const isTestnet = shopId.includes(".testnet")

  return isTestnet ? testnetMinter : mainnetMinter
}
