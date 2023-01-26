import { Button } from "@gorilla-automat/ui"
import { IGorillaAutomat } from "../../lib"
import { XIcon } from "lucide-react"

export type DisconnectWalletProps = {
  disconnect: IGorillaAutomat["disconnectWallet"]
  className?: string
}

export const DisconnectWallet = ({
  disconnect,
  className,
}: DisconnectWalletProps) => {
  // Disconnect and reload on click
  const handleClick = () => {
    if (!window) return
    disconnect()
    window.location.reload()
  }
  return (
    <Button
      variant="tertiary"
      className={className}
      label="Disconnect"
      onClick={handleClick}
      icon={<XIcon />}
      iconPosition="start"
    />
  )
}
