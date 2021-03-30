import React, { useState } from 'react'

import { AgGridReact } from 'ag-grid-react'
import * as GridUI from 'components/Grids/GridUI'
import PropTypes from 'prop-types'

import * as S from '../styles'

const gridColumns = {
  columnDefs: [
    { headerName: 'name', field: 'name' },
    { headerName: 'abilities', field: 'abilities' },
    { headerName: 'forms', field: 'forms' },
    { headerName: 'game_indices', field: 'game_indices' },
    { headerName: 'held_items', field: 'held_items' },
    { headerName: 'stats', field: 'stats' },
  ],
}
const ProcessMonitoring = ({ rowData }) => {
  const [currentCell, setCurrentCell] = useState(null)

  const onCellClicked = (cell) => {
    setCurrentCell(cell?.data?.[cell?.colDef?.['field']])
  }

  console.log('rowData', rowData)

  return (
    <S.GridContainer>
      <S.Grid className="ag-theme-alpine">
        <AgGridReact
          rowData={rowData}
          columnDefs={gridColumns.columnDefs}
          onCellClicked={onCellClicked}
        />
      </S.Grid>

      <GridUI.CellDetails
        currentCell={currentCell}
        setCurrentCell={setCurrentCell}
      />
    </S.GridContainer>
  )
}

ProcessMonitoring.propTypes = {
  rowData: PropTypes.any,
}

export default ProcessMonitoring
