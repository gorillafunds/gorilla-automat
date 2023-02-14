import { useEffect, useState } from "react"
import { Spinner } from "../components"

/** Adds fake necessary sessionStorage Objects if not already available */
export const withMockStorage = (StoryFn: Function) => {
  const [hasFakeStorage, setHasFakeStorage] = useState(false)

  // Setup a fake storage on initial load
  useEffect(() => {
    const mockStorageObj = JSON.stringify({
      price: 1,
      amount: 20,
      title: "Mock Title",
      description: "Mock Description",
    })

    const mockShopObj = JSON.stringify({
      title: "MockShop",
      value: "mockShop",
    })

    if (!window.sessionStorage.getItem("gorillaAutomatSetup"))
      window.sessionStorage.setItem("gorillaAutomatSetup", mockStorageObj)

    if (!window.sessionStorage.getItem("gorillaAutomatShop"))
      window.sessionStorage.setItem("gorillaAutomatShop", mockShopObj)

    setHasFakeStorage(true)
  }, [])

  return hasFakeStorage ? StoryFn() : <Spinner />
}
