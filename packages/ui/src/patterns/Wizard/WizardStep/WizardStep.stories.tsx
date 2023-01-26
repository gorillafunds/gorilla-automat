import React from "react"
import { Button } from "../../../components"
import {
  WizardStep,
  WizardStepHeader,
  WizardStepContent,
  WizardStepFooter,
} from "./index"

export default {
  title: "Patterns/Wizard/WizardStep",
  component: WizardStep,
}

export const WithCompoundComponents = () => (
  <WizardStep>
    <WizardStepHeader>WizardStepHeader</WizardStepHeader>
    <WizardStepContent>Content</WizardStepContent>
    <WizardStepFooter buttons={[<Button label="Button" />]} />
  </WizardStep>
)
