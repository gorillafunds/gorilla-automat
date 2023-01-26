import React from "react"
import { WizardStep, WizardStepContent, Button } from "@gorilla-automat/ui"
import { HasShopIllu } from "./_HasShopIllu"

export const FinishedHasShop = () => {
  return (
    <WizardStep>
      <WizardStepContent className="text-400 flex gap-8 font-light">
        {/* TODO: Replace with dynammic Image */}
        <HasShopIllu className="aspect-square w-1/2" />
        <div className="flex w-1/2 flex-col items-start justify-center">
          <h2 className="font-sans">
            Hooray — you just minted and listed the whole batch in your
            SooperDooper shop!
          </h2>
          <Button className="mt-6" label="GorillaShop Dashboard" />
        </div>
      </WizardStepContent>
    </WizardStep>
  )
}
