import { useEffect, useState, useRef } from "react"
import { ProgressBar } from "../../components"
import { WizardStep, WizardStepContent } from "../../patterns"
import { Screen } from "../types"
import { useStoreId } from "./_useStoreId"

export type ProcessRunningProps = Screen

export const ProcessRunning = ({ actions, automat }: ProcessRunningProps) => {
  // TODO: Try out after switching away from NextJs
  const actionRef = useRef<boolean>(false)
  const [progress] = useState(5)
  const storeId = useStoreId()

  // Start process on the first render
  useEffect(() => {
    const mintAndList = async () => {
      const result = automat.mintAndList(storeId)

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
        <ProgressBar percentValue={progress} label="Progress" />
        <span>{progress}% minted</span>
      </WizardStepContent>
    </WizardStep>
  )
}
