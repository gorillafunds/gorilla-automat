import React, { useState } from "react"
import {
  WizardStep,
  WizardStepHeader,
  WizardStepContent,
  WizardStepFooter,
  Button,
  Spinner,
  Select,
} from "@gorilla-automat/ui"
import { Screen } from "../types"
import { useShops } from "./_useShops"

export type SelectShopProps = Screen

export const SelectShop = ({ actions, automat }: SelectShopProps) => {
  const [shops, selectedShop, setSelectedShop] = useShops(automat.getShops)

  return (
    <WizardStep className="min-w-full">
      <WizardStepHeader>Select Your Shop</WizardStepHeader>
      <WizardStepContent className="flex justify-center">
        {shops ? (
          <div className="flex-1">
            <Select
              selected={selectedShop!}
              setSelected={setSelectedShop}
              options={shops}
            />
          </div>
        ) : (
          <Spinner />
        )}
      </WizardStepContent>
      <WizardStepFooter
        buttons={[
          <Button
            key="next"
            disabled={!selectedShop}
            label="Proceed"
            onClick={actions.next}
          />,
        ]}
      />
    </WizardStep>
  )
}
