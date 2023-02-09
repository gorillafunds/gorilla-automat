/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react"
import { Message } from "../components"

export const withIframeWarning = (StoryFn: Function) => {
  const [showWarning, setShowWarning] = useState(false)

  useEffect(() => {
    const url = window.location.href
    // Assume story is not rendered in it's own tab if the first queryParam is "viewMode"
    if (url.includes("?viewMode=")) setShowWarning(true)
  }, [])

  return (
    <>
      {showWarning && (
        <Message
          className="fixed inset-x-0 top-0 text-center"
          variant="negative"
        >
          This story needs to be used in it's own tab. Click on the penultimate
          button on the top-right corner to open this story in a new tab"
        </Message>
      )}
      {StoryFn()}
    </>
  )
}
