/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import ActivityProvider from "./src/context/ActivityContext"

export const wrapRootElement = ({ element }) => {
  return <ActivityProvider>{element}</ActivityProvider>
}
