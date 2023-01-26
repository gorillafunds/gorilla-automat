import React from "react"
import { Story, Meta } from "@storybook/react"
import { RadioButton, RadioButtonProps } from "./index"

export default {
  title: " Components/FormComponents/RadioButton",
  component: RadioButton,
  args: {},
} as Meta<RadioButtonProps>

const options: RadioButtonProps[] = [
  {
    defaultChecked: true,
    name: "radioBtn",
    value: "option1",
    label: "Option 1",
  },
  {
    name: "radioBtn",
    value: "option2",
    label: "Option 2",
  },
  {
    name: "radioBtn",
    value: "option3",
    label: "Option 3",
  },
]

const Template: Story<RadioButtonProps> = args => (
  <div className="flex flex-col space-y-2">
    {options.map(option => (
      <RadioButton {...option} {...args} />
    ))}
  </div>
)

export const Base = Template.bind({})

export const HasError = Template.bind({})
HasError.args = {
  hasError: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
