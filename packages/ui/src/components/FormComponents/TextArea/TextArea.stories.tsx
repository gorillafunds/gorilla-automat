import React from "react"
import { Story, Meta } from "@storybook/react"
import { TextArea, type TextAreaProps } from "./index"

export default {
  title: "Components/FormComponents/TextArea",
  component: TextArea,
  args: {
    label: "Text Area",
    name: "Text Area",
    placeholder: "Type something",
  },
} as Meta<TextAreaProps>

const Template: Story<TextAreaProps> = args => <TextArea {...args} />

export const Base = Template.bind({})

export const HasError = Template.bind({})
HasError.args = {
  hasError: true,
}
