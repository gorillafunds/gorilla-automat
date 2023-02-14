import { useEffect, useState } from "react"
import { Story, Meta } from "@storybook/react"
import { MintPermission, MintPermissionProps } from "./index"
import { mockActions } from "../storybookMocks"
import { StorybookAutomat } from "@gorilla-automat/domain"
import { withMaxWidth } from "../../decorators"
import { Spinner } from "../../components"

// TODO: Add error boundary that a shop needs to be selected first
export default {
  title: "Screens/MintPermission",
  component: MintPermission,
  args: {
    actions: mockActions,
    automat: new StorybookAutomat(),
  },
  decorators: [withMaxWidth],
} as Meta<MintPermissionProps>

const Template: Story<MintPermissionProps> = (args) => {
  const [hasFakeStorage, setHasFakeStorage] = useState(false)

  // Setup a fake storage on initial load
  useEffect(() => {
    const mockStorageObj = JSON.stringify({
      title: "Mock Shop",
      value: "mockShop",
    })
    if (!window.sessionStorage.getItem("gorillaAutomatShop"))
      window.sessionStorage.setItem("gorillaAutomatShop", mockStorageObj)

    setHasFakeStorage(true)
  }, [])

  return hasFakeStorage ? <MintPermission {...args} /> : <Spinner />
}

export const Base = Template.bind({})
