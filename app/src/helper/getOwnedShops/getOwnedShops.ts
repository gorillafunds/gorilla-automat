// TODO: Add storybook version of
export const getOwnedShops = async (ownderId: string) => {
  // Fetch all shops from ownerId
  const result = await fetch(`${API_URL}/get-contract-stores/${ownderId}`)
  const json = await result.json()

  // return ShopArray
  return json.map((apiShop: any) => ({
    label: apiShop.name,
    value: apiShop.id,
  }))
}

// TODO Find a way to not use two ENV Vars for the same matter
const API_URL = process.env.GORILLA_API_URL
