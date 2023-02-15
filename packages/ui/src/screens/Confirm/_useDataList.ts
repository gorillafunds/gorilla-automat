import { useState } from "react"

export const useDataList = () => {
  const [setupData] = useState(initilizeDataList)

  const dataList = [
    {
      title: "Shop",
      value: setupData?.storeTitle,
    },
    {
      title: "Price",
      value: setupData?.price,
    },
    {
      title: "Copies",
      value: setupData?.copies,
    },
    {
      title: "Title",
      value: setupData?.title,
    },
    {
      title: "Description",
      value: setupData?.description,
    },
  ]

  return dataList
}

const initilizeDataList = () => {
  if (typeof window === "undefined") return

  const setupStorage = window?.sessionStorage.getItem("gorillaAutomatSetup")
  if (!setupStorage) throw new Error("Setup data is not available")

  const storeStorage = window?.sessionStorage.getItem("gorillaAutomatShop")
  if (!storeStorage) throw new Error("Store data is not available")

  const setupData = JSON.parse(setupStorage)
  const storeTitle = JSON.parse(storeStorage).title

  return {
    storeTitle,
    title: setupData.title || "",
    description: setupData.description || "",
    copies: setupData.amount || 0,
    price: setupData.price || 0,
  }
}

type dataList = {}
