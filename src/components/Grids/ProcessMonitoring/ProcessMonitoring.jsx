import React, { useEffect, useState } from 'react'

import { AgGridReact } from 'ag-grid-react'
import GridProvider, { useGridContext } from 'components/Grids/GridProvider'
import * as GridUI from 'components/Grids/GridUI'
import PropTypes from 'prop-types'
import * as UTIL from 'utils/components'

import * as S from '../styles'

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
    headerComponentFramework: GridUI.ColumnSearcher,
  },
  {
    headerName: 'Forms',
    field: 'forms',
    cellRenderer: UTIL.Grids.handleObjectCellRenderer,
  },
  {
    headerName: 'Game Indices',
    field: 'game_indices',
    cellRenderer: UTIL.Grids.handleObjectCellRenderer,
  },
  {
    headerName: 'Held Items',
    field: 'held_items',
    cellRenderer: UTIL.Grids.handleObjectCellRenderer,
  },
  {
    headerName: 'Stats',
    field: 'stats',
    cellRenderer: UTIL.Grids.handleObjectCellRenderer,
  },
]

const ProcessMonitoring = ({ rowData }) => {
  const { setGridRow, setGridColumns } = useGridContext()
  const [currentCell, setCurrentCell] = useState(null)

  const onCellClicked = (cell) => {
    setCurrentCell(cell?.data?.[cell?.colDef?.['field']])
  }

  useEffect(() => {
    setGridRow(rowData)
    setGridColumns(gridColumns)
  }, [rowData])

  return (
    <GridProvider>
      <S.GridContainer>
        <S.Grid className="ag-theme-alpine">
          <AgGridReact
            rowData={rowData}
            columnDefs={gridColumns}
            onCellClicked={onCellClicked}
          />
        </S.Grid>

        <GridUI.CellDetails
          currentCell={currentCell}
          setCurrentCell={setCurrentCell}
        />
      </S.GridContainer>
    </GridProvider>
  )
}

ProcessMonitoring.propTypes = {
  rowData: PropTypes.any,
}

export default ProcessMonitoring
