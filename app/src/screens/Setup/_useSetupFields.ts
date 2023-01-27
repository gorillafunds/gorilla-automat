import { useReducer, useEffect, useState, ChangeEvent } from "react"

const defaultFields = {
  price: 0,
  amount: 0,
  title: "",
  description: "",
}

// TODO Add correct typing for useReducer
export const useSetupFields = () => {
  const [isValid, setIsValid] = useState(false)
  const [fields, updateFields] = useReducer(
    (prev: any, next: any) => ({
      ...prev,
      ...next,
    }),
    defaultFields,
  )

  // Assumes that using input has a valid name (of defaultFields)
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    updateFields({
      [name]: value,
    })
  }

  // Update validation status  if a field changes
  // Save to sessionStorage if all fields are valid
  useEffect(() => {
    const fieldValues = Object.values(fields)
    const fieldsAreValid = fieldValues.every((value) => value !== "")
    setIsValid(fieldsAreValid)

    if (fieldsAreValid) {
      window?.sessionStorage.setItem(
        "gorillaAutomatSetup",
        JSON.stringify(fields),
      )
    }
  }, [fields])

  return [fields, handleChange, isValid] as const
}
