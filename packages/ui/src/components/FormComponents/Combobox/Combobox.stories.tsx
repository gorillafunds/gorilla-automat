import React from "react"
import { Meta, Story } from "@storybook/react"
import { Combobox, ComboboxProps } from "./Combobox"

export default {
  title: "Components/FormComponents/Combobox",
  component: Combobox,
} as Meta<ComboboxProps>

const Templpate: Story<ComboboxProps> = () => (
  <Combobox onChange={() => null} items={["Hallo", "test"]} disabled={false} />
)
export const Base = Templpate.bind({})
