import { useEffect, useRef } from "react"
/* import { ProgressBar } from "../../components" */
import { GorillaLogo } from "../../components"
import { WizardStep, WizardStepContent } from "../../patterns"
import { Screen } from "../types"
import { useShopStorage, useSetupStorage } from "../../hooks"
import { ScreenError } from ".."
import { formatEstimate } from "./_formatEstimate"

export type ProcessRunningProps = Screen

export const ProcessRunning = ({ actions, automat }: ProcessRunningProps) => {
  // TODO: Try out after switching away from NextJs
  const actionRef = useRef<boolean>(false)
  const { shopId } = useShopStorage()
  const { price, amount } = useSetupStorage()

  /**
   * Product File lenght(a) of the input zip file and
   * copys(b) (from from setup settings) for each file,
   * to estimate the duration in seconds for Minting => a*b*5
   */
  function estimateDuration() {
    const estimateInSeconds = automat.getFileCount() * amount * 40
    const formatedEstimate = formatEstimate(estimateInSeconds)
    return formatedEstimate
  }

  // Defines a screenError and calls actions.error with it
  const throwProcessError = () => {
    const screenError: ScreenError = {
      title: "Mint & List Error",
      message: "Something wen't wrong, please try again",
      showPrevButton: true,
    }
    actions.error(screenError)
  }

  // Start process on the first render
  useEffect(() => {
    if (actionRef.current) return
    const mintAndList = async () => {
      const result = await automat.mintAndList(shopId, price)

      const action = result ? actions.next : throwProcessError
      action()
    }

    mintAndList()
    actionRef.current = true
  }, [])

  return (
    <WizardStep>
      <WizardStepContent className="mx-auto flex max-w-lg flex-col items-center gap-2">
        {/* <ProgressBar percentValue={progress} label="Progress" />
        <span>{progress}% minted</span> */}
        <GorillaLogo className="w-16 h-16" />
        <p>We are minting and Listing your NFTs...</p>
        <p>We estimate that this step might take around {estimateDuration()}</p>
      </WizardStepContent>
    </WizardStep>
  )
}
