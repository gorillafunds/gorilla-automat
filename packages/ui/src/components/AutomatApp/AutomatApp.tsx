import { Layout, DisconnectWallet } from "../"
import { Spinner, SequenceMap } from "../"
import { AutomatConstructor } from "@gorilla-automat/domain"
import { useScreenLogic } from "./_useScreenLogic"
import { useAutomatInstance } from "./_useAutomatInstance"

export type AutomatAppProps = {
  AutomatClass: AutomatConstructor
  isMainnet?: boolean
}

export const AutomatApp = ({
  AutomatClass,
  isMainnet = false,
}: AutomatAppProps) => {
  const { CurrentScreen, actions, currentState, sequenceMap, screenError } =
    useScreenLogic()
  const automat = useAutomatInstance(
    actions,
    currentState as string,
    AutomatClass,
    isMainnet,
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
          <CurrentScreen {...{ actions, automat, screenError }} />
        </>
      ) : (
        <Spinner />
      )}
    </Layout>
  )
}
