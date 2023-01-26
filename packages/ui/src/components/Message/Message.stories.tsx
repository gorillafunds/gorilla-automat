import React from "react"
import { Meta, Story } from "@storybook/react"
import { Message, MessageProps } from "./index"

export default {
  title: "Components/Message",
  component: Message,
  args: {
    children: "Salvation disgust passion",
  },
} as Meta<MessageProps>

const Template: Story<MessageProps> = (args) => (
  <div className="flex flex-col gap-4">
    <Message variant="neutral" {...args} />
    <Message variant="negative" {...args} />
    <Message variant="positive" {...args} />
    <Message variant="important" {...args} />
  </div>
)

export const Base = Template.bind({})

export const IsOverlay = Template.bind({})
IsOverlay.args = {
  isOverlay: true,
}
