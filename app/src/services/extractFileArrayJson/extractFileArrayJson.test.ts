import { describe, expect, it } from "vitest"
import fs from "fs"
import path from "path"
import { unpackZip } from ".."
import { extractFileArrayJson } from "./extractFileArrayJson"

const FILE_PATH = path.join(__dirname, "batchTestJson.zip")

describe("extractFileArrayJson", () => {
  /**
   * return an object containing an array (files without json)
   * and the actual json data
   */
  it("should return the right object", async () => {
    const zipFile = await fs.promises.readFile(FILE_PATH)
    const exampleFile = new File([zipFile], "batchTestJson.zip")
    const exampleArray = await unpackZip(exampleFile)
    const expectedJson = { success: true }

    const result = await extractFileArrayJson(exampleArray)

    expect(result.json).toBeDefined()
    expect(result.json).toEqual(expectedJson)
    expect(result.array.length).toBe(2)
  })
})
