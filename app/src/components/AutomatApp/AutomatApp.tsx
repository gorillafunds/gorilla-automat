import { Layout, DisconnectWallet } from "../"
import { useScreenLogic } from "./_useScreenLogic"
import { Spinner } from "@gorilla-automat/ui"
import { SequenceMap } from "@gorilla-automat/ui"
import { useAutomatInstance } from "./_useAutomatInstance"

export const AutomatApp = () => {
  const { CurrentScreen, actions, currentState, sequenceMap } = useScreenLogic()
  const automat = useAutomatInstance(actions, currentState as string)

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
