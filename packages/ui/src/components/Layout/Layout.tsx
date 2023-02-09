import { ReactNode } from "react"
import { Header, Footer } from ".."

export type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="app-background flex h-screen flex-col justify-between">
      <Header />
      <main className="mx-auto flex max-w-3xl items-center gap-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}
