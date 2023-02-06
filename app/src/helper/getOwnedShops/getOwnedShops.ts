import { env } from "process"

export const getOwnedShops = async (ownderId: string) => {
  // Fetch all shops from ownerId
  const result = await fetch(
    `${env.GORILLA_API_URL}/get-contract-stores/${ownderId}`,
  )
  const json = await result.json()

  // return ShopArray
  return json.map((apiShop: any) => ({
    title: apiShop.name,
    value: apiShop.id,
  }))
}
