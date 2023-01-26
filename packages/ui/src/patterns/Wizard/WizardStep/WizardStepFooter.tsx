import { ReactElement } from "react"
import clsx from "clsx"

export interface WizardStepFooterProps {
  buttons: ReactElement[]
  className?: string
}

// TODO: Add shadow top on mobile
export const WizardStepFooter = ({
  buttons,
  className,
}: WizardStepFooterProps) => {
  const styles = clsx(
    "flex flex-col space-y-2 p-4 relative border-t border-gray-200",
    "md:p-6 md:space-y-0 md:space-x-2 md:flex-row md:justify-end",
    className,
  )
  return <footer className={styles}>{buttons}</footer>
}
