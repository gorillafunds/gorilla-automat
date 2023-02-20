import { Button, Spinner, Select } from "../../components"
import {
  WizardStep,
  WizardStepHeader,
  WizardStepContent,
  WizardStepFooter,
} from "../../patterns"
import { Screen } from "../types"
import { useShops } from "./_useShops"

export type SelectShopProps = Screen

export const SelectShop = ({ actions, automat }: SelectShopProps) => {
  const [shops, selectedShop, setSelectedShop] = useShops(
    automat.getShops,
    actions,
  )

  return (
    <WizardStep className="min-w-full">
      <WizardStepHeader>Select Your Shop</WizardStepHeader>
      <WizardStepContent className="flex justify-center">
        {shops ? (
          <div className="flex-1">
            <Select
              selected={selectedShop!}
              setSelected={setSelectedShop}
              options={shops}
            />
          </div>
        ) : (
          <Spinner />
        )}
      </WizardStepContent>
      <WizardStepFooter
        buttons={[
          <Button
            key="next"
            disabled={!selectedShop}
            label="Proceed"
            onClick={actions.next}
          />,
        ]}
      />
    </WizardStep>
  )
}
