import clsx from "clsx"
import { AutomatLogo } from "../"

export type HeaderProps = {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
  const styles = clsx("flex items-center gap-3 p-4", className)
  return (
    <header className={styles}>
      <AutomatLogo className="h-8 w-8" />
      <h1 className="text-400 mb-px">
        Automat{" "}
        <span className="font-sans text-200 !text-yellow-700">
          v1.0.0-alpha.2
        </span>
      </h1>
    </header>
  )
}
