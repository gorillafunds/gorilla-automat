import JsZip from "jszip"
import { detectFileType } from "../../helper"

/** Unpacks and sanitizes a given File
 * which means to set the correct types for any file
 * and also remove all files of type folder
 */
export const unpackZip = async (file: File): Promise<File[]> => {
  const zip = new JsZip()

  const { files } = await zip.loadAsync(file)
  const fileNames = Object.keys(files)

  const sanitizedFiles = await Promise.all(
    fileNames.map(async (fileName) => {
      const blob = await files[fileName].async("blob")
      const fileType = detectFileType(fileName)
      return new File([blob], fileName, { type: fileType })
    }),
  )

  // Filter out every file of folder type
  const filteredFiles = sanitizedFiles.filter(({ type }) => type !== "folder")

  return filteredFiles
}
