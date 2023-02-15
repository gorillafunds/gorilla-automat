import { useEffect, useState, useRef } from "react"
import { ProgressBar } from "../../components"
import { WizardStep, WizardStepContent } from "../../patterns"
import { Screen } from "../types"
import { useTimeout } from "../../helper"
import { useStoreId } from "./_useStoreId"

export type ProcessRunningProps = Screen

export const ProcessRunning = ({ actions, automat }: ProcessRunningProps) => {
  // TODO: Try out after switching away from NextJs
  const actionRef = useRef<boolean>(false)
  const [progress, setProgress] = useState(5)
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

  // Just a dummy
  useTimeout(() => setProgress(100), 6000)
  useTimeout(() => setProgress(75), 4500)
  useTimeout(() => setProgress(50), 3000)
  useTimeout(() => setProgress(25), 1500)
  useTimeout(actions.next, 7000)

  return (
    <WizardStep>
      <WizardStepContent className="mx-auto flex max-w-lg flex-col items-center gap-2">
        <ProgressBar percentValue={progress} label="Progress" />
        <span>{progress}% minted</span>
      </WizardStepContent>
    </WizardStep>
  )
}
