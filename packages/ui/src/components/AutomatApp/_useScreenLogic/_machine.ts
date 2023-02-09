import { createMachine } from "xstate"
import { states } from "./_states"

export const automatMachine = createMachine({
  id: "automat",
  initial: "connect",
  context: {
    sequenceMap: {
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
    },
  },
  states,
  predictableActionArguments: true,
})
