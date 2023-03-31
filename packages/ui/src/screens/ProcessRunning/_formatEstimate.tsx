/**
 * formats seconds into mm:ss format
 */
export const formatEstimate = (estimatedSeconds: number) => {
  const minutes = Math.floor(estimatedSeconds / 60)
  const seconds = estimatedSeconds % 60

  // Add a "0" in front of each digit, if its smaller than 10
  // So for example "9" becomes "09"
  const paddedMinutes = minutes.toString().padStart(2, "0")
  const paddedSeconds = seconds.toString().padStart(2, "0")

  return `${paddedMinutes}m : ${paddedSeconds}s`
}
