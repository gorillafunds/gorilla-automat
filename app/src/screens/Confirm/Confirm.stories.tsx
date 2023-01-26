import { Story, Meta } from "@storybook/react"
import { Confirm, ConfirmProps } from "./index"
import { withMaxWidth } from "../../decorators"
import { mockActions, storybookAutomat } from "../storybookMocks"

export default {
  title: "Screens/Confirm",
  component: Confirm,
  args: {
    actions: mockActions,
    automat: storybookAutomat,
  },
  decorators: [withMaxWidth],
} as Meta<ConfirmProps>

const Template: Story<ConfirmProps> = args => <Confirm {...args} />

export const Base = Template.bind({})
