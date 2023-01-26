import React, { useState } from "react"
import { Story, Meta } from "@storybook/react"
import { Select, SelectProps } from "./index"

export default {
  title: "Components/FormComponents/Select",
  component: Select,
  args: {
    label: "Assigned to",
    options: [
      { value: 1, label: "Jakob Sievers" },
      { value: 2, label: "Jonas Hartweg" },
      { value: 3, label: "Sascha Metz" },
      { value: 4, label: "Aymie Emil ohne L" },
      { value: 5, label: "Reimar, mehr muss man net sagen" },
      { value: 6, label: "Luke Skywalker" },
      { value: 7, label: "Verfolger Holger" },
      { value: 8, label: "Buffalo Bill" },
      { value: 9, label: "Jakob Sievers mit Laptop" },
    ],
  },
} as Meta<SelectProps>

const Template: Story<SelectProps> = args => {
  const [selected, setSelected] = useState(args.options[0])
  return <Select {...args} {...{ selected, setSelected }} />
}

export const Base = Template.bind({})

export const HasError = Template.bind({})
HasError.args = {
  hasError: true,
}
