import React from "react"
import { Story, Meta } from "@storybook/react"
import { TextInput, type TextInputProps } from "./index"

export default {
  title: "Components/FormComponents/TextInput",
  component: TextInput,
  args: {
    placeholder: "Text Input",
    label: "Label",
  },
} as Meta<TextInputProps>

const Template: Story<TextInputProps> = args => <TextInput {...args} />

export const Base = Template.bind({})

export const HasError = Template.bind({})
HasError.args = {
  hasError: true,
}
