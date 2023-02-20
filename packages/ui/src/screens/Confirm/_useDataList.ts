import { useSetupStorage, useShopStorage } from "../../hooks"

export const useDataList = () => {
  const setupData = useSetupStorage()
  const shopData = useShopStorage()

  const dataList = [
    {
      title: "Shop",
      value: shopData.shopTitle,
    },
    {
      title: "Price",
      value: setupData.price,
    },
    {
      title: "Copies",
      value: setupData.amount,
    },
    {
      title: "Title",
      value: setupData.title,
    },
    {
      title: "Description",
      value: setupData.description,
    },
  ]

  return dataList
}
