import { useState } from "react"

export const useShopStorage = () => {
  const [shopData] = useState(shopStorageInitializer)

  return {
    shopTitle: shopData.label,
    shopId: shopData.value,
  }
}

/*
 * Use a lazy initializer
 * with this way the data is availalbe instantly to useState
 * but sessionStorage get's only read once
 */
const shopStorageInitializer = () => {
  // Boundary for non-browser environments
  if (!window) return {}

  // read from session storage or abort if gorillaAutomatShop is not available
  const shopStorage = window?.sessionStorage.getItem("gorillaAutomatShop")
  if (!shopStorage) throw new Error("Shop data is not available")

  const shopData = JSON.parse(shopStorage)

  return shopData
}
