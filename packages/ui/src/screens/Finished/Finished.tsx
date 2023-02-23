import { Button } from "../../components"
import { WizardStep, WizardStepContent } from "../../patterns"
import { FinishedIllu } from "./_FinishedIllu"
import { useShopStorage } from "../../hooks"

export const Finished = () => {
  const { shopId } = useShopStorage()
  const link = `https://my-store-nfts.netlify.app/?store=${shopId}`
  return (
    <WizardStep>
      <WizardStepContent className="text-400 flex gap-8 font-light">
        {/* TODO: Replace with dynammic Image */}
        <FinishedIllu className="aspect-square w-1/2" />
        <div className="flex w-1/2 flex-col items-start justify-center">
          <h2 className="font-sans">
            Hooray — you just minted and listed the whole batch in your
            SooperDooper shop!
          </h2>
          <Button className="mt-6" label="See my listed NFTs" link={link} />
        </div>
      </WizardStepContent>
    </WizardStep>
  )
}
