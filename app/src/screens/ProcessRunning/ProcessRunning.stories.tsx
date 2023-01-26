import { Story, Meta } from "@storybook/react"
import { ProcessRunning, ProcessRunningProps } from "./index"
import { withMaxWidth } from "../../decorators"
import { mockActions, storybookAutomat } from "../storybookMocks"

export default {
  title: "Screens/ProcessRunning",
  component: ProcessRunning,
  args: {
    actions: mockActions,
    automat: storybookAutomat,
  },
  decorators: [withMaxWidth],
} as Meta<ProcessRunningProps>

const Template: Story<ProcessRunningProps> = args => (
  <ProcessRunning {...args} />
)

export const Base = Template.bind({})
