import { useEffect } from "react"
import { Spinner } from "../../components"
import { WizardStep, WizardStepContent } from "../../patterns"
import { Screen } from "../types"
import { useUploadData } from "./_useUploadData"

export type UploadingProps = Screen

export const Uploading = ({ actions, automat }: Screen) => {
  const { setupData, storeId } = useUploadData()

  useEffect(() => {
    const upload = async () => {
      const uploadSuccess = await automat.uploadToArweave(setupData, storeId)

      if (uploadSuccess) actions.next()
      else actions.error()
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
