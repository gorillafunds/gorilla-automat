import { FinishedNoShop } from "./index"
import { withMaxWidth } from "../../decorators"

export default {
  title: "Screens/FinishedNoShop",
  component: FinishedNoShop,
  decorators: [withMaxWidth],
}

export const Base = () => <FinishedNoShop />
