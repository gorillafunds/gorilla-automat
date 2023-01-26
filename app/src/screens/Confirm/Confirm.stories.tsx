import { Story, Meta } from "@storybook/react"
import { Confirm, ConfirmProps } from "./index"
import { StorybookAutomat } from "../../lib"
import { withMaxWidth } from "../../decorators"
import { mockActions } from "../storybookMocks"

export default {
  title: "Screens/Confirm",
  component: Confirm,
  args: {
    actions: mockActions,
    automat: new StorybookAutomat(),
  },
  decorators: [withMaxWidth],
} as Meta<ConfirmProps>

const Template: Story<ConfirmProps> = (args) => <Confirm {...args} />

export const Base = Template.bind({})
