import React, { createContext, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

const defaultState = {
  data: [],
  isShowOnboarding: true,
  setIsShowOnboarding: () => {},
  isShowAutosuggest: false,
  setIsShowAutosuggest: () => {},
  selected: null,
  setSelected: () => {},
}

export const ActivityContext = createContext(defaultState)

const ActivityProvider = ({ children }) => {
  const { allGoogleSheetCrowdsourceRow } = useStaticQuery(graphql`
    {
      allGoogleSheetCrowdsourceRow(
        sort: { fields: activity, order: ASC }
        filter: { published: { eq: true } }
      ) {
        nodes {
          id
          slug
          answertype
          answertypelabel
          activity
          answercontent
          referencetitle
          reference
        }
      }
    }
  `)

  const data = allGoogleSheetCrowdsourceRow.nodes

  const [isShowOnboarding, setIsShowOnboarding] = useState(true)

  const [isShowAutosuggest, setIsShowAutosuggest] = useState(false)

  const [selected, setSelected] = useState(null)

  return (
    <ActivityContext.Provider
      value={{
        data,
        isShowOnboarding,
        setIsShowOnboarding,
        isShowAutosuggest,
        setIsShowAutosuggest,
        selected,
        setSelected,
      }}
    >
      {children}
    </ActivityContext.Provider>
  )
}

export default ActivityProvider
