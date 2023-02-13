import { useEffect, useRef } from "react"
import { Screen } from "../types"

/** If the shop has already all  permissions, the app goes to the next step automatically */
export const usePermission = (
  actions: Screen["actions"],
  automat: Screen["automat"],
  shopId: string | undefined,
) => {
  // NextJs renders the whole app twice, this avoids problems caused by that
  const executedRef = useRef<boolean>()

  useEffect(() => {
    const checkPermission = async () => {
      if (!shopId) return
      const hasPermission = await automat.checkShopPermission(shopId)

      if (hasPermission && !executedRef.current) {
        executedRef.current = true
        actions.next()
      }
    }
    checkPermission()
  }, [actions, automat])
}
