import React, { ReactNode } from "react"
import { type SequenceMapProps } from "../../components"
import { WizardHeader } from "./_WizardHeader"
import { WizardContent } from "./_WizardContent"
import { WizardFooter } from "./_WizardFooter"

export interface WizardProps {
  sequenceMap: SequenceMapProps
  children: ReactNode
}

export const Wizard = ({ sequenceMap, children }: WizardProps) => {
  return <WizardContent {...{ sequenceMap }}>{children}</WizardContent>
}
