import { render, screen } from "@testing-library/react"
import { useSetupStorage } from "./"

describe("useSetupStorage", () => {
  it("should provide all data if setupStorageStorage is available", () => {
    // Add mockStorage and then render TestComponent
    const mockSetup = {
      title: "Mock Title",
      description: "Mock Description",
      amount: 1,
      price: 1,
    }
    sessionStorage.setItem("gorillaAutomatSetup", JSON.stringify(mockSetup))
    render(<TestComponent />)

    const titleElement = screen.getByTestId("title")
    const descriptionElement = screen.getByTestId("description")
    const amountElement = screen.getByTestId("amount")
    const priceElement = screen.getByTestId("price")

    expect(titleElement.textContent).toBe(mockSetup.title)
    expect(descriptionElement.textContent).toBe(mockSetup.description)
    expect(+amountElement.textContent!).toBe(mockSetup.amount)
    expect(+priceElement.textContent!).toBe(mockSetup.price)
  })

  it("should throw an error if shopStorage is not available", () => {
    const renderFn = () => {
      render(<TestComponent />)
    }

    expect(renderFn).toThrow("Setup data is not available")
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
  const setupStorage = useSetupStorage()

  return (
    <div>
      <p data-testid="title">{setupStorage.title}</p>
      <p data-testid="description">{setupStorage.description}</p>
      <p data-testid="amount">{setupStorage.amount}</p>
      <p data-testid="price">{setupStorage.price}</p>
    </div>
  )
}
