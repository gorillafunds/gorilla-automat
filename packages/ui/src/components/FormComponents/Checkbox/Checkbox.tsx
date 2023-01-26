import React from "react"
import clsx from "clsx"
import { defaultStyles } from "../defaultStyles"

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type DefaultCheckboxProps = Omit<InputProps, "name" | "type" | "id">

export interface CheckboxProps extends DefaultCheckboxProps {
  name: string
  label: string
  hasError?: boolean
  className?: string
}

export const Checkbox = ({
  label,
  name,
  className,
  hasError = false,
  ...props
}: CheckboxProps) => {
  const styles = {
    label: clsx("inline-flex space-x-3 items-start", className),
    input: clsx(
      "h-6 w-6 text-purple-600",
      defaultStyles.border(hasError),
      defaultStyles.focus(true),
    ),
  }

  return (
    <label className={styles.label}>
      <input
        id={name}
        name={name}
        type="checkbox"
        className={styles.input}
        {...props}
      />
      <span className="font-medium text-gray-700">{label}</span>
    </label>
  )
}
