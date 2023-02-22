import { replaceIndexString } from "../"

export const buildMetadataArray = (
  fileArray: File[],
  config: MetadataConfig,
  metaDataJson: any,
) => {
  const metaDataArray = fileArray.map((file, index) => {
    const { attributes } = metaDataJson.find((current: any) => {
      return file.name.includes(current.name)
    })

    // Replace title and description {{index}} with the current index+1
    const title = replaceIndexString(config.title, index + 1)
    const description = replaceIndexString(config.description, index + 1)

    return {
      ...config,
      title,
      description,
      attributes,
    }
  })

  return metaDataArray
}

export type MetadataConfig = {
  title: string
  description: string
}
