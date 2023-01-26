import React, { useState } from "react"
import { Checkbox, WizardStep, WizardStepContent } from "@gorilla-automat/ui"
import { ConnectWallet } from "./_ConnectWallet"
import { ConnectIllu } from "./_ConnextIllu"
import { Screen } from "../types"

export type ConnectProps = Screen

export const Connect = ({ automat, actions }: ConnectProps) => {
  const [feeConsent, setFeeConsent] = useState(false)
  const toggleConsent = () => {
    const newState = !feeConsent
    setFeeConsent(newState)
  }

  const connectWallet = async () => {
    // Connect wallet returns a boolean, if actions.next() should be called
    const goToNextScreen = await automat.connectWallet()
    if (goToNextScreen) actions.next()
  }

  return (
    <WizardStep>
      <WizardStepContent className="text-400 flex gap-8 font-light">
        <ConnectIllu className="aspect-square w-1/2" />
        <div className="flex w-1/2 flex-col items-start justify-center">
          <h2 className="font-sans">
            Get ready to mint and list thousands of NFTs in just one single
            batch!
          </h2>
          <ConnectWallet
            disabled={!feeConsent}
            className="mt-6"
            connect={connectWallet}
          />
          <Checkbox
            name="feeConsent"
            checked={feeConsent}
            label="I understand that Gorilla Shops will earn 1% off the selling price whenever I sell an NFT through my Gorilla Shop."
            className="mt-6 text-xs"
            onChange={toggleConsent}
          />
        </div>
      </WizardStepContent>
    </WizardStep>
  )
}
