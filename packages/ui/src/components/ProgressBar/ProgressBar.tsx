import clsx from "clsx"

export interface ProgressBarProps {
  percentValue: number
  label: string
  max?: number
  className?: string
}

// TODO: Maybe use progress html-element
export const ProgressBar = ({
  percentValue,
  label,
  max = 100,
  className,
}: ProgressBarProps) => {
  const styles = {
    wrapper: clsx("w-full h-2 rounded-md bg-purple-200", className),
    bar: "h-full bg-purple-600 transition-all duration-500 rounded-md",
  }
  const width = `${percentValue}%`
  return (
    <div className={styles.wrapper} role="progress" aria-label={label}>
      <div style={{ width }} className={styles.bar} />
    </div>
  )
}
