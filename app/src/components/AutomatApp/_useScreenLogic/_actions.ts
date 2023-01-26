import { assign } from "xstate"

// TODO: make code more dynamic
// Called after every step (all explicit for now)
export const finishConnect = assign({
  sequenceMap: () => ({
    currentIndex: 1,
    steps: [
      {
        label: "Connect",
        isDone: true,
      },
      {
        label: "Shop",
        isDone: false,
      },
      {
        label: "Setup",
        isDone: false,
      },
      {
        label: "Upload",
        isDone: false,
      },
      {
        label: "Mint",
        isDone: false,
      },
    ],
  }),
})

export const finishSelectShop = assign({
  sequenceMap: () => ({
    currentIndex: 2,
    steps: [
      {
        label: "Connect",
        isDone: true,
      },
      {
        label: "Shop",
        isDone: true,
      },
      {
        label: "Setup",
        isDone: false,
      },
      {
        label: "Upload",
        isDone: false,
      },
      {
        label: "Mint",
        isDone: false,
      },
    ],
  }),
})

export const finishSetup = assign({
  sequenceMap: () => ({
    currentIndex: 3,
    steps: [
      {
        label: "Connect",
        isDone: true,
      },
      {
        label: "Shop",
        isDone: true,
      },
      {
        label: "Setup",
        isDone: true,
      },
      {
        label: "Upload",
        isDone: false,
      },
      {
        label: "Mint",
        isDone: false,
      },
    ],
  }),
})

export const finishUpload = assign({
  sequenceMap: () => ({
    currentIndex: 4,
    steps: [
      {
        label: "Connect",
        isDone: true,
      },
      {
        label: "Shop",
        isDone: true,
      },
      {
        label: "Setup",
        isDone: true,
      },
      {
        label: "Upload",
        isDone: true,
      },
      {
        label: "Mint",
        isDone: false,
      },
    ],
  }),
})

export const finishProcess = assign({
  sequenceMap: () => ({
    // Every step should be marked as finished, so use an "invalid" index
    currentIndex: -1,
    steps: [
      {
        label: "Connect",
        isDone: true,
      },
      {
        label: "Shop",
        isDone: true,
      },
      {
        label: "Setup",
        isDone: true,
      },
      {
        label: "Upload",
        isDone: true,
      },
      {
        label: "Mint",
        isDone: true,
      },
    ],
  }),
})

// Explicit someSteps
export const goBackToSetup = assign({
  sequenceMap: () => ({
    currentIndex: 1,
    steps: [
      {
        label: "Connect",
        isDone: true,
      },
      {
        label: "Setup",
        isDone: false,
      },
      {
        label: "Upload",
        isDone: false,
      },
      {
        label: "Mint",
        isDone: false,
      },
    ],
  }),
})
