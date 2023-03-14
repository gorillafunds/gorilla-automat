type Item = {
  amount: number | string
}

export const splitArrayByAmount = (items: Item[], maxAmount = 50): Item[] => {
  const result: Item[] = []

  items.forEach((item) => {
    // Split the item into to several items, if the amount is too big
    if (item.amount > maxAmount) {
      let remainingAmount = Number(item.amount)
      while (remainingAmount > 0) {
        const newItem: Item = { ...item }
        // Determine amount, if remainingAmount <= maxAmount take remainingAmount, else take maxAmount
        newItem.amount = Math.min(remainingAmount, maxAmount)

        result.push(newItem)

        // Make sure to quit the while loop when finished
        remainingAmount -= maxAmount
      }
    } else {
      result.push(item)
    }
  })

  return result
}
