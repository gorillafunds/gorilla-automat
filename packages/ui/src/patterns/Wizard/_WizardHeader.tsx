import { ReactElement, cloneElement } from "react"
import { SequenceMap, type SequenceMapProps } from "../../components"
import clsx from "clsx"

export interface WizardHeaderProps {
  logo: ReactElement
  rightContent: ReactElement
  sequenceMap: SequenceMapProps
  className?: string
}

export const WizardHeader = ({
  logo,
  rightContent,
  sequenceMap,
  className,
}: WizardHeaderProps) => {
  const styles = {
    wrapper: clsx("flex justify-end space-x-2", className),
    logo: clsx("w-8 h-auto mr-auto", logo.props.className),
  }
  const styledLogo = cloneElement(logo, { className: styles.logo })

  return (
    <header className={styles.wrapper}>
      {styledLogo}
      <SequenceMap className="md:hidden" {...sequenceMap} />
      {rightContent}
    </header>
  )
}
