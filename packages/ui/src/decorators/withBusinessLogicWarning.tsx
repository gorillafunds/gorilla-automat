import { Message } from "../components"

export const withBusinessLogicWarning = (StoryFn: Function) => {
  return (
    <>
      <Message
        className="fixed bottom-0 right-0 mb-4 mr-8"
        variant="important"
        isOverlay
      >
        This story runs the actual business logic.
      </Message>

      {StoryFn()}
    </>
  )
}
