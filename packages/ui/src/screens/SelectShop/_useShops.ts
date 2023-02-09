import { useState, useEffect } from "react"
import { IGorillaAutomat } from "@gorilla-automat/domain"
import { Option } from "../../components"

export const useShops = (getShops: IGorillaAutomat["getShops"]) => {
  const [shops, setShops] = useState<Option[]>()
  const [selectedShop, setSelectedShop] = useState<Option>()

  useEffect(() => {
    const initializeShops = async () => {
      const apiShops = await getShops()
      setShops(apiShops)
      setSelectedShop(apiShops[0])
    }

    initializeShops()
  }, [getShops])

  // Update sessionStorage when "selectedShop" changes
  useEffect(() => {
    window?.sessionStorage.setItem(
      "gorillaAutomatShop",
      JSON.stringify(selectedShop),
    )
  }, [selectedShop])

  return [shops, selectedShop, setSelectedShop] as const
}
