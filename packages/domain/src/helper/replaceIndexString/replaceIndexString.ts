export const replaceIndexString = (string: string, index: number) => {
  return string.replace(/{{index}}/g, `${index}`)
}
