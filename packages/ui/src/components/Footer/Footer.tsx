import clsx from "clsx"
import { GorillaLogo } from "../"

export type FooterProps = {
  className?: string
}

export const Footer = ({ className }: FooterProps) => {
  const styles = clsx("text-100 flex gap-6 p-4", className)
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles}>
      <div className="flex items-center gap-2 text-gray-600">
        <GorillaLogo className="w-8 h-auto" />
        &copy; {currentYear} Gorilla Technologies
      </div>
      <a
        className="font-medium underline underline-offset-4"
        target="_blank"
        rel="noreferrer"
        href="https://google.de"
      >
        Need help?
      </a>
    </footer>
  )
}
