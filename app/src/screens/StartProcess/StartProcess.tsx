import React from "react"
import {
  WizardStep,
  WizardStepHeader,
  WizardStepContent,
  WizardStepFooter,
  Message,
  Button,
} from "@gorilla-automat/ui"
import { Screen } from "../types"

export type StartProcessProps = Screen

export const StartProcess = ({ actions }: StartProcessProps) => {
  return (
    <WizardStep>
      <WizardStepHeader>Mint &amp; List</WizardStepHeader>
      <WizardStepContent className="mx-auto max-w-lg md:!py-16">
        <Message variant="important">
          Minting and listing might take a couple of minutes.{" "}
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
