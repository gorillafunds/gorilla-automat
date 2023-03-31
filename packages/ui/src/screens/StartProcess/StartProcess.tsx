import { Message, Button } from "../../components"
import {
  WizardStep,
  WizardStepHeader,
  WizardStepContent,
  WizardStepFooter,
} from "../../patterns"
import { Screen } from "../types"

export type StartProcessProps = Screen

export const StartProcess = ({ actions }: StartProcessProps) => {
  return (
    <WizardStep>
      <WizardStepHeader>Mint &amp; List</WizardStepHeader>
      <WizardStepContent className="mx-auto max-w-lg md:!py-16">
        <Message variant="important">
          Minting and listing might take a couple of minutes.
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
