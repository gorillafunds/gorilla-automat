import React from "react"
import { Story, Meta } from "@storybook/react"
import { ProgressBar, type ProgressBarProps } from "./index"

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
  args: {
    percentValue: 32,
    label: "ProgressBar",
  },
} as Meta<ProgressBarProps>

const Template: Story<ProgressBarProps> = args => <ProgressBar {...args} />

export const Base = Template.bind({})
