import { Story, Meta } from "@storybook/react"
import { UploadError, UploadErrorProps } from "./index"
import { StorybookAutomat } from "@gorilla-automat/domain"
import { withMaxWidth } from "../../decorators"
import { mockActions } from "../storybookMocks"

export default {
  title: "Screens/UploadError",
  component: UploadError,
  args: {
    actions: mockActions,
    automat: new StorybookAutomat(),
  },
  decorators: [withMaxWidth],
} as Meta<UploadErrorProps>

const Template: Story<UploadErrorProps> = (args) => <UploadError {...args} />

export const Base = Template.bind({})
