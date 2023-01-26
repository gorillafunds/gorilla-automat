import React, { useState } from "react"
import { Story, Meta } from "@storybook/react"
import { Wizard, type WizardProps } from "./index"
import SequenceMapStories from "../../components/SequenceMap/SequenceMap.stories"

export default {
  title: "Patterns/Wizard",
  component: Wizard,
} as Meta<WizardProps>

const Template: Story<WizardProps> = () => {
  const [currentIndex] = useState(1)
  const sequenceMap = {
    steps: SequenceMapStories.args!.steps!,
    currentIndex,
  }
  return (
    <Wizard {...{ sequenceMap }}>
      <div className="bg-gray-200 h-full flex-1 flex items-center justify-center">
        Content
      </div>
    </Wizard>
  )
}

export const Base = Template.bind({})
