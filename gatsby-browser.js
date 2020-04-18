/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import { IntlProvider } from "react-intl"
import React from "react"

import locale_id from "./src/translations/id"

const data = {
  id: locale_id,
}
const language = "id"

export const wrapRootElement = ({ element }) => {
  return (
    <IntlProvider locale={language} messages={data[language]}>
      {element}
    </IntlProvider>
  )
}
