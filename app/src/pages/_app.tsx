import "../styles/styles.css"
import "@gorilla-automat/ui/styles.min.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
