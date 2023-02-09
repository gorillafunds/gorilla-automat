import { useMachine } from "@xstate/react"
import { automatMachine } from "./_machine"
import { getScreen } from "./_getScreen"
import { AutomatState, AutomatActions } from "../types"

export const useScreenLogic = () => {
  const [current, send] = useMachine(automatMachine)

  const actions: AutomatActions = {
    next: () => send("NEXT"),
    prev: () => send("PREV"),
    error: () => send("ERROR"),
  }

  const CurrentScreen = getScreen(current.value as AutomatState)

  return {
    CurrentScreen,
    actions,
    currentState: current.value,
    sequenceMap: current.context.sequenceMap,
  }
}
