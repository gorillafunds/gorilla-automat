export const extractFileArrayJson = async (fileArray: File[]) => {
  let jsonFile: File | undefined
  const returnArray: File[] = []

  fileArray.forEach((file) => {
    if (file.type !== "text/json") returnArray.push(file)
    else {
      jsonFile = file
    }
  })

  const jsonText = await jsonFile?.text()
  const jsonContent = jsonText || undefined

  return {
    json: jsonContent ? JSON.parse(jsonContent) : undefined,
    array: returnArray,
  }
}
