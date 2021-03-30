import React, { useState } from 'react'

import { AgGridReact } from 'ag-grid-react'
import * as UI from 'components/Grids/UI'
import PropTypes from 'prop-types'

import * as S from './styles'

const gridOptions = {
  columnDefs: [
    { headerName: 'about', field: 'about' },
    { headerName: 'friends', field: 'friends' },
    { headerName: 'tags', field: 'tags' },
    { headerName: 'address', field: 'address' },
    { headerName: 'phone', field: 'phone' },
  ],
}
const ProcessMonitoring = ({ rowData }) => {
  const [cellContent, setCellContent] = useState(undefined)

  const onCellClicked = (e) => {
    if (cellContent === e.data[e.colDef['field']]) {
      setCellContent(undefined)
    } else {
      setCellContent(e.data[e.colDef['field']])
    }
  }

  return (
    <UI.GridContainer>
      <S.Grid className="ag-theme-alpine">
        <AgGridReact
          rowData={rowData}
          columnDefs={gridOptions.columnDefs}
          onCellClicked={onCellClicked}
        />
      </S.Grid>

      <UI.CellDetails
        cellContent={cellContent}
        setCellContent={setCellContent}
      />
    </UI.GridContainer>
  )
}

ProcessMonitoring.propTypes = {
  rowData: PropTypes.any,
}

export default ProcessMonitoring
