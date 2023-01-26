import React from "react"
import { Spinner } from "./index"

export default {
  title: "Components/Spinner",
  component: Spinner,
}

export const Base = () => <Spinner />

export const WithClassNameProp = () => <Spinner className="w-80" />

export const WidthAndHeightProp = () => <Spinner width="60" height="60" />
