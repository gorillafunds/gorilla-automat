/** Storybook decorator to keep the story to a max-width */
export const withMaxWidth = (Story: Function) => (
  <div className="mx-auto max-w-2xl">{Story()}</div>
)
