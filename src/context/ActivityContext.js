import React, { createContext, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

const defaultState = {
  data: [],
  isShowOnboarding: true,
  setIsShowOnboarding: () => {},
  isShowAutosuggest: false,
  isLoading: true,
  setIsLoading: () => {},
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
  const [isLoading, setIsLoading] = useState(true)

  return (
    <ActivityContext.Provider
      value={{
        data,
        isShowOnboarding,
        setIsShowOnboarding,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </ActivityContext.Provider>
  )
}

export default ActivityProvider
