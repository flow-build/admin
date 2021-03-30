import React, { createContext, useContext, useState } from 'react'

import PropTypes from 'prop-types'

const NavigationContext = createContext()

export const useNavigationContext = () => useContext(NavigationContext)

const NavigationProvider = ({ children }) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)
  const [currentExpandedSidebarItem, setCurrentExpandedSidebarItem] = useState(
    null
  )

  return (
    <NavigationContext.Provider
      value={{
        isSidebarExpanded,
        setIsSidebarExpanded,
        currentExpandedSidebarItem,
        setCurrentExpandedSidebarItem
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

NavigationProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default NavigationProvider
