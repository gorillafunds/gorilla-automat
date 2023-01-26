import React from "react"
import clsx from "clsx"
import { Button } from "@gorilla-automat/ui"
import { NearLogo } from "./_NearLogo"

export type ConnectWalletProps = {
  className?: string
  connect: () => void
  disabled: boolean
}

export const ConnectWallet = ({
  className,
  connect,
  disabled = true,
}: ConnectWalletProps) => {
  const styles = clsx("flex w-full items-center gap-4", className)

  return (
    <>
      <div className={styles}>
        <Button
          disabled={disabled}
          onClick={connect}
          label="Connect Wallet"
          size="small"
        />
        <NearLogo className="block h-auto w-16 text-gray-500" />
      </div>
    </>
  )
}
