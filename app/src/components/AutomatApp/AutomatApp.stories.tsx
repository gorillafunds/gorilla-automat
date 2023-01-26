import { AutomatApp } from "./index"
import { withIframeWarning, withBusinessLogicWarning } from "../../decorators"

export default {
  title: "Components/AutomatApp",
  component: AutomatApp,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [withIframeWarning, withBusinessLogicWarning],
}

export const Base = () => <AutomatApp />
