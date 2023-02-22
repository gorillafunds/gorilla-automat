import { Story, Meta } from "@storybook/react"
import { StartProcess, StartProcessProps } from "./index"
import { withMaxWidth } from "../../decorators"
import { mockActions, StorybookAutomat } from "../storybookMocks"

export default {
  title: "Screens/StartProcess",
  component: StartProcess,
  args: {
    actions: mockActions,
    automat: new StorybookAutomat(),
  },
  decorators: [withMaxWidth],
} as Meta<StartProcessProps>

const Template: Story<StartProcessProps> = (args) => <StartProcess {...args} />

export const Base = Template.bind({})
