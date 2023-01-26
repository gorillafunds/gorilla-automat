import React from "react"
import clsx from "clsx"

export interface SequenceMapProps {
  steps: {
    label: string
    isDone: boolean
  }[]
  currentIndex: number
  setCurrentIndex?: React.Dispatch<number>
  className?: string
}

export const SequenceMap = ({
  steps,
  currentIndex,
  setCurrentIndex,
  className,
}: SequenceMapProps) => {
  const olClassName = clsx("sequence-map", className)
  return (
    <ol className={olClassName}>
      {steps.map((step, index) => (
        <li
          key={step.label}
          // onClick={() => setCurrentIndex(index)}
          data-active={index === currentIndex}
          data-done={step.isDone}
        >
          <span>{step.label}</span>
        </li>
      ))}
    </ol>
  )
}
