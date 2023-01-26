import React from "react"
import clsx from "clsx"

export type SpinnerProps = Omit<
  React.SVGProps<SVGSVGElement>,
  "fill" | "xmlns" | "viewBox"
>

export const Spinner = ({ className, width = 32, ...props }: SpinnerProps) => {
  const style = clsx("animate-spin inline-block", className)

  return (
    <svg {...props} width={width} viewBox="0 0 32 32" className={style}>
      <circle cx="16" cy="16" r="16" className="fill-purple-100" />
      <path
        d="M30.782 9.877A16 16 0 0 1 32 16H16V0a16 16 0 0 1 14.782 9.877ZM16 16H0a16 16 0 0 0 16 16V16Z"
        className="fill-purple-600"
      />
    </svg>
  )
}
