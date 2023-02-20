import { render, screen } from "@testing-library/react"
import { useShopStorage } from "./"

describe("useShopStorage", () => {
  it("should provide all data if shopStorage is available", () => {
    // Add mockStorage and then render TestComponent
    const mockShop = {
      label: "Mock Shop",
      value: "mockShop",
    }
    sessionStorage.setItem("gorillaAutomatShop", JSON.stringify(mockShop))
    render(<TestComponent />)

    const titleElement = screen.getByTestId("title")
    const idElement = screen.getByTestId("id")

    expect(titleElement.textContent).toBe(mockShop.label)
    expect(idElement.textContent).toBe(mockShop.value)
  })

  it("should throw an error if shopStorage is not available", () => {
    const renderFn = () => {
      render(<TestComponent />)
    }

    expect(renderFn).toThrow("Shop data is not available")
  })
})

afterEach(() => {
  // Session storage needs to be cleaned up after every render
  sessionStorage.clear()
})

/*
 * This component just uses the hook
 * and then renders the data in easy to parse elements
 */
const TestComponent = () => {
  const { shopId, shopTitle } = useShopStorage()

  return (
    <div>
      <p data-testid="title">{shopTitle}</p>
      <p data-testid="id">{shopId}</p>
    </div>
  )
}
