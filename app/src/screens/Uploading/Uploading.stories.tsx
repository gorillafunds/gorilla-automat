import { Story, Meta } from "@storybook/react"
import { Uploading, UploadingProps } from "./index"
import { StorybookAutomat } from "@gorilla-automat/domain"
import { withMaxWidth } from "../../decorators"
import { mockActions } from "../storybookMocks"

export default {
  title: "Screens/Uploading",
  component: Uploading,
  args: {
    actions: mockActions,
    automat: new StorybookAutomat(),
  },
  decorators: [withMaxWidth],
} as Meta<UploadingProps>

const Template: Story<UploadingProps> = (args) => <Uploading {...args} />

export const Base = Template.bind({})
