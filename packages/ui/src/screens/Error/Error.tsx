import { ReactNode } from "react"
import { Button, Message } from "../../components"
import {
  WizardStep,
  WizardStepContent,
  WizardStepHeader,
  WizardStepFooter,
} from "../../patterns"
import { Screen } from "../types"

export type ScreenError = {
  title: string
  message: ReactNode
  showPrevButton: boolean
}

export interface ErrorProps extends Screen {
  screenError?: ScreenError
}

export const Error = ({
  screenError = {
    title: "Error",
    message: "Something went wrong.",
    showPrevButton: false,
  },
  actions,
}: ErrorProps) => {
  return (
    <WizardStep>
      <WizardStepHeader className="text-red-700">
        {screenError.title}
      </WizardStepHeader>
      <WizardStepContent className="mx-auto max-w-lg md:!py-16">
        <Message variant="negative">
          <span className="font-semibold">Oopsies.</span>
          <br />
          {screenError.message}
        </Message>
      </WizardStepContent>
      {screenError.showPrevButton && (
        <WizardStepFooter
          buttons={[
            <Button label="Try again" onClick={actions.prev} key="prev" />,
          ]}
        />
      )}
    </WizardStep>
  )
}
