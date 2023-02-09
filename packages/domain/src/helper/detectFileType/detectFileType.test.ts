import { detectFileType } from "./index"

describe("detectFileType", () => {
  it("should return the right file type for a given fileName", () => {
    const pngName = "test.png"
    const svgName = "test.svg"
    const jsonName = "test.json"
    const folderName = "test"

    const pngResult = detectFileType(pngName)
    const svgResult = detectFileType(svgName)
    const jsonResult = detectFileType(jsonName)
    const folderResult = detectFileType(folderName)

    expect(pngResult).toBe("image/png")
    expect(svgResult).toBe("image/svg+xml")
    expect(jsonResult).toBe("text/json")
    expect(folderResult).toBe("folder")
  })
})
