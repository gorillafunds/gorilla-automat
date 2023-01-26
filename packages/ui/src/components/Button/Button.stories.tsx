import React from "react"
import { Meta, Story } from "@storybook/react"
import { ArrowRight } from "lucide-react"
import { Button, ButtonProps } from "./index"

export default {
  title: "Components/Button",
  component: Button,
} as Meta<ButtonProps>

const Template: Story<ButtonProps> = args => (
  <div className="flex flex-col gap-3 items-start">
    <Button size="small" {...args} />
    <Button size="medium" {...args} />
    <Button size="large" {...args} />
  </div>
)

export const Base = Template.bind({})
Base.args = {
  label: "Button",
}

export const IconEnd = Template.bind({})
IconEnd.args = {
  label: "Icon End",
  icon: <ArrowRight />,
}

export const IconStart = Template.bind({})
IconStart.args = {
  label: "Icon Start",
  iconPosition: "start",
  icon: <ArrowRight />,
}

export const NoLabel = Template.bind({})
NoLabel.args = {
  icon: <ArrowRight />,
  label: "I am hidden",
  hideLabel: true,
}
