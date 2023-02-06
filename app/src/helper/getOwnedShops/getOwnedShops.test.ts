import { describe, expect, it, beforeAll, afterAll } from "vitest"
import { getOwnedShops } from "./getOwnedShops"

beforeAll(() => {
  const MOCK_API_RESPONSE = JSON.stringify([
    {
      name: "smgssingleproduct",
      id: "smgssingleproduct.mintspace2.testnet",
    },
  ])
  fetchMock.mockResponse(MOCK_API_RESPONSE)
})

describe("getOwnShops", () => {
  it("should return all shops for an owner correctly", async () => {
    const ownerId = "smetzdev-gorillashops.testnet"
    const expectedResult = [
      {
        title: "smgssingleproduct",
        value: "smgssingleproduct.mintspace2.testnet",
      },
    ]

    const result = await getOwnedShops(ownerId)

    expect(result).toEqual(expectedResult)
  })
})

afterAll(() => {
  fetchMock.resetMocks()
})
