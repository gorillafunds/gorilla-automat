import { useEffect, useState } from "react"
import { FileInput, Button, Message } from "../../components"
import {
  WizardStep,
  WizardStepHeader,
  WizardStepContent,
  WizardStepFooter,
} from "../../patterns"
import { Screen } from "../types"

export type UploadProps = Screen

// TODO: Remove span label for FileInput when FileInput is optimized
// TODO: Add correct sample zip file
export const Upload = ({ actions, automat }: UploadProps) => {
  const [file, setFile] = useState<File>()

  // Handle file change
  useEffect(() => {
    if (file) automat.handleZip(file)
  }, [file, automat])

  return (
    <WizardStep>
      <WizardStepHeader>Upload Your NFTs</WizardStepHeader>
      <WizardStepContent className="mx-auto max-w-lg">
        <span className="font-medium text-gray-700">Select your ZIP file</span>
        <FileInput {...{ setFile }} name="zip" />
        <Message className="mt-6">
          Tipp Download our{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="underline font-medium underline-offset-4"
            href="https://gorillashops.io"
          >
            sample ZIP file
          </a>
          , unpack it and learn how it must be structured.
        </Message>
      </WizardStepContent>
      <WizardStepFooter
        buttons={[
          <Button
            label="Proceed"
            disabled={!file}
            onClick={actions.next}
            key="next"
          />,
        ]}
      />
    </WizardStep>
  )
}
