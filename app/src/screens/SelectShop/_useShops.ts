import { useState, useEffect } from "react"
import { IGorillaAutomat } from "src/lib"
import { Option } from "@gorilla-automat/ui"

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
  }, [])

  return [shops, selectedShop, setSelectedShop] as const
}
