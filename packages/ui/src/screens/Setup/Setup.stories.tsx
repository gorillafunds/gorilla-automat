import { Story, Meta } from "@storybook/react"
import { Setup, SetupProps } from "./index"
import { withMaxWidth } from "../../decorators"
import { mockActions, StorybookAutomat } from "../storybookMocks"

export default {
  title: "Screens/Setup",
  component: Setup,
  args: {
    actions: mockActions,
    automat: new StorybookAutomat(),
  },
  decorators: [withMaxWidth],
} as Meta<SetupProps>

const Template: Story<SetupProps> = (args) => <Setup {...args} />

export const Base = Template.bind({})
