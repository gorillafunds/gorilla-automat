import { useState } from "react"

const initializeShopId = () => {
  const shopStorage = window.sessionStorage.getItem("gorillaAutomatShop")

  if (!shopStorage) throw new Error("no shop has been set")

  const shopStorageJson: any = JSON.parse(
    window.sessionStorage.getItem("gorillaAutomatShop") as string,
  )
  const shopId = shopStorageJson.value!
  return shopId
}

export const useShopId = () => {
  const [shopId] = useState(initializeShopId)
  return shopId
}
