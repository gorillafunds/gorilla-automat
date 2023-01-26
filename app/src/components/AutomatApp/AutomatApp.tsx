import { Layout, DisconnectWallet } from "../"
import { Spinner } from "@gorilla-automat/ui"
import { SequenceMap } from "@gorilla-automat/ui"
import { AutomatConstructor } from "../../lib"
import { useScreenLogic } from "./_useScreenLogic"
import { useAutomatInstance } from "./_useAutomatInstance"

export type AutomatAppProps = {
  AutomatClass: AutomatConstructor
}

export const AutomatApp = ({ AutomatClass }: AutomatAppProps) => {
  const { CurrentScreen, actions, currentState, sequenceMap } = useScreenLogic()
  const automat = useAutomatInstance(
    actions,
    currentState as string,
    AutomatClass,
  )

  return (
    <Layout>
      {automat ? (
        <>
          {automat.walletConnected() && (
            <DisconnectWallet
              disconnect={automat.disconnectWallet}
              className="fixed top-0 right-0 mt-4 mr-4"
            />
          )}
          <SequenceMap {...sequenceMap} />
          <CurrentScreen {...{ actions, automat }} />
        </>
      ) : (
        <Spinner />
      )}
    </Layout>
  )
}
