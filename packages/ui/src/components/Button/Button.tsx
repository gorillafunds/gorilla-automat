import React from "react"
import clsx from "clsx"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large"
  variant?: "primary" | "secondary" | "tertiary" | "destructive"
  link?: string
  label: string
  iconPosition?: "start" | "end"
  hideLabel?: boolean
  icon?: React.ReactNode
}

// TODO: switch to children props for content
// https://www.smashingmagazine.com/2023/01/key-good-component-design-selfishness/
export const Button = ({
  size = "medium",
  variant = "primary",
  type = "button",
  link,
  icon,
  iconPosition = "end",
  label,
  hideLabel = false,
  className,
  ...props
}: ButtonProps) => {
  // Icon positions should only be used if the label is visible
  const iconPosStart = !hideLabel && iconPosition === "start"
  const iconPosEnd = !hideLabel && iconPosition === "end"

  // Merged conditions for label-state and sizings
  const noLabelSmall = hideLabel && size === "small"
  const noLabelMedium = hideLabel && size === "medium"
  const noLabelLarge = hideLabel && size === "large"

  const styles = {
    button: clsx(
      // Defaults
      "rounded-md align-middle focus-visible:outline-4 focus-visible:outline-red-600 disabled:opacity-50 focus-visible:outline-offset-2",
      "inline-flex items-center",
      // Sizing
      size === "small" && "px-4 py-1 text-200",
      size === "medium" && "px-6 py-1.5 text-300",
      size === "large" && "px-8 py-3 text-400",
      // Color Variants
      variant === "primary" &&
        "text-white bg-purple-600 hover:bg-purple-700 active:bg-purple-800 ",
      variant === "secondary" &&
        "bg-gray-300 text-gray-1000 hover:bg-gray-400 active:bg-gray-500",
      variant === "tertiary" &&
        "text-black hover:bg-purple-200 active:bg-purple-300",
      variant === "destructive" &&
        "text-white bg-red-600 hover:bg-red-700 active:bg-red-800",
      // TODO: Integrate Icon-sizing
      // Padding style for hidden label
      noLabelSmall && "!p-1",
      noLabelMedium && "!p-1.5",
      noLabelLarge && "!p-3",
      // Misc
      iconPosStart && "flex-row-reverse",
      className,
    ),
    label: clsx("text-center flex-1", hideLabel && "sr-only"),
    icon: clsx(
      // Icons are tending a little to their outer side.
      iconPosStart && "-translate-x-2",
      iconPosEnd && "translate-x-2",
    ),
  }

  // DRY content for link and button
  const content = (
    <>
      <span className={styles.label}>{label}</span>
      {icon && <span className={styles.icon}>{icon}</span>}
    </>
  )

  return link ? (
    /* Since this is a fixed a tag, links are always supposed to go outside */
    <a
      className={styles.button}
      target="_blank"
      rel="noreferrer noopener"
      href={link}
    >
      {content}
    </a>
  ) : (
    <button className={styles.button} {...{ type, ...props }}>
      {content}
    </button>
  )
}
