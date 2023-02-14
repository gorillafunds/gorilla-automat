import { useEffect, useState } from "react"
import { ProgressBar } from "../../components"
import { WizardStep, WizardStepContent } from "../../patterns"
import { Screen } from "../types"
import { useTimeout } from "../../helper"

export type ProcessRunningProps = Screen

export const ProcessRunning = ({ actions, automat }: ProcessRunningProps) => {
  const [progress, setProgress] = useState(5)

  // Start process on the first render
  useEffect(() => {
    const mintAndList = async () => {
      const result = automat.mintAndList()

      if (result) actions.next()
      actions.error()
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
