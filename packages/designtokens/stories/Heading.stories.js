import React from "react"

export default {
  title: "Designtokens/Heading",
}

const sizes = ["text-heading-300", "text-heading-200", "text-heading-100"]

export const Base = () => (
  <div className="space-y-16">
    {sizes.map((size) => (
      <div key={size}>
        <span className="text-gray-500 font-mono">{size}</span>
        <h2 className={size}>Automat</h2>
      </div>
    ))}
  </div>
)
