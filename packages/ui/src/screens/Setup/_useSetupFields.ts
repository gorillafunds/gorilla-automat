import { useReducer, useState, ChangeEvent } from "react"
import { Screen } from "../types"

const defaultFields = {
  price: 0,
  amount: 0,
  title: "",
  description: "",
}

// TODO Add correct typing for useReducer
export const useSetupFields = (actions: Screen["actions"]) => {
  const [isValid, setIsValid] = useState(false)
  const [fields, updateFields] = useReducer((prev: any, next: any) => {
    const newValue = {
      ...prev,
      ...next,
    }
    // TODO: Remove copy limit as soon as mintbase confirms
    // Make sure only 5 copies can be minted
    if (newValue.amount > 5) newValue.amount = 5

    return newValue
  }, defaultFields)

  // Assumes that using input has a valid name (of defaultFields)
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    updateFields({
      [name]: value,
    })

    validate()
  }

  const validate = () => {
    const fieldValues = Object.values(fields)
    const fieldsAreValid = fieldValues.every((value) => value !== "")
    setIsValid(fieldsAreValid)
  }

  // Save to sessionStorage if all fields are valid
  const handleProceed = () => {
    if (isValid) {
      window?.sessionStorage.setItem(
        "gorillaAutomatSetup",
        JSON.stringify(fields),
      )
      actions.next()
    }
  }

  return [fields, handleChange, isValid, handleProceed] as const
}
