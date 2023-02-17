import { useEffect, useRef } from "react"
import { Spinner } from "../../components"
import { WizardStep, WizardStepContent } from "../../patterns"
import { Screen } from "../types"
import { useShopStorage, useSetupStorage } from "../../hooks"
import { ScreenError } from ".."

export type UploadingProps = Screen

export const Uploading = ({ actions, automat }: Screen) => {
  // TODO: Try out after switching away from NextJs
  const actionRef = useRef<boolean>(false)
  const setupData = useSetupStorage()
  const { shopId } = useShopStorage()

  // Defines a screenError and calls actions.error with it
  const throwUploadError = () => {
    const screenError: ScreenError = {
      title: "Upload Error",
      message: "We could not upload your NFTs, please try again.",
      showPrevButton: true,
    }
    actions.error(screenError)
  }

  useEffect(() => {
    if (actionRef.current) return
    const upload = async () => {
      console.log("🚨 Start upload")
      const uploadSuccess = await automat.uploadToArweave(setupData, shopId)
      const action = uploadSuccess ? actions.next : throwUploadError
      action()
    }

    upload()
    actionRef.current = true
  }, [])

  return (
    <div className="flex items-center justify-center">
      <WizardStep>
        <WizardStepContent className="inline-flex flex-col items-center gap-2">
          <Spinner />
          Uploading
        </WizardStepContent>
      </WizardStep>
    </div>
  )
}
