import React from "react"
import clsx from "clsx"
import { defaultStyles } from "../defaultStyles"

export interface TextInputProps {
  placeholder?: string
  label: string
  type?: "text" | "email" | "password" | "number"
  name: string
  hasError?: boolean
  className?: string
  value?: string | number
  max?: number
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

// TODO: Add ability to style/hide label
// TODO: Add ability to handle numbers
export const TextInput = ({
  label,
  placeholder,
  name,
  type = "text",
  hasError = false,
  className,
  onChange,
  value,
  max,
}: TextInputProps) => {
  const styles = {
    label: "text-200 font-medium text-gray-700",
    input: clsx(
      "px-3.5 py-1 text-300 text-gray-1000",
      defaultStyles.border(hasError),
      defaultStyles.focus(),
      className,
    ),
  }
  return (
    <div>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <div className="mt-1">
        <input
          onChange={onChange}
          value={value}
          type={type}
          name={name}
          id={name}
          max={max}
          className={styles.input}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}
