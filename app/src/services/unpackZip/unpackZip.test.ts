import { describe, expect, it } from "vitest"
import fs from "fs"
import path from "path"
import { unpackZip } from "./unpackZip"

const FILE_PATH = path.join(__dirname, "batchTest.zip")

describe("unpackZip", () => {
  it("should return an array with sanitized files from a given zip", async () => {
    const zip = await fs.promises.readFile(FILE_PATH)
    const exampleFile = new File([zip], "batchTest.zip")

    const resultArray = await unpackZip(exampleFile as File)

    expect(resultArray.length).toBe(3)
    expect(resultArray[0].type).toBe("image/svg+xml")
  })
})
