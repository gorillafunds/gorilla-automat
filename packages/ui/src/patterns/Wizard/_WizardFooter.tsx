import { ReactElement } from "react"
import clsx from "clsx"

export interface WizardFooterProps {
  leftContent: ReactElement
  rightContent: ReactElement
  className?: string
}

export const WizardFooter = ({
  leftContent,
  rightContent,
  className,
}: WizardFooterProps) => {
  const styles = clsx("flex justify-between", className)
  return (
    <footer className={styles}>
      {leftContent}
      {rightContent}
    </footer>
  )
}
