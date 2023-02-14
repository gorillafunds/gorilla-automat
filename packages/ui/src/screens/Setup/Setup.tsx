import { Button, TextInput, TextArea, Message } from "../../components"
import {
  WizardStep,
  WizardStepHeader,
  WizardStepContent,
  WizardStepFooter,
} from "../../patterns"
import { Screen } from "../types"
import { useSetupFields } from "./_useSetupFields"

export type SetupProps = Screen

// TODO: Remove divs when input and textarea are more styleable
export const Setup = ({ actions }: SetupProps) => {
  const [fields, handleChange, isValid, handleProceed] = useSetupFields(actions)

  return (
    <WizardStep>
      <WizardStepHeader>Setup Your Batch</WizardStepHeader>
      <WizardStepContent className="mx-auto grid max-w-lg grid-cols-2 gap-x-8 gap-y-6">
        <TextInput
          className="w-full"
          label="Price of each NFT (NEAR)"
          name="price"
          type="number"
          value={fields.price}
          onChange={handleChange}
        />
        {/* TODO: Remove copy limit as soon as mintbase confirms */}
        <TextInput
          className="w-full"
          label="Copies of each NFT"
          name="amount"
          type="number"
          max={20}
          value={fields.amount}
          onChange={handleChange}
        />
        <div className="col-span-2">
          <TextInput
            className="w-full"
            label="Title of each NFT"
            name="title"
            value={fields.title}
            onChange={handleChange}
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
            value={fields.description}
            onChange={handleChange}
          />
        </div>
        {/* TODO: Add correct text-color from */}
        {/* TODO: Add {{index}} functionallity */}
        {/* <Message className="col-span-2">
          Tipp You can use the variable{" "}
          <span className="text-purple-300">{`{{ index }}`}</span> in both title
          and description fields to add automated numbering.
        </Message> */}
      </WizardStepContent>
      <WizardStepFooter
        buttons={[
          <Button
            disabled={!isValid}
            onClick={handleProceed}
            label="Proceed"
            key="next"
          />,
        ]}
      />
    </WizardStep>
  )
}
