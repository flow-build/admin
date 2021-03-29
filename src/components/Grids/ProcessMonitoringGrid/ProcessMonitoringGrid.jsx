import React from 'react'

import { AgGridReact } from 'ag-grid-react'
import PropTypes from 'prop-types'

import * as S from './styles'

const ProcessMonitoringGrid = ({ rowData, cellClicked }) => {
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
  return (
    <S.Container>
      <div className="ag-theme-alpine" style={{ height: 500, flex: 4 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={gridOptions.columnDefs}
          onCellClicked={(e) => cellClicked(e)}
        />
      </div>
    </S.Container>
  )
}

ProcessMonitoringGrid.propTypes = {
  rowData: PropTypes.any,
  cellClicked: PropTypes.func
}

export default ProcessMonitoringGrid
