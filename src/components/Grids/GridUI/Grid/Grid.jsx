import React, { useEffect, useState } from 'react'

import { AgGridReact } from 'ag-grid-react'
import { useGridContext } from 'components/Grids/GridProvider'
import * as GridUI from 'components/Grids/GridUI'
import PropTypes from 'prop-types'

import * as S from './styles'

const Grid = ({ rowData, columnDefs }) => {
  const { gridRow, setGridRow, gridColumns, setGridColumns } = useGridContext()
  const [reloadGrid, setReloadGrid] = useState()
  const [currentCell, setCurrentCell] = useState(null)

  const onCellClicked = (cell) => {
    setCurrentCell(cell?.data?.[cell?.colDef?.['field']])
  }

  useEffect(() => {
    setGridRow(rowData)
    setGridColumns(columnDefs)
  }, [rowData])

  useEffect(() => {
    setReloadGrid(new Date().toLocaleString())
  }, [gridRow, gridColumns])

  return (
    <>
      <S.Container key={reloadGrid}>
        <S.Grid className="ag-theme-alpine">
          <AgGridReact
            rowData={gridRow}
            columnDefs={gridColumns}
            onCellClicked={onCellClicked}
          />
        </S.Grid>

        <GridUI.CellDetails
          currentCell={currentCell}
          setCurrentCell={setCurrentCell}
        />
      </S.Container>

      <GridUI.AdditionalColumnHandler />
    </>
  )
}

Grid.propTypes = {
  rowData: PropTypes.array,
  columnDefs: PropTypes.array.isRequired,
}

export default Grid
