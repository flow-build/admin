import * as UTIL from 'utils/components'

export const getColumnKeys = (gridRow, currentField) => {
  const column = gridRow?.[0]?.[currentField]
  const columnObj = Array.isArray(column) ? column[0] : column
  const keys = columnObj ? Object.keys(columnObj) : null

  return keys
}

export const handleNewGridRow = (
  additionalFieldName,
  gridRow,
  currentField,
  currentKey
) => {
  return gridRow.map((row) => {
    const field = row[currentField]

    row[additionalFieldName] = field[currentKey]

    if (Array.isArray(field)) {
      row[additionalFieldName] = field.map((item) => item[currentKey])
    }

    return row
  })
}

export const handleNewGridColumn = (
  additionalFieldName,
  gridColumns,
  currentField,
  currentKey,
  hasNewColumn
) => {
  const additionalColumn = {
    headerName: `${currentField} -> ${currentKey}`,
    field: additionalFieldName,
    cellRenderer: UTIL.Grids.handleObjectCellRenderer,
  }

  if (hasNewColumn) gridColumns.pop()

  return [...gridColumns, additionalColumn]
}
