import { Button } from "../"
import { IGorillaAutomat } from "@gorilla-automat/domain"
import { X } from "lucide-react"

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
      icon={<X />}
      iconPosition="start"
    />
  )
}
