import { ReactNode } from "react"
import clsx from "clsx"

export interface WizardStepProps {
  children: ReactNode
  className?: string
}

export const WizardStep = ({ children, className }: WizardStepProps) => {
  const styles = clsx(
    "shadow rounded-xl bg-white",

    className,
  )
  return <div className={styles}>{children}</div>
}
