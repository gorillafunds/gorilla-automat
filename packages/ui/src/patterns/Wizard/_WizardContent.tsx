import { ReactNode } from "react"
import clsx from "clsx"
import { SequenceMap, type SequenceMapProps } from "../../components"

export interface WizardContentProps {
  className?: string
  children?: ReactNode
  sequenceMap: SequenceMapProps
}

export const WizardContent = ({
  children,
  className,
  sequenceMap,
}: WizardContentProps) => {
  const styles = clsx(
    "md:flex md:items-center md:space-x-4 md:justify-stretch",
    className,
  )
  return (
    <div className={styles}>
      <SequenceMap className="hidden md:inline-flex" {...sequenceMap} />
      {children}
    </div>
  )
}
