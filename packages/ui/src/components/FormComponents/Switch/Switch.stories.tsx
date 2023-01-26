import React, { useState } from "react"
import { Story, Meta } from "@storybook/react"
import { Switch, type SwitchProps } from "./index"

export default {
  title: "Components/FormComponents/Switch",
  component: Switch,
  args: {
    hasError: false,
  },
} as Meta<SwitchProps>

const Template: Story<SwitchProps> = args => {
  const [checked, setChecked] = useState(false)

  return <Switch {...args} checked={checked} onChange={setChecked} />
}

export const Base = Template.bind({})

export const ErrorState = Template.bind({})
ErrorState.args = {
  hasError: true,
}
