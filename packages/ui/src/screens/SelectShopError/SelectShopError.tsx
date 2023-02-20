import { Button, Message } from "../../components"
import {
  WizardStep,
  WizardStepContent,
  WizardStepHeader,
  WizardStepFooter,
} from "../../patterns"
import { Screen } from "../types"

export type SelectShopErrorProps = Screen

export const SelectShopError = ({ actions }: SelectShopErrorProps) => {
  return (
    <WizardStep>
      <WizardStepHeader>Select Shop</WizardStepHeader>
      <WizardStepContent className="mx-auto max-w-lg md:!py-16">
        <Message variant="negative">
          <span className="font-semibold">Oopsies.</span>
          <br />
          Your wallet does not seem to have any shops!
          <br />
          Maybe you have another wallet which already contains at least one
          shop?
          <br />
          If not, This might be the perfect time to head on over to Mintbase,
          create a shop, and come back later.
        </Message>
      </WizardStepContent>
    </WizardStep>
  )
}
