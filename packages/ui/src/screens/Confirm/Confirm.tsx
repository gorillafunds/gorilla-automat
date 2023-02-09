import { Checkbox, Message, Button } from "../../components"
import {
  WizardStep,
  WizardStepHeader,
  WizardStepContent,
  WizardStepFooter,
} from "../../patterns"
import { ConfirmDataList } from "./_ConfirmDataList"
import { Screen } from "../types"

export type ConfirmProps = Screen

// TODO: Update Message as soon as it's more flexible
export const Confirm = ({ actions }: ConfirmProps) => {
  return (
    <WizardStep>
      <WizardStepHeader>Confirm Mint &amp; List Settings</WizardStepHeader>
      <WizardStepContent className="mx-auto max-w-lg">
        <ConfirmDataList />
        <Checkbox
          label="I agree to Gorilla Shops’ terms of services and understand that these settings are permanent for each NFT in my batch as soon as the minting process is done."
          name="confirm"
          className="mt-6 text-200"
        />
        <Message variant="important" className="mt-6">
          In the following steps you will be redirected to NEAR to assign
          Automat the role of a minter and the ownership of your NFTs. Please be
          assured that while ownership changes, the smart contract takes care
          that all royalty and revenue will always transfer into your wallet.
          Learn more about our security and trust policy
        </Message>
      </WizardStepContent>
      <WizardStepFooter
        className="!justify-between"
        buttons={[
          <Button
            onClick={actions.prev}
            variant="secondary"
            label="Back to Setup"
            key="prev"
          />,
          <Button
            onClick={actions.next}
            label="Confirm &amp; Proceed"
            key="next"
          />,
        ]}
      />
    </WizardStep>
  )
}
