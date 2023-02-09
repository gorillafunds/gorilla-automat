import { AutomatActions } from "../components"
import { IGorillaAutomat } from "@gorilla-automat/domain"

export type Screen = {
  actions: AutomatActions
  automat: IGorillaAutomat
}
