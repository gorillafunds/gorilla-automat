import clsx from "clsx"
import { Check } from "lucide-react"

export interface OptionContentProps {
  selected: boolean
  label: string | number
}

export const OptionContent = ({ selected, label }: OptionContentProps) => {
  const styles = {
    labelWrapper: clsx("block truncate", selected && "font-semibold"),
    iconWrapper:
      "absolute inset-y-0 right-0 flex items-center pr-4 text-gray-1000",
  }

  return (
    <>
      <span className={styles.labelWrapper}>{label}</span>
      {selected && (
        <span className={styles.iconWrapper}>
          <Check className="ui-icon-s" />
        </span>
      )}
    </>
  )
}
