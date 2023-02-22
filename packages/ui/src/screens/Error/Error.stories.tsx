import { Story, Meta } from "@storybook/react"
import { Error, ErrorProps } from "./index"
import { withMaxWidth } from "../../decorators"
import { mockActions } from "../storybookMocks"

export default {
  title: "screens/Error",
  component: Error,
  args: {
    screenError: {
      title: "Mock Error",
      message: "This is a mock message",
      showPrevButton: false,
    },
    actions: mockActions,
  },
  decorators: [withMaxWidth],
} as Meta<ErrorProps>

const Template: Story<ErrorProps> = (args) => <Error {...args} />

export const Base = Template.bind({})

export const WithFallbackValues = Template.bind({})
WithFallbackValues.args = {
  screenError: undefined,
}
