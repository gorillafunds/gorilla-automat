export const extractFileArrayJson = async (fileArray: File[]) => {
  let jsonFile: File | undefined
  const returnArray: File[] = []

  fileArray.forEach((file) => {
    if (file.type !== "text/json") returnArray.push(file)
    else {
      jsonFile = file
    }
  })

  const jsonContent = (await jsonFile?.text()) || ""

  return {
    json: JSON.parse(jsonContent),
    array: returnArray,
  }
}
