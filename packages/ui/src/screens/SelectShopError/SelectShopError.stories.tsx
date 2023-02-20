import { Story, Meta } from "@storybook/react"
import { SelectShopError, SelectShopErrorProps } from "./index"
import { StorybookAutomat } from "@gorilla-automat/domain"
import { withMaxWidth } from "../../decorators"
import { mockActions } from "../storybookMocks"

export default {
  title: "Screens/SelectShopError",
  component: SelectShopError,
  args: {
    actions: mockActions,
    automat: new StorybookAutomat(),
  },
  decorators: [withMaxWidth],
} as Meta<SelectShopErrorProps>

const Template: Story<SelectShopErrorProps> = (args) => (
  <SelectShopError {...args} />
)

export const Base = Template.bind({})
