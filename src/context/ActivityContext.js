import React, { createContext, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

const defaultState = {
  data: [],
  isShowOnboarding: false,
  setIsShowOnboarding: () => {},
  isShowAutosuggest: false,
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

  const [isShowOnboarding, setIsShowOnboarding] = useState(false)

  return (
    <ActivityContext.Provider
      value={{
        data,
        isShowOnboarding,
        setIsShowOnboarding,
      }}
    >
      {children}
    </ActivityContext.Provider>
  )
}

export default ActivityProvider
