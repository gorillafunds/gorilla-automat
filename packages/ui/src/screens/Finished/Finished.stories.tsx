import { Finished } from "./index"
import { withMaxWidth, withMockStorage } from "../../decorators"

export default {
  title: "Screens/Finished",
  component: Finished,
  decorators: [withMaxWidth, withMockStorage],
}

export const Base = () => <Finished />
