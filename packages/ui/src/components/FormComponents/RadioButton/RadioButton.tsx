import React from "react"
import clsx from "clsx"
import { defaultStyles } from "../defaultStyles"

type DefaultInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
type DefaultRadioProps = Omit<DefaultInputProps, "type" | "id">

export interface RadioButtonProps extends DefaultRadioProps {
  name: string
  label: string
  value: string
  hasError?: boolean
  handleSelect?: any
}

export const RadioButton = ({
  name,
  label,
  className,
  disabled,
  hasError = false,
  handleSelect,
  ...props
}: RadioButtonProps) => {
  const styles = {
    label: clsx(
      "inline-flex items-center space-x-2 cursor-pointer",
      disabled && "!cursor-not-allowed",
    ),
    input: clsx(
      "w-[26px] h-[26px] text-purple-600 !rounded-full",
      defaultStyles.border(hasError),
      defaultStyles.focus(true),
      disabled && "opacity-50",
      className,
    ),
  }

  return (
    <label className={styles.label}>
      <input
        type="radio"
        onChange={handleSelect}
        className={styles.input}
        id={label}
        {...{ disabled, name }}
        {...props}
      />
      <span className="font-medium text-gray-700">{label}</span>
    </label>
  )
}
