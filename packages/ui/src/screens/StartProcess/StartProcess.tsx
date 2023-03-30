import { useState } from "react"
import { Message, Button } from "../../components"
import {
  WizardStep,
  WizardStepHeader,
  WizardStepContent,
  WizardStepFooter,
} from "../../patterns"
import { Screen } from "../types"
import { useSetupStorage } from "../../hooks"

export type StartProcessProps = Screen

export const StartProcess = ({ actions, automat }: StartProcessProps) => {
  const [count, setCount] = useState<number>(getDurationTime())
  /**
   *
   * Calculate File lenght(a) of the input zip file and
   * copys(b) (from from setup settings) for each file,
   * to get the DurationTime for Minting => a*b*5
   */
  function getDurationTime() {
    return automat.getFileCount() * useSetupStorage().amount * 3
  }

  return (
    <WizardStep>
      <WizardStepHeader>Mint &amp; List</WizardStepHeader>
      <WizardStepContent className="mx-auto max-w-lg md:!py-16">
        <Message variant="important">
          Minting and listing might take
          <span className="font-semibold"> {count}</span> minutes.{" "}
          <span className="font-semibold">
            Do not close this tab while processing!
          </span>
        </Message>
      </WizardStepContent>
      <WizardStepFooter
        buttons={[
          <Button
            label="Start Minting &amp; Listing"
            onClick={actions.next}
            key="next"
          />,
        ]}
      />
    </WizardStep>
  )
}
