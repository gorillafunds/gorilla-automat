import { useState } from "react"

export const useSetupStorage = () => {
  const [setupData] = useState(setupStorageInitializer)

  // Explicit return for type inference
  return {
    title: setupData.title,
    description: setupData.description,
    amount: setupData.amount,
    price: setupData.price,
  }
}

/*
 * Use a lazy initializer
 * with this way the data is availalbe instantly to useState
 * but sessionStorage get's only read once
 */
const setupStorageInitializer = () => {
  // Boundary for non-browser environments
  if (!window) return {}

  // read from session storage or abort if gorillaAutomatShop is not available
  const setupStorage = window?.sessionStorage.getItem("gorillaAutomatSetup")
  if (!setupStorage) throw new Error("Setup data is not available")

  const setupData = JSON.parse(setupStorage)

  return setupData
}
