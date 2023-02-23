import { getApiUrl } from "./index"

describe("getApiUrl", () => {
  it("should return the correct apiUrl for a given testString", () => {
    const testnetString = "gorillafunds.testnet"
    const mainnetString = "gorillafunds.near"

    const testnetResult = getApiUrl(testnetString)
    const mainnetResult = getApiUrl(mainnetString)

    expect(testnetResult).toBe("https://interop-testnet.hasura.app/v1/graphql/")
    expect(mainnetResult).toBe("https://interop-mainnet.hasura.app/v1/graphql/")
  })
})
