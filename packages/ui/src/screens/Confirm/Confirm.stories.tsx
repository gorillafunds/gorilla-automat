import { Story, Meta } from "@storybook/react"
import { Confirm, ConfirmProps } from "./index"
import { withMaxWidth, withMockStorage } from "../../decorators"
import { mockActions, StorybookAutomat } from "../storybookMocks"

export default {
  title: "Screens/Confirm",
  component: Confirm,
  args: {
    actions: mockActions,
    automat: new StorybookAutomat(),
  },
  decorators: [withMaxWidth, withMockStorage],
} as Meta<ConfirmProps>

const Template: Story<ConfirmProps> = (args) => <Confirm {...args} />

export const Base = Template.bind({})
