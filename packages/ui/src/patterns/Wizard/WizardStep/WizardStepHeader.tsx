import { ReactNode } from "react"
import clsx from "clsx"

export interface WizardStepHeaderProps {
  children: ReactNode
  className?: string
}
export const WizardStepHeader = ({
  children,
  className,
}: WizardStepHeaderProps) => {
  const styles = clsx(
    "font-semibold text-gray-1000 shadow-sm p-4 text-center",
    "md:border-b md:border-gray-200 md:p-6 md:pb-3 md:text-300 md:text-left",
    "md:shadow-none",
    className,
  )
  return <header className={styles}>{children}</header>
}
