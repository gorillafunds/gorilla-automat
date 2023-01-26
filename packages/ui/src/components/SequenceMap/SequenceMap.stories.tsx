import React, { useState } from "react"
import { Story, Meta } from "@storybook/react"
import { SequenceMap, type SequenceMapProps } from "./index"

export default {
  title: "Components/SequenceMap",
  component: SequenceMap,
  args: {
    steps: [
      {
        label: "Connect",
        isDone: true,
      },
      {
        label: "Upload",
        isDone: false,
      },
      {
        label: "Mint",
        isDone: false,
      },
      {
        label: "List",
        isDone: false,
      },
      {
        label: "Label",
        isDone: false,
      },
    ],
  },
} as Meta<SequenceMapProps>

const Template: Story<SequenceMapProps> = args => {
  const [currentIndex, setCurrentIndex] = useState(1)
  return <SequenceMap {...args} {...{ currentIndex, setCurrentIndex }} />
}

export const Base = Template.bind({})
