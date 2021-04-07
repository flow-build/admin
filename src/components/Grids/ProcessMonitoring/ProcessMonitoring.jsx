import React from 'react'

import GridProvider from 'components/Grids/GridProvider'
import * as GridUI from 'components/Grids/GridUI'
import PropTypes from 'prop-types'
import * as UTIL from 'utils/components'

const gridColumns = [
  {
    headerName: 'Name',
    field: 'name',
    cellRenderer: UTIL.Grids.handleObjectCellRenderer,
  },
  {
    headerName: 'Abilities',
    field: 'abilities',
    cellRenderer: UTIL.Grids.handleObjectCellRenderer,
    headerComponentFramework: GridUI.ColumnHeader,
  },
  {
    headerName: 'Sprites',
    field: 'sprites',
    cellRenderer: UTIL.Grids.handleObjectCellRenderer,
    headerComponentFramework: GridUI.ColumnHeader,
  },
  {
    headerName: 'Game Indices',
    field: 'game_indices',
    cellRenderer: UTIL.Grids.handleObjectCellRenderer,
    headerComponentFramework: GridUI.ColumnHeader,
  },
  {
    headerName: 'Held Items',
    field: 'held_items',
    cellRenderer: UTIL.Grids.handleObjectCellRenderer,
    headerComponentFramework: GridUI.ColumnHeader,
  },
  {
    headerName: 'Stats',
    field: 'stats',
    cellRenderer: UTIL.Grids.handleObjectCellRenderer,
    headerComponentFramework: GridUI.ColumnHeader,
  },
]

const ProcessMonitoring = ({ rowData }) => {
  return (
    <GridProvider>
      <GridUI.Grid rowData={rowData} columnDefs={gridColumns} />
    </GridProvider>
  )
}

ProcessMonitoring.propTypes = {
  rowData: PropTypes.any,
}

export default ProcessMonitoring
