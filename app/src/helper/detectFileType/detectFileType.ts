type SupportedTypes =
  | "image/png"
  | "image/svg+xml"
  | "text/json"
  | "folder"
  | undefined

/** Returns a file-type based on a fileName suffix */
export const detectFileType = (fileName: string): SupportedTypes => {
  const [_, suffix] = fileName.split(".")

  switch (suffix) {
    case "png":
      return "image/png"
    case "svg":
      return "image/svg+xml"
    case "json":
      return "text/json"
    default:
      return "folder"
  }
}
