export const buildMetadataArray = (
  fileArray: File[],
  config: MetadataConfig,
  metaDataJson: any,
) => {
  const metaDataArray = fileArray.map((file) => {
    const { attributes } = metaDataJson.find(
      (current: any) => current.name === file.name,
    )

    return {
      ...config,
      attributes,
    }
  })

  return metaDataArray
}

export type MetadataConfig = {
  title: string
  description: string
}
