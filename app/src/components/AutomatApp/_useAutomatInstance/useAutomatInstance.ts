import { GorillaAutomat } from "../../../lib"
import { AutomatActions } from "./../types"

import { useState, useEffect } from "react"

export const useAutomatInstance = (
  actions: AutomatActions,
  currentState: string
) => {
  const [automat, setAutomat] = useState<GorillaAutomat>()

  // Initialize instance in an async hook, because initializeWallet is async
  useEffect(() => {
    const initializeAutomat = async () => {
      const newAutomat = new GorillaAutomat()
      await newAutomat.initializeWallet()
      setAutomat(newAutomat)
    }
    initializeAutomat()
  }, [])

  // Switch to second screen wallet is alreadyConnected
  useEffect(() => {
    if (automat?.walletConnected()) {
      if (currentState === "connect") actions.next()
    }
  }, [automat])

  return automat
}
