export const checkShopPermission = async (shopId: string) => {
  const result = await fetch(`${API_URL}/has-gorilla-minter/${shopId}`)
  const json: any = await result.json()

  return json.hasGorillaMinter
}

const API_URL = process.env.GORILLA_API_URL
