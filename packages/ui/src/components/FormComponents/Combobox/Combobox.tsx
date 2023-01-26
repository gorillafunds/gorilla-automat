import React, { ForwardedRef, useState } from "react"
import clsx from "clsx"
import { Search } from "lucide-react"
import {
  Combobox as ReachCombobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox"
import "@reach/combobox/styles.css"
import { defaultStyles } from "../defaultStyles"

export interface ComboboxProps {
  items: string[]
  onChange: (val: string) => void
  disabled: boolean
  forwardedRef?: ForwardedRef<HTMLInputElement>
}

function ComboboxComponent({
  items,
  onChange,
  disabled,
  forwardedRef,
}: ComboboxProps) {
  const [term, setTerm] = useState("")
  const filteredItems =
    term.length > 1 ? items.filter((item) => item.startsWith(term)) : []

  const invalid = term.length > 1 && !items.find((item) => item === term)

  const inputClassName = clsx(
    "text-button focus:border-gorilla-purple focus:outline-gorilla-purple w-full max-w-sm rounded-md border border-gray-300 py-3 px-4 pl-10 text-gray-800 placeholder-gray-500 transition-all hover:border-gray-400",
    defaultStyles.border(invalid),
    defaultStyles.focus(),
    disabled && "pointer-events-none",
  )

  return (
    <ReachCombobox
      className="inline-flex w-full max-w-sm"
      onSelect={(value) => {
        setTerm(value)
        onChange(value)
      }}
      aria-label="Search for your mintbase shop"
    >
      <div className="relative w-full">
        <Search className="pointer-events-none absolute top-4 left-4 text-gray-400" />
        <ComboboxInput
          placeholder="Search"
          className={inputClassName}
          onChange={(e) => {
            const { value } = e.target
            setTerm(value)
          }}
          onBlur={() => {
            onChange(term)
          }}
          value={term}
          ref={forwardedRef}
        />
      </div>
      {filteredItems.length > 0 && (
        <ComboboxPopover className="border-gorilla-purple mt-2 max-h-96 overflow-auto rounded-md border shadow">
          <ComboboxList>
            {filteredItems.map((item) => (
              <ComboboxOption
                value={item}
                key={item}
                style={{ padding: "8px 12px" }}
              >
                <p className="text-300">{item}</p>
              </ComboboxOption>
            ))}
          </ComboboxList>
        </ComboboxPopover>
      )}
    </ReachCombobox>
  )
}

export const Combobox = React.forwardRef<HTMLInputElement, ComboboxProps>(
  (props, ref) => {
    return <ComboboxComponent {...props} forwardedRef={ref} />
  },
)
Combobox.displayName = "Combobox"
