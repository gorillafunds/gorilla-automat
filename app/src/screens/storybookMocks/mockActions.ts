import { AutomatActions } from "../../components/AutomatApp"

export const mockActions: AutomatActions = {
  next: () => alert("NEXT"),
  prev: () => alert("PREV"),
  error: () => alert("ERROR"),
}
