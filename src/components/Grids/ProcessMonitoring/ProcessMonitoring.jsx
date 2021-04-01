import React, { useState } from 'react'

import { AgGridReact, AgGridColumn } from 'ag-grid-react'
import * as GridUI from 'components/Grids/GridUI'
import PropTypes from 'prop-types'
import * as UTIL from 'utils/components'

import * as S from '../styles'

const ProcessMonitoring = ({ rowData }) => {
  const [currentCell, setCurrentCell] = useState(null)

  const onCellClicked = (cell) => {
    setCurrentCell(cell?.data?.[cell?.colDef?.['field']])
  }

  return (
    <S.GridContainer>
      <S.Grid className="ag-theme-alpine">
        <AgGridReact rowData={rowData} onCellClicked={onCellClicked}>
          <AgGridColumn
            field="name"
            headerName="Nome"
            sortable
            filter
            cellRenderer={UTIL.Grids.handleObjectCellRenderer}
          />
          <AgGridColumn
            field="location_area_encounters"
            sortable
            filter
            cellRenderer={UTIL.Grids.handleObjectCellRenderer}
          />
          <AgGridColumn
            field="abilities"
            sortable
            filter
            cellRenderer={UTIL.Grids.handleObjectCellRenderer}
          />
          <AgGridColumn
            field="game_indices"
            sortable
            filter
            cellRenderer={UTIL.Grids.handleObjectCellRenderer}
          />
          <AgGridColumn
            field="held_items"
            sortable
            filter
            cellRenderer={UTIL.Grids.handleObjectCellRenderer}
          />
          <AgGridColumn
            field="stats"
            sortable
            filter
            cellRenderer={UTIL.Grids.handleObjectCellRenderer}
          />
        </AgGridReact>
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
