import { useState, useEffect } from "react"
import { IGorillaAutomat } from "@gorilla-automat/domain"
import { Screen } from "../types"
import { Option } from "../../components"

export const useShops = (
  getShops: IGorillaAutomat["getShops"],
  actions: Screen["actions"],
) => {
  const [shops, setShops] = useState<Option[]>()
  const [selectedShop, setSelectedShop] = useState<Option>()

  useEffect(() => {
    const initializeShops = async () => {
      try {
        const apiShops = await getShops()
        console.log(apiShops)
        if (!apiShops.length) {
          actions.error()
          return
        }

        setShops(apiShops)
        setSelectedShop(apiShops[0])
      } catch (_) {
        actions.error()
      }
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
