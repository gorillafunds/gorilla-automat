import { useEffect } from "react"
import { Screen } from "../types"

/** If the shop has already all  permissions, the app goes to the next step automatically */
export const usePermission = (
  actions: Screen["actions"],
  automat: Screen["automat"],
  shopId: string | undefined,
) => {
  useEffect(() => {
    const checkPermission = async () => {
      if (!shopId) return
      const hasPermission = await automat.checkShopPermission(shopId)

      if (hasPermission) actions.next()
    }
    checkPermission()
  }, [actions, automat])
}
