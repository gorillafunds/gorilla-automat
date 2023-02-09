import { IGorillaAutomat, AutomatConstructor } from "@gorilla-automat/domain"
import { AutomatActions } from "./../types"

import { useState, useEffect } from "react"

export const useAutomatInstance = (
  actions: AutomatActions,
  currentState: string,
  AutomatClass: AutomatConstructor,
) => {
  const [automat, setAutomat] = useState<IGorillaAutomat>()

  // Initialize instance in an async hook, because initializeWallet is async
  useEffect(() => {
    const initializeAutomat = async () => {
      const newAutomat = new AutomatClass()
      await newAutomat.initializeWallet()
      setAutomat(newAutomat)
    }
    initializeAutomat()
  }, [AutomatClass])

  // Switch to second screen wallet is alreadyConnected
  useEffect(() => {
    if (automat?.walletConnected()) {
      if (currentState === "connect") actions.next()
    }
  }, [automat, currentState, actions])

  return automat
}
