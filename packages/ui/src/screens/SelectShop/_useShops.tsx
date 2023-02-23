import { useState, useEffect } from "react"
import { IGorillaAutomat } from "@gorilla-automat/domain"
import { Screen } from "../types"
import { Option } from "../../components"
import { ScreenError } from ".."

export const useShops = (
  getShops: IGorillaAutomat["getShops"],
  actions: Screen["actions"],
) => {
  const [shops, setShops] = useState<Option[]>()
  const [selectedShop, setSelectedShop] = useState<Option>()

  // Defines a screenError and calls actions.error with it
  const throwShopError = () => {
    const screenError: ScreenError = {
      title: "Select Shop Error",
      message: (
        <>
          Your wallet does not seem to have any shops!
          <br />
          Maybe you have another wallet which already contains at least one
          shop?
          <br />
          If not, This might be the perfect time to head on over to Mintbase,
          create a shop, and come back later.
        </>
      ),
      showPrevButton: false,
    }
    actions.error(screenError)
  }

  // Get a list of shops on intial load and populate screen
  useEffect(() => {
    const initializeShops = async () => {
      try {
        const apiShops = await getShops()

        if (!apiShops.length) {
          throwShopError()
          return
        }

        setShops(apiShops)
        setSelectedShop(apiShops[0])
      } catch (_) {
        throwShopError()
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
