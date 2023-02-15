import React, { Fragment } from "react"
import clsx from "clsx"
import { Listbox, Transition } from "@headlessui/react"
import { ChevronsUpDown } from "lucide-react"
import { OptionContent } from "./_OptionContent"
import { defaultStyles } from "../defaultStyles"

export type Option = {
  label: string | number
  value: string | number
}

export interface SelectProps {
  label?: string
  selected: Option
  setSelected: React.Dispatch<Option>
  options: Option[]
  hasError?: boolean
}

// TODO: Add className prop for Wrapper and for several elements
export const Select = ({
  label,
  options,
  selected,
  setSelected,
  hasError = false,
}: SelectProps) => {
  // Having it all in one place...
  const styles = {
    button: clsx(
      "relative h-10 w-full cursor-default bg-white py-2 pl-3 pr-10 text-left sm:text-200",
      defaultStyles.border(hasError),
      defaultStyles.focus(),
    ),
    optionsList: (open: boolean) =>
      clsx(
        "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base sm:text-200",
        open && "border-purple-600",
        defaultStyles.border(),
      ),
    singleOption: (active: boolean) =>
      clsx(
        "relative cursor-default select-none py-2 pl-3 pr-9 even:bg-purple-100",
        active ? "text-purple-600" : "text-gray-900",
      ),
  }
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          {label && (
            <Listbox.Label className="block text-300 text-gray-1000">
              {label}
            </Listbox.Label>
          )}
          <div className="relative mt-1">
            <Listbox.Button className={styles.button}>
              <span className="block truncate">{selected.label}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronsUpDown className="ui-icon-s" />
              </span>
            </Listbox.Button>
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className={styles.optionsList(open)}>
                {options.map((option) => (
                  <Listbox.Option
                    key={option.value}
                    className={({ active }) => styles.singleOption(active)}
                    value={option}
                  >
                    {({ selected }) => (
                      <OptionContent selected={selected} label={option.label} />
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
