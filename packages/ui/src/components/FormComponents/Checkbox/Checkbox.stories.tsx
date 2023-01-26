import React from "react"
import { Story, Meta } from "@storybook/react"
import { Checkbox, CheckboxProps, useCheckbox } from "./index"

export default {
  title: "Components/FormComponents/Checkbox",
  component: Checkbox,
  args: {
    label: "Required Checkbox Label",
  },
} as Meta<CheckboxProps>
const Template: Story<CheckboxProps> = args => {
  const [checked, onCheckboxChange] = useCheckbox(false)

  return <Checkbox {...args} checked={checked} onChange={onCheckboxChange} />
}

export const Base = Template.bind({})

export const HasError = Template.bind({})
HasError.args = {
  hasError: true,
}
