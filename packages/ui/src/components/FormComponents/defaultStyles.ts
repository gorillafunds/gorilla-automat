import clsx from "clsx"

export const defaultStyles = {
  focus: (hasRing = false) =>
    clsx(
      "focus:border-purple-600 focus:outline-none",
      hasRing ? "focus:ring-purple-600" : "focus:ring-0",
    ),
  border: (hasError = false) =>
    clsx(
      "border-2 rounded-md",
      hasError ? "border-red-600" : "border-gray-300",
    ),
}
