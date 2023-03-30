import { validateMetadataObj } from "./_validateMetadataObj"

/** Checks a json array of metadata*/
export const validateMetadata = (metadataJsonArry: any[]) => {
  const allObjectsValid = metadataJsonArry.every(validateMetadataObj)
  return allObjectsValid
}
