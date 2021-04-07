import React, { createContext, useContext, useState } from 'react'

import PropTypes from 'prop-types'

const GridContext = createContext()

export const useGridContext = () => useContext(GridContext)

const GridProvider = ({ children }) => {
  const [gridRow, setGridRow] = useState([])
  const [gridColumns, setGridColumns] = useState([])
  const [currentField, setCurrentField] = useState(null)
  const [hasNewColumn, setHasNewColumn] = useState(false)

  return (
    <GridContext.Provider
      value={{
        gridRow,
        setGridRow,
        gridColumns,
        setGridColumns,
        currentField,
        setCurrentField,
        hasNewColumn,
        setHasNewColumn,
      }}
    >
      {children}
    </GridContext.Provider>
  )
}

GridProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GridProvider
