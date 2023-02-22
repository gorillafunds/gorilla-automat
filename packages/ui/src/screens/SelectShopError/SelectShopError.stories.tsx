import { Story, Meta } from "@storybook/react"
import { SelectShopError, SelectShopErrorProps } from "./index"
import { withMaxWidth } from "../../decorators"
import { mockActions, StorybookAutomat } from "../storybookMocks"

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
