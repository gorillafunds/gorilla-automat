export const getApiUrl = (testString: string) => {
  const isTestnet = testString.includes(".testnet")

  return isTestnet ? TESTNET_API : MAINNET_API
}

const TESTNET_API = "https://interop-testnet.hasura.app/v1/graphql/"
const MAINNET_API = "https://interop-mainnet.hasura.app/v1/graphql/"
