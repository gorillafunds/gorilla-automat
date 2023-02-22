import { Story, Meta } from "@storybook/react"
import { Uploading, UploadingProps } from "./index"
import { withMaxWidth, withMockStorage } from "../../decorators"
import { mockActions, StorybookAutomat } from "../storybookMocks"

export default {
  title: "Screens/Uploading",
  component: Uploading,
  args: {
    actions: mockActions,
    automat: new StorybookAutomat(),
  },
  decorators: [withMaxWidth, withMockStorage],
} as Meta<UploadingProps>

const Template: Story<UploadingProps> = (args) => <Uploading {...args} />

export const Base = Template.bind({})
