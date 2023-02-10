import { getMinter } from "./index"

describe("getMinter", () => {
  it("should return the correct minter for a given shopId", () => {
    const mainnetShopId = "bananafratclub.mintbase1.near"
    const testnetShopId = "bananafratclub.mintspace2.testnet"
    const mainnetMinter = "gorillaminter.near"
    const testnetMinter = "gorillatest.testnet"

    const mainnetResult = getMinter(mainnetShopId)
    const testnetResult = getMinter(testnetShopId)

    expect(mainnetResult).toBe(mainnetMinter)
    expect(testnetResult).toBe(testnetMinter)
  })
})
