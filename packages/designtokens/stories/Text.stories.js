import React from "react"

export default {
  title: "Designtokens/Text",
}

const sizes = [
  "text-700",
  "text-600",
  "text-500",
  "text-400",
  "text-300",
  "text-200",
  "text-100",
]

export const Base = () => (
  <div className="space-y-8">
    {sizes.map((size) => (
      <div key={size}>
        <span className="text-gray-500 text-xs">{size}</span>
        <p className={size}>
          Batch Mint &amp; List
          <br />
          thousands of NFTs
          <br />
          in minutes!
        </p>
      </div>
    ))}
  </div>
)

export const Medium = () => (
  <div className="space-y-8">
    {sizes.map((size) => (
      <div key={size}>
        <span className="text-gray-500 text-xs font-mono">{size}</span>
        <p className={`${size} font-medium`}>
          Launch your own NFT <br /> shop in minutes
        </p>
      </div>
    ))}
  </div>
)

export const Bold = () => (
  <div className="space-y-8">
    {sizes.map((size) => (
      <div key={size}>
        <span className="text-gray-500 text-xs">{size}</span>
        <p className={`${size} font-bold`}>
          Launch your own NFT <br /> shop in minutes
        </p>
      </div>
    ))}
  </div>
)
