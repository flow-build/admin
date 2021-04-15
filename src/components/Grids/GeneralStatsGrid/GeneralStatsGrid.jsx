import React from 'react'
import { useHistory } from 'react-router-dom'

import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import PropTypes from 'prop-types'

import * as S from './styles'

const GeneralStatsGrid = ({ rowData }) => {
  const gridOptions = {
    columnDefs: [
      { headerName: 'ID', field: 'id' },
      { headerName: 'Name', field: 'name' },
      { headerName: 'Username', field: 'username' },
      { headerName: 'E-mail', field: 'email' },
      { headerName: 'Address', field: 'address' },
      { headerName: 'Created at', field: 'createdAt' },
    ],
  }

  const history = useHistory()

  const onCellClickedHandler = (event) => {
    const paramsString = `id=${event.data.id}`
    history.push(`edit_process?${paramsString}`, { data: event.data })
  }

  return (
    <S.Container>
      <div className="ag-theme-alpine" style={{ height: 500, flex: 4 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={gridOptions.columnDefs}
          onCellClicked={(event) => onCellClickedHandler(event)}
        />
      </div>
    </S.Container>
  )
}

GeneralStatsGrid.propTypes = {
  rowData: PropTypes.any,
}

export default GeneralStatsGrid
