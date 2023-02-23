import { replaceIndexString } from "./index"

describe("replaceIndexString", () => {
  it("should replace {{index}} with a given number", () => {
    const testString = "Title {{index}}"

    const result = replaceIndexString(testString, 1)

    expect(result).toBe("Title 1")
  })

  it("should do nothing if the string does not contain {{index}}", () => {
    const testString = "Title Test"

    const result = replaceIndexString(testString, 1)

    expect(result).toBe("Title Test")
  })

  it("should be able to replace multiple {{index}} in one string with a given number", () => {
    const testString = "{{index}} Title {{index}}"

    const result = replaceIndexString(testString, 1)

    expect(result).toBe("1 Title 1")
  })
})
