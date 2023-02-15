import { useState } from "react"

export const useStoreId = () => {
  const [storeId] = useState(initializeShopId)

  return storeId
}

const initializeShopId = () => {
  if (typeof window === "undefined") return

  const storeStorage = window?.sessionStorage.getItem("gorillaAutomatShop")
  if (!storeStorage) throw new Error("Store data is not available")

  const storeId = JSON.parse(storeStorage).value

  return storeId
}
