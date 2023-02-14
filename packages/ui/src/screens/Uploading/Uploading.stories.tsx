import { useEffect, useState } from "react"
import { Story, Meta } from "@storybook/react"
import { Uploading, UploadingProps } from "./index"
import { StorybookAutomat } from "@gorilla-automat/domain"
import { withMaxWidth } from "../../decorators"
import { mockActions } from "../storybookMocks"
import { Spinner } from "../../components"

export default {
  title: "Screens/Uploading",
  component: Uploading,
  args: {
    actions: mockActions,
    automat: new StorybookAutomat(),
  },
  decorators: [withMaxWidth],
} as Meta<UploadingProps>

const Template: Story<UploadingProps> = (args) => {
  const [hasFakeStorage, setHasFakeStorage] = useState(false)

  // Setup a fake storage on initial load
  useEffect(() => {
    const mockStorageObj = JSON.stringify({
      price: 1,
      amount: 20,
      title: "Mock Title",
      description: "Mock Description",
    })

    const mockShopObj = JSON.stringify({
      title: "MockShop",
      value: "mockShop",
    })

    if (!window.sessionStorage.getItem("gorillaAutomatSetup"))
      window.sessionStorage.setItem("gorillaAutomatSetup", mockStorageObj)

    if (!window.sessionStorage.getItem("gorillaAutomatShop"))
      window.sessionStorage.setItem("gorillaAutomatShop", mockShopObj)

    setHasFakeStorage(true)
  }, [])
  return hasFakeStorage ? <Uploading {...args} /> : <Spinner />
}
export const Base = Template.bind({})
