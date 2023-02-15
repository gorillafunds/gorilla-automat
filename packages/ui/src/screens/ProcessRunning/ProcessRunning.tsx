import { useEffect, useRef } from "react"
/* import { ProgressBar } from "../../components" */
import { GorillaLogo } from "../../components"
import { WizardStep, WizardStepContent } from "../../patterns"
import { Screen } from "../types"
import { useStoreId } from "./_useStoreId"

export type ProcessRunningProps = Screen

export const ProcessRunning = ({ actions, automat }: ProcessRunningProps) => {
  // TODO: Try out after switching away from NextJs
  const actionRef = useRef<boolean>(false)
  const storeId = useStoreId()

  // Start process on the first render
  useEffect(() => {
    const mintAndList = async () => {
      const result = await automat.mintAndList(storeId)

      if (!actionRef.current) {
        const action = result ? actions.next : actions.error
        actionRef.current = true
        action()
      }
    }
    mintAndList()
  }, [])

  return (
    <WizardStep>
      <WizardStepContent className="mx-auto flex max-w-lg flex-col items-center gap-2">
        {/* <ProgressBar percentValue={progress} label="Progress" />
        <span>{progress}% minted</span> */}
        <GorillaLogo className="w-16 h-16" />
        <p>We are minting and Listing your NFTs...</p>
        <p>This could take several time.</p>
      </WizardStepContent>
    </WizardStep>
  )
}
