import { Button, Message } from "../../components"
import {
  WizardStep,
  WizardStepContent,
  WizardStepHeader,
  WizardStepFooter,
} from "../../patterns"
import { Screen } from "../types"

export type ProcessErrorProps = Screen

// TODO: Move to component, since this is similar to UploadError
export const ProcessError = ({ actions }: ProcessErrorProps) => {
  return (
    <WizardStep>
      <WizardStepHeader>Mint &amp; List</WizardStepHeader>
      <WizardStepContent className="mx-auto max-w-lg md:!py-16">
        <Message variant="negative">
          <span className="font-semibold">Oopsies.</span> Some error occured
        </Message>
      </WizardStepContent>
      <WizardStepFooter
        buttons={[
          <Button onClick={actions.prev} label="Try again" key="prev" />,
        ]}
      />
    </WizardStep>
  )
}
