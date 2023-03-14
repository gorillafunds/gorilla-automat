import { splitArrayByAmount } from "./index"

describe("splitArrayByAmount", () => {
  it("should split any array containing objects with a amount property correctly", () => {
    const testArray = [{ name: "item1", amount: 60 }]
    const expectedArray = [
      { name: "item1", amount: 50 },
      { name: "item1", amount: 10 },
    ]
    const result = splitArrayByAmount(testArray)
    expect(result).toEqual(expectedArray)
  })

  it("should return the array as it is, when no object has a amount bigger than 50", () => {
    const testAndResultArray = [{ name: "item1", amount: 50 }]
    const result = splitArrayByAmount(testAndResultArray)
    expect(result).toEqual(testAndResultArray)
  })

  it("should work with multiple items", () => {
    const testArray = [
      { name: "item1", amount: 60 },
      { name: "item2", amount: 50 },
      { name: "item3", amount: 105 },
    ]
    const expectedArray = [
      { name: "item1", amount: 50 },
      { name: "item1", amount: 10 },
      { name: "item2", amount: 50 },
      { name: "item3", amount: 50 },
      { name: "item3", amount: 50 },
      { name: "item3", amount: 5 },
    ]
    const result = splitArrayByAmount(testArray)
    expect(result).toEqual(expectedArray)
  })

  it("should work with a maxAmount argument provided", () => {
    const testArray = [{ name: "item1", amount: 60 }]
    const expectedArray = [
      { name: "item1", amount: 30 },
      { name: "item1", amount: 30 },
    ]
    // Max amount is 30 now
    const result = splitArrayByAmount(testArray, 30)
    expect(result).toEqual(expectedArray)
  })

  it("should convert amount into a number if it's a numeric string", () => {
    const testArray = [{ name: "item1", amount: "60" }]
    const expectedArray = [
      { name: "item1", amount: 50 },
      { name: "item1", amount: 10 },
    ]
    const result = splitArrayByAmount(testArray)
    expect(result).toEqual(expectedArray)
  })
})
