import { ReactNode } from "react"
import clsx from "clsx"

export interface WizardStepContentProps {
  children: ReactNode
  className?: string
}

export const WizardStepContent = ({
  children,
  className,
}: WizardStepContentProps) => {
  const styles = clsx("p-4", "md:p-6", className)
  return <div className={styles}>{children}</div>
}
