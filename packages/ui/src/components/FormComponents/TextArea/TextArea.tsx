import React from "react"
import clsx from "clsx"
import { defaultStyles } from "../defaultStyles"

export interface TextAreaProps {
  name: string
  label: string
  rows?: number
  defaultValue?: string
  hasError?: boolean
  placeholder?: string
  className?: string
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
}
export const TextArea = ({
  rows = 4,
  name,
  placeholder,
  label,
  hasError = false,
  className,
  onChange,
}: TextAreaProps) => {
  const styles = clsx(
    "text-300 py-3 px-4 text-gray-1000 resize-none rounded-md",
    defaultStyles.focus(),
    defaultStyles.border(hasError),
    className,
  )

  return (
    <label>
      <span className="sr-only">{label}</span>
      <textarea
        onChange={onChange}
        rows={rows}
        name={name}
        id={name}
        className={styles}
        placeholder={placeholder}
      />
    </label>
  )
}
