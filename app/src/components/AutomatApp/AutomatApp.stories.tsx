import { Story, Meta } from "@storybook/react"
import { AutomatApp, AutomatAppProps } from "./index"
import { GorillaAutomat, StorybookAutomat } from "@gorilla-automat/domain"
import { withIframeWarning, withBusinessLogicWarning } from "../../decorators"

export default {
  title: "Components/AutomatApp",
  component: AutomatApp,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<AutomatAppProps>

const Template: Story<AutomatAppProps> = (args) => <AutomatApp {...args} />

export const WithDummyLogic = Template.bind({})
WithDummyLogic.args = {
  AutomatClass: StorybookAutomat,
}

export const WithBusinessLogic = Template.bind({})
WithBusinessLogic.args = {
  AutomatClass: GorillaAutomat,
}
WithBusinessLogic.decorators = [withIframeWarning, withBusinessLogicWarning]
