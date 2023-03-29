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
    if (!file) return
    const validateZip = async () => {
      // Valid means the amount of nft files is <= 10
      const zipIsValid = await automat.handleZip(file)

      if (!zipIsValid)
        actions.error({
          title: "File Validation Error",
          message: (
            <>
              <p>The Zip File you've provided is not valid.</p>
              <p>This could have several reasons:</p>
              <br />
              <ul>
                <li>- You've exceeded the file limit of 5</li>
                <li>- The JSON-Metadata is not valid</li>
                <li>- The ZIP-File does not contain a metadata.json at all</li>
              </ul>
            </>
          ),
          showPrevButton: true,
        })
    }

    if (file) validateZip()
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
            href="https://gorilla-assets.s3.eu-central-1.amazonaws.com/automat/automat-example.zip"
          >
            sample ZIP file
          </a>
          , unpack it and learn how it must be structured.
        </Message>
        <Message variant="important" className="mt-6">
          At the moment we are limited to a max amount of 10 files per ZIP (JSON
          File not counted).
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
