import { Story, Meta } from "@storybook/react"
import { Upload, UploadProps } from "./index"
import { StorybookAutomat } from "@gorilla-automat/domain"
import { withMaxWidth } from "../../decorators"
import { mockActions } from "../storybookMocks"

export default {
  title: "Screens/Upload",
  component: Upload,
  args: {
    actions: mockActions,
    automat: new StorybookAutomat(),
  },
  decorators: [withMaxWidth],
} as Meta<UploadProps>

const Template: Story<UploadProps> = (args) => <Upload {...args} />

export const Base = Template.bind({})
