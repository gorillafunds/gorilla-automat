import { useState } from "react"

export const useUploadData = () => {
  const [uploadData] = useState(setupDataInitializer)

  return {
    setupData: uploadData?.setupData,
    storeId: uploadData?.storeId,
  }
}

const setupDataInitializer = () => {
  if (typeof window === "undefined") return

  const setupStorage = window?.sessionStorage.getItem("gorillaAutomatSetup")
  if (!setupStorage) throw new Error("Setup data is not available")

  const storeStorage = window?.sessionStorage.getItem("gorillaAutomatShop")
  if (!storeStorage) throw new Error("Store data is not available")

  const setupData = JSON.parse(setupStorage)
  const storeId = JSON.parse(storeStorage).value

  return {
    setupData,
    storeId,
  }
}
