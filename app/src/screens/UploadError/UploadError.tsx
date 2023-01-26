import React from "react"
import {
  WizardStep,
  WizardStepContent,
  WizardStepHeader,
  WizardStepFooter,
  Button,
  Message,
} from "@gorilla-automat/ui"
import { Screen } from "../types"

export type UploadErrorProps = Screen

export const UploadError = ({ actions }: UploadErrorProps) => {
  return (
    <WizardStep>
      <WizardStepHeader>Upload Your NFTs</WizardStepHeader>
      <WizardStepContent className="mx-auto max-w-lg md:!py-16">
        <Message variant="negative">
          <span className="font-semibold">Oopsies.</span> Some error occured
        </Message>
      </WizardStepContent>
      <WizardStepFooter
        buttons={[
          <Button label="Try again" onClick={actions.prev} key="prev" />,
        ]}
      />
    </WizardStep>
  )
}
