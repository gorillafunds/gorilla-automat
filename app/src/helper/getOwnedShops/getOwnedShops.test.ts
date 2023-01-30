import { describe, expect, it } from "vitest"
import { getOwnedShops } from "./getOwnedShops"

describe("getOwnShops", () => {
  it("should return all shops for an owner correctly", async () => {
    const ownerId = "smetzdev-gorillashops.testnet"
    const expectedResult = [
      {
        title: "Saschas Single Product Teststore",
        value: "smgssingleproduct.mintspace2.testnet",
      },
    ]

    const result = await getOwnedShops(ownerId)

    expect(result).toEqual(expectedResult)
  })
})
