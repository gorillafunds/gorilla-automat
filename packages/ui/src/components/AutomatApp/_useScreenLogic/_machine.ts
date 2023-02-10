import { createMachine } from "xstate"
import { states } from "./_states"

export const automatMachine = (
  initialScreen = "connect",
  initialSequenceMap = INITIAL_MAP,
) =>
  createMachine({
    id: "automat",
    initial: initialScreen,
    context: {
      sequenceMap: initialSequenceMap,
    },
    states,
    predictableActionArguments: true,
  })

const INITIAL_MAP = {
  currentIndex: 0,
  steps: [
    {
      label: "Connect",
      isDone: false,
    },
    {
      label: "Shop",
      isDone: false,
    },
    {
      label: "Setup",
      isDone: false,
    },
    {
      label: "Upload",
      isDone: false,
    },
    {
      label: "Mint",
      isDone: false,
    },
  ],
}
