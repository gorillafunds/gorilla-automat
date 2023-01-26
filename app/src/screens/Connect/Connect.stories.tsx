import { Story, Meta } from "@storybook/react"
import { Connect, ConnectProps } from "./index"
import { withMaxWidth } from "../../decorators"
import { mockActions, storybookAutomat } from "../storybookMocks"

export default {
  title: "Screens/Connect",
  component: Connect,
  args: {
    actions: mockActions,
    automat: storybookAutomat,
  },
  decorators: [withMaxWidth],
} as Meta<ConnectProps>

const Template: Story<ConnectProps> = args => <Connect {...args} />

export const Base = Template.bind({})
