import React, { createContext, useState, useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"

const activityStateDefaultState = {
  data: [],
  isShowOnboarding: true,
  isLoading: false,
}

const activitySetterDefaultState = {
  setIsShowOnboarding: () => {},
  setIsLoading: () => {},
}

export const ActivityState = createContext(activityStateDefaultState)
export const ActivitySetter = createContext(activitySetterDefaultState)

const ActivityProvider = ({ children }) => {
  const { allGoogleSheetCrowdsourceRow } = useStaticQuery(graphql`
    {
      allGoogleSheetCrowdsourceRow(
        sort: { fields: [discoverabilitylevel, activity], order: ASC }
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
  const [isLoading, setIsLoading] = useState(false)

  const ctxState = useMemo(
    () => ({
      data,
      isShowOnboarding,
      isLoading,
    }),
    [data, isShowOnboarding, isLoading]
  )

  const ctxSetter = useMemo(
    () => ({
      setIsShowOnboarding,
      setIsLoading,
    }),
    []
  )

  return (
    <ActivityState.Provider value={ctxState}>
      <ActivitySetter.Provider value={ctxSetter}>
        {children}
      </ActivitySetter.Provider>
    </ActivityState.Provider>
  )
}

export default ActivityProvider
