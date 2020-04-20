import React, { createContext, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

export const ActivityContext = createContext(null)

const ActivityProvider = ({ children }) => {
  const data = useStaticQuery(graphql`
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
          answer
          answercontent
          referencetitle
          reference
        }
      }
    }
  `).allGoogleSheetCrowdsourceRow.nodes

  const [isShowAutosuggest, setIsShowAutosuggest] = useState(false)
  const [selected, setSelected] = useState(null)

  return (
    <ActivityContext.Provider
      value={{
        data,
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
