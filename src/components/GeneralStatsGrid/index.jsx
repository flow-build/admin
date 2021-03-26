import React from 'react'

import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import PropTypes from 'prop-types'

import * as S from './styles'

const GeneralStatsGrid = ({ className, ...props }) => {
  const gridOptions = {
    columnDefs: [
      { headerName: 'ID', field: 'id' },
      { headerName: 'Name', field: 'name' },
      { headerName: 'Username', field: 'username' },
      { headerName: 'E-mail', field: 'email' },
      { headerName: 'Address', field: 'address' }
    ]
  }

  return (
    <S.Wrapper className={className} {...props}>
      <div className="ag-theme-alpine" style={{ height: 500, flex: 4 }}>
        <AgGridReact
          rowData={props.rowData}
          columnDefs={gridOptions.columnDefs}
          onCellClicked={() => props.cellClicked()}
        />
      </div>
    </S.Wrapper>
  )
}

GeneralStatsGrid.propTypes = {
  className: PropTypes.string,
  rowData: PropTypes.any,
  cellClicked: PropTypes.func
}

GeneralStatsGrid.defaultProps = {
  className: 'generalstatsgrid'
}

export default GeneralStatsGrid
