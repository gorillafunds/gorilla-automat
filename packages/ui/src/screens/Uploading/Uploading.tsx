import { useEffect, useRef } from "react"
import { Spinner } from "../../components"
import { WizardStep, WizardStepContent } from "../../patterns"
import { Screen } from "../types"
import { useShopStorage, useSetupStorage } from "../../hooks"

export type UploadingProps = Screen

export const Uploading = ({ actions, automat }: Screen) => {
  // TODO: Try out after switching away from NextJs
  const actionRef = useRef<boolean>(false)
  const setupData = useSetupStorage()
  const { shopId } = useShopStorage()

  useEffect(() => {
    const upload = async () => {
      const uploadSuccess = await automat.uploadToArweave(setupData, shopId)
      if (!actionRef.current) {
        const action = uploadSuccess ? actions.next : actions.error
        actionRef.current = true
        action()
      }
    }

    upload()
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
