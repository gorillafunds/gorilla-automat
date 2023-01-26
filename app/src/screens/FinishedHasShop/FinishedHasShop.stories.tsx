import { FinishedHasShop } from "./index"
import { withMaxWidth } from "../../decorators"

export default {
  title: "Screens/FinishedHasShop",
  component: FinishedHasShop,
  decorators: [withMaxWidth],
}

export const Base = () => <FinishedHasShop />
