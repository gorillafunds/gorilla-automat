import { ReactNode } from "react"
import clsx from "clsx"

export type MessageProps = {
  variant?: "neutral" | "negative" | "positive" | "important"
  isOverlay?: boolean
  children: ReactNode
  className?: string
}

export const Message = ({
  variant = "neutral",
  className,
  isOverlay = false,
  children,
}: MessageProps) => {
  const styling = clsx(
    "text-100 px-3 py-1.5 rounded-md border-2",
    variant === "neutral" && "bg-gray-100 text-gray-900 border-gray-600",
    variant === "negative" && "bg-red-100 text-red-900 border-red-600",
    variant === "positive" && "bg-green-100 text-green-900 border-green-600",
    variant === "important" &&
      "bg-yellow-100 text-yellow-900 border-yellow-600",
    isOverlay && "shadow",
    // use override to avoid having to declare overlay-state for every variant
    !isOverlay && "!border-transparent",
    className,
  )

  return <p className={styling}>{children}</p>
}
