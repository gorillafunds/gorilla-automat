import { useEffect } from "react"
import { useMachine } from "@xstate/react"
import { automatMachine } from "./_machine"
import { getScreen } from "./_getScreen"
import { AutomatState, AutomatActions } from "../types"

export const useScreenLogic = () => {
  const [current, send] = useMachine(machineInitializer)

  const actions: AutomatActions = {
    next: () => send("NEXT"),
    prev: () => send("PREV"),
    error: () => send("ERROR"),
  }

  useEffect(() => {
    const newValue = JSON.stringify({
      screen: current.value,
      sequenceMap: current.context.sequenceMap,
    })
    window.sessionStorage.setItem(SCREEN_STORAGE, newValue)
  }, [current])

  const CurrentScreen = getScreen(current.value as AutomatState)

  return {
    CurrentScreen,
    actions,
    currentState: current.value,
    sequenceMap: current.context.sequenceMap,
  }
}

const machineInitializer = () => {
  if (typeof window === "undefined") return automatMachine()

  const initialScreenStorage = window.sessionStorage.getItem(SCREEN_STORAGE)

  if (!initialScreenStorage) return automatMachine()

  const { screen, sequenceMap } = JSON.parse(initialScreenStorage)

  return automatMachine(screen, sequenceMap)
}

const SCREEN_STORAGE = "gorillaAutomatScreen"
