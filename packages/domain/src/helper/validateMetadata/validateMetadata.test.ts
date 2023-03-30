import { validateMetadata } from "./validateMetadata"
import { validateMetadataObj } from "./_validateMetadataObj"
import { mockJson } from "./mockJson"

describe("validateMetadataObj", () => {
  it("should retrun true for a valid object", () => {
    const validObj = mockJson[0]

    const result = validateMetadataObj(validObj)

    expect(result).toBe(true)
  })
  it("should return false for an invalid object", () => {
    const invalidObj = mockJson[2]

    const result = validateMetadataObj(invalidObj)

    expect(result).toBe(false)
  })
})

describe("validateMetadata", () => {
  it("should retrun true for a valid json array", () => {
    const validJsonArray = mockJson.slice(0, -1)

    const result = validateMetadata(validJsonArray)

    expect(result).toBe(true)
  })
  it("should return false for an invalid json array", () => {
    const invalidJsonArray = mockJson

    const result = validateMetadata(invalidJsonArray)

    expect(result).toBe(false)
  })
})
