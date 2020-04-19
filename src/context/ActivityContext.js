import React, { createContext, useState } from "react"

export const ActivityContext = createContext(null)

const ActivityProvider = ({ children }) => {
  const [isShowAutosuggest, setIsShowAutosuggest] = useState(false)
  const [selected, setSelected] = useState(null)

  return (
    <ActivityContext.Provider
      value={{ isShowAutosuggest, setIsShowAutosuggest, selected, setSelected }}
    >
      {children}
    </ActivityContext.Provider>
  )
}

export default ActivityProvider
