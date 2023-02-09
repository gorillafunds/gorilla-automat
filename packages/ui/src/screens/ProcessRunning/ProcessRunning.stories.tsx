import { Story, Meta } from "@storybook/react"
import { ProcessRunning, ProcessRunningProps } from "./index"
import { StorybookAutomat } from "@gorilla-automat/domain"
import { withMaxWidth } from "../../decorators"
import { mockActions } from "../storybookMocks"

export default {
  title: "Screens/ProcessRunning",
  component: ProcessRunning,
  args: {
    actions: mockActions,
    automat: new StorybookAutomat(),
  },
  decorators: [withMaxWidth],
} as Meta<ProcessRunningProps>

const Template: Story<ProcessRunningProps> = (args) => (
  <ProcessRunning {...args} />
)

export const Base = Template.bind({})
