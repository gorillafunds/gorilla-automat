import { Story, Meta } from "@storybook/react"
import { UploadError, UploadErrorProps } from "./index"
import { withMaxWidth } from "../../decorators"
import { mockActions, storybookAutomat } from "../storybookMocks"

export default {
  title: "Screens/UploadError",
  component: UploadError,
  args: {
    actions: mockActions,
    automat: storybookAutomat,
  },
  decorators: [withMaxWidth],
} as Meta<UploadErrorProps>

const Template: Story<UploadErrorProps> = args => <UploadError {...args} />

export const Base = Template.bind({})
