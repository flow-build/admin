import React, { useState } from 'react'

import { AgGridReact } from 'ag-grid-react'
import * as UI from 'components/Grids/UI'
import PropTypes from 'prop-types'

import * as S from './styles'

const gridOptions = {
  columnDefs: [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Created at', field: 'createdAt' },
    { headerName: 'Blueprint spec', field: 'blueprintSpec' }
    // { headerName: 'User ID', field: 'userId' },
    // { headerName: 'ID', field: 'id' },
    // { headerName: 'Title', field: 'title' },
    // { headerName: 'Completed', field: 'completed' }
  ]
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
  rowData: PropTypes.any
}

export default ProcessMonitoring
