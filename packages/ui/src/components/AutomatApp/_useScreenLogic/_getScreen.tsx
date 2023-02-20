import { ElementType } from "react"
import * as Screens from "../../../screens"
import { AutomatState } from "../types"

export const getScreen = (currentState: AutomatState): ElementType => {
  const screenMap = {
    connect: Screens.Connect,
    selectShop: Screens.SelectShop,
    selectShopError: Screens.SelectShopError,
    shopPermission: Screens.MintPermission,
    setup: Screens.Setup,
    upload: Screens.Upload,
    uploadProcess: Screens.Uploading,
    uploadError: Screens.UploadError,
    mintConfirm: Screens.Confirm,
    mintStart: Screens.StartProcess,
    mintProcess: Screens.ProcessRunning,
    mintError: Screens.ProcessError,
    finished: Screens.FinishedHasShop,
  }

  return screenMap[currentState]
}
