import React from "react"
import { WizardStep, WizardStepContent, Button } from "@gorilla-automat/ui"
import { HasNoShopIllu } from "./_HasNoShopIllu"

export const FinishedNoShop = () => {
  return (
    <WizardStep>
      <WizardStepContent className="text-400 flex gap-8 font-light">
        <div className="flex w-1/2 flex-col items-start justify-center">
          <p className="font-sans">
            Hooray — you just minted and listed the whole batch in your
            SooperDooper shop!
          </p>
        </div>
        <div className="relative aspect-square w-1/2 bg-slate-100">
          {/* bgImage */}
          <HasNoShopIllu className="pointer-events-none absolute inset-0 h-full w-1/2 w-full object-center" />
          <div className="relative z-10 px-8 pt-6">
            <h2 className="text-center">How About yor Own NFT Shop?</h2>
            <ul className="mt-6 list-disc space-y-2 pl-4 text-base">
              <li>Customizable design to match your brand</li>
              <li>Set up in minutes</li>
              <li>No coding skills required</li>
            </ul>
            <Button label="Get a GorillaShop" className="mt-6 w-full" />
          </div>
        </div>
      </WizardStepContent>
    </WizardStep>
  )
}
