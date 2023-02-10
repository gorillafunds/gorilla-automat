import { checkShopPermission } from "./index"

const shopId = "testshop.testnet"

describe("checkShopPermission", () => {
  it("should return true if the api throws true", async () => {
    const MOCK_API_RESPONSE = JSON.stringify({ hasGorillaMinter: true })
    fetchMock.mockResponse(MOCK_API_RESPONSE)

    const trueResult = await checkShopPermission(shopId)

    expect(trueResult).toBe(true)
  })

  it("should return false if the api throws false", async () => {
    const MOCK_API_RESPONSE = JSON.stringify({ hasGorillaMinter: false })
    fetchMock.mockResponse(MOCK_API_RESPONSE)

    const falseResult = await checkShopPermission(shopId)

    expect(falseResult).toBe(false)
  })
})

afterEach(() => {
  fetchMock.resetMocks()
})
