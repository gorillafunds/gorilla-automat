export const getOwnedShops = async (ownderId: string) => {
  // Fetch all shops from ownerId
  const result = await fetch(`${API_URL}/${ownderId}`)
  const json = await result.json()

  // return ShopArray
  return json.map((apiShop: any) => ({
    title: apiShop.name,
    value: apiShop.id,
  }))
}

const API_URL = "https://api.gorillashops.io/get-owned-shops"
