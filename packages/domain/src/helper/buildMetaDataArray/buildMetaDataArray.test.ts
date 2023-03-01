import fs from "fs"
import path from "path"
import { buildMetadataArray } from "./index"
import { testMetadataJson } from "./_testMetadataJson"

const FILE_PATH = path.join(__dirname, "100073508100.svg")

describe("buildMetadataArray", () => {
  it("should return the right metadataArray for a given fileArray and configObject", async () => {
    const svg = await fs.promises.readFile(FILE_PATH)
    const testFile = new File([svg], "testsvg")
    const testFileArray = [testFile]
    const testConfig = {
      title: "testfile",
      description: "this is a test",
    }

    const result = buildMetadataArray(
      testFileArray,
      testConfig,
      testMetadataJson,
    )

    expect(result[0]).toEqual({
      ...testMetadataJson[0],
      ...testConfig,
    })
  })
})
