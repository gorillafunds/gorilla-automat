import React, { useState } from "react"
import { Story, Meta } from "@storybook/react"
import { FileInput, type FileInputProps } from "./index"

export default {
  title: "Components/FormComponents/FileInput",
  component: FileInput,
  args: {},
} as Meta<FileInputProps>

const Template: Story<FileInputProps> = args => {
  const [, setFile] = useState<File>()
  return <FileInput {...args} setFile={setFile} />
}

export const Base = Template.bind({})

export const HasError = Template.bind({})
HasError.args = {
  hasError: true,
}
