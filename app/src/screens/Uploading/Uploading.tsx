import React, { useEffect, useState } from "react"
import { WizardStep, WizardStepContent, Spinner } from "@gorilla-automat/ui"
import { Screen } from "../types"
import { useTimeout } from "../../helper"

export type UploadingProps = Screen

export const Uploading = ({ actions }: Screen) => {
  useTimeout(actions.next, 2500)
  return (
    <div className="flex items-center justify-center">
      <WizardStep>
        <WizardStepContent className="inline-flex flex-col items-center gap-2">
          <Spinner />
          Uploading
        </WizardStepContent>
      </WizardStep>
    </div>
  )
}
