import { useState, useEffect, useRef } from "react"
import { IGorillaAutomat, AutomatConstructor } from "@gorilla-automat/domain"
import { AutomatActions } from "./../types"

export const useAutomatInstance = (
  actions: AutomatActions,
  currentState: string,
  AutomatClass: AutomatConstructor,
  isMainnet = false,
) => {
  const actionRef = useRef(false)
  const [automat, setAutomat] = useState<IGorillaAutomat>()

  // Initialize instance in an async hook, because initializeWallet is async
  useEffect(() => {
    if (actionRef.current) return
    const initializeAutomat = async () => {
      const newAutomat = new AutomatClass()
      await newAutomat.initializeWallet(isMainnet)
      setAutomat(newAutomat)
    }
    actionRef.current = true
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
