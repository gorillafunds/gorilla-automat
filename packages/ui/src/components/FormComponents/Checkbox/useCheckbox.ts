import { ChangeEvent, EventHandler, useState } from "react"

export const useCheckbox = (initialValue = false) => {
  const [checked, setChecked] = useState(initialValue)

  const onChange: EventHandler<ChangeEvent<HTMLInputElement>> = e =>
    setChecked(e.currentTarget.checked)

  return [checked, onChange, setChecked] as const
}
