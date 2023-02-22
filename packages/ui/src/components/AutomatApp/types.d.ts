import { states } from "./_useScreenLogic/_states"
import { SequenceMapProps } from "@gorilla-automat/ui"

export type AutomatEvents = { type: "NEXT" | "PREV" | "ERROR" }

export type AutomatContext = {
  sequenceMap: SequenceMapProps
}

export type AutomatState = keyof typeof states

// TODO: Infer from AutomatEvents
export type AutomatActions = {
  next: () => void
  prev: () => void
  error: (screenError?) => void
}
