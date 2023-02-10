import { useEffect, useState } from "react"
import { Screen } from "../types"
import { Message, Button } from "../../components"
import {
  WizardStep,
  WizardStepHeader,
  WizardStepFooter,
  WizardStepContent,
} from "../../patterns"
import { useShopId } from "./_useShopId"
import { usePermission } from "./_usePermission"

export type MintPermissionProps = Screen

export const MintPermission = ({ actions, automat }: MintPermissionProps) => {
  const shopId = useShopId()
  usePermission(actions, automat, shopId)

  const handleProceed = () => {
    automat.grantMintPermission(shopId)
  }

  return (
    <WizardStep>
      <WizardStepHeader>Mint Permission</WizardStepHeader>
      <WizardStepContent>
        <Message variant="important">
          In the following steps you will be redirected to NEAR to assign
          Automat the role of a minter and the ownership of your NFTs. Please be
          assured that while ownership changes, the smart contract takes care
          that all royalty and revenue will always transfer into your wallet.
          Learn more about our security and trust policy
        </Message>
      </WizardStepContent>
      <WizardStepFooter
        buttons={[
          <Button label="Proceed" key="proceed" onClick={handleProceed} />,
        ]}
      />
    </WizardStep>
  )
}
