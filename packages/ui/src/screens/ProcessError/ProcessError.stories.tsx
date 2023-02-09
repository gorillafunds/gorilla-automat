import { Story, Meta } from "@storybook/react"
import { ProcessError, ProcessErrorProps } from "./index"
import { StorybookAutomat } from "@gorilla-automat/domain"
import { withMaxWidth } from "../../decorators"
import { mockActions } from "../storybookMocks"

export default {
  title: "Screens/ProcessError",
  component: ProcessError,
  args: {
    actions: mockActions,
    automat: new StorybookAutomat(),
  },
  decorators: [withMaxWidth],
} as Meta<ProcessErrorProps>

const Template: Story<ProcessErrorProps> = (args) => <ProcessError {...args} />

export const Base = Template.bind({})