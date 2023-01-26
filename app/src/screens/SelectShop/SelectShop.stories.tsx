import { Story, Meta } from "@storybook/react"
import { SelectShop, SelectShopProps } from "./index"
import { withMaxWidth } from "../../decorators"
import { mockActions, storybookAutomat } from "../storybookMocks"

export default {
  title: "Screens/SelectShop",
  component: SelectShop,
  args: {
    actions: mockActions,
    automat: storybookAutomat,
  },
  decorators: [withMaxWidth],
} as Meta<SelectShopProps>

const Template: Story<SelectShopProps> = args => <SelectShop {...args} />

export const Base = Template.bind({})
