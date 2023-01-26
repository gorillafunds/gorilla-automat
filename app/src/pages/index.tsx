import Head from "next/head"
import { AutomatApp } from "../components"
import { GorillaAutomat } from "../lib"

export default function Home() {
  return (
    <>
      <Head>
        <title>Automat</title>
        <meta name="description" content="Automat by GorillaFunds" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AutomatApp AutomatClass={GorillaAutomat} />
    </>
  )
}
