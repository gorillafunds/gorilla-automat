import { Story, Meta } from "@storybook/react"
import { MintPermission, MintPermissionProps } from "./index"
import { mockActions, StorybookAutomat } from "../storybookMocks"
import { withMaxWidth, withMockStorage } from "../../decorators"

// TODO: Add error boundary that a shop needs to be selected first
export default {
  title: "Screens/MintPermission",
  component: MintPermission,
  args: {
    actions: mockActions,
    automat: new StorybookAutomat(),
  },
  decorators: [withMaxWidth, withMockStorage],
} as Meta<MintPermissionProps>

const Template: Story<MintPermissionProps> = (args) => (
  <MintPermission {...args} />
)

export const Base = Template.bind({})
