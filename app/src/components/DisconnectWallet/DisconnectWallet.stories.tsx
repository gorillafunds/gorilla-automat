import { Story, Meta } from "@storybook/react"
import { DisconnectWallet, DisconnectWalletProps } from "./index"

export default {
  title: "Components/DisconnectWallet",
  component: DisconnectWallet,
  args: {
    disconnect: () => alert("DisconnectWallet"),
  },
} as Meta<DisconnectWalletProps>

const Template: Story<DisconnectWalletProps> = args => (
  <DisconnectWallet {...args} />
)

export const Base = Template.bind({})
