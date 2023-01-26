import React from "react"
import clsx from "clsx"
import { Switch as HeadlessUiSwitch } from "@headlessui/react"
import { defaultStyles } from "../defaultStyles"

export interface SwitchProps {
  checked: boolean
  onChange: React.Dispatch<React.SetStateAction<boolean>>
  hasError: boolean
}

export const Switch = ({ checked, onChange, hasError }: SwitchProps) => {
  return (
    <HeadlessUiSwitch
      {...{ checked, onChange }}
      className={clsx(
        "relative inline-flex px-1 justify-start items-center h-6 w-11 flex-shrink-0 cursor-pointer !rounded-full border-2 transition-colors duration-200 ease-in-out",
        defaultStyles.border(hasError),
        defaultStyles.focus(),
        checked ? "bg-purple-200" : "bg-white",
      )}
    >
      <span className="sr-only">Use setting</span>
      {/* Knob */}
      <span
        aria-hidden="true"
        className={clsx(
          checked ? "translate-x-5 bg-purple-600" : "translate-x-0 bg-gray-600",
          "items-center pointer-events-none inline-block h-3 w-3 transform rounded-full ring-0 transition duration-200 ease-in-out",
        )}
      />
    </HeadlessUiSwitch>
  )
}
