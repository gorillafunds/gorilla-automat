import { Story, Meta } from "@storybook/react"
import { Uploading, UploadingProps } from "./index"
import { withMaxWidth } from "../../decorators"
import { mockActions, storybookAutomat } from "../storybookMocks"

export default {
  title: "Screens/Uploading",
  component: Uploading,
  args: {
    actions: mockActions,
    automat: storybookAutomat,
  },
  decorators: [withMaxWidth],
} as Meta<UploadingProps>

const Template: Story<UploadingProps> = args => <Uploading {...args} />

export const Base = Template.bind({})
