import {
  WizardStep,
  WizardStepHeader,
  WizardStepContent,
  WizardStepFooter,
  Button,
  TextInput,
  TextArea,
  Message,
} from "@gorilla-automat/ui"
import { Screen } from "../types"

export type SetupProps = Screen

// TODO: Remove divs when input and textarea are more styleable
export const Setup = ({ actions }: SetupProps) => {
  return (
    <WizardStep>
      <WizardStepHeader>Setup Your Batch</WizardStepHeader>
      <WizardStepContent className="mx-auto grid max-w-lg grid-cols-2 gap-x-8 gap-y-6">
        <TextInput
          className="w-full"
          label="Price of each NFT (NEAR)"
          name="price"
        />
        <TextInput
          className="w-full"
          label="Copies of each NFT"
          name="copies"
        />
        <div className="col-span-2">
          <TextInput
            className="w-full"
            label="Title of each NFT"
            name="title"
          />
        </div>
        <div className="col-span-2">
          <span className="font-medium text-gray-700">
            Description of each NFT
          </span>
          <TextArea
            className="w-full"
            label="Description of each NFT"
            name="description"
          />
        </div>
        {/* TODO: Add correct text-color from */}
        <Message className="col-span-2">
          Tipp You can use the variable{" "}
          <span className="text-purple-300">{`{{ index }}`}</span> in both title
          and description fields to add automated numbering.
        </Message>
      </WizardStepContent>
      <WizardStepFooter
        buttons={[<Button onClick={actions.next} label="Proceed" key="next" />]}
      />
    </WizardStep>
  )
}
