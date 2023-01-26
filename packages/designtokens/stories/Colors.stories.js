import React from "react"
import colors from "../colors"

export default {
  title: "Designtokens/Colors",
}

const colorNames = Object.keys(colors)
const [firstColorName] = colorNames
const sizes = Object.keys(colors[firstColorName])

export const Base = () => (
  <>
    {/* Sizes */}
    <div className="flex">
      {sizes.map((size) => (
        <Square key={size}>{size}</Square>
      ))}
    </div>
    {/* All Color Palettes */}
    {colorNames.map((colorName) => (
      <ColorPalette
        key={colorName}
        palette={colors[colorName]}
        name={colorName}
      />
    ))}
  </>
)

const ColorPalette = ({ palette, name }) => {
  const shades = Object.keys(palette)
  return (
    <div className="flex">
      {/* Actual Colors */}
      {shades.map((shade) => (
        <Square key={shade} style={{ backgroundColor: palette[shade] }} />
      ))}
      {/* Square with colorName in it */}
      <Square>{name}</Square>
    </div>
  )
}

// Used style here for the background, so not every color comes into styles.min.css
const Square = ({ children, style = {} }) => (
  <span
    className="h-20 w-20 flex items-center justify-center font-mono text-gray-500"
    style={style}
  >
    {children}
  </span>
)
