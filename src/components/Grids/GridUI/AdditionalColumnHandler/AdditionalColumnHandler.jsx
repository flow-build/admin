import React, { useEffect, useState } from 'react'

import * as C from 'components'
import { useGridContext } from 'components/Grids/GridProvider'
import * as UTIL from 'utils/components'

import * as S from './styles'

const AdditionalColumnHandler = () => {
  const {
    gridRow,
    setGridRow,
    gridColumns,
    setGridColumns,
    currentField,
    setCurrentField,
    hasNewColumn,
    setHasNewColumn,
  } = useGridContext()
  const [columnKeys, setColumnKeys] = useState([])
  const [currentKey, setCurrentKey] = useState(null)

  const handleAdditionalColumn = () => {
    if (!gridRow?.length || !gridColumns?.length) return

    const additionalFieldName = 'additionalColumn'

    const newGridRow = UTIL.AdditionalColumnHandler.handleNewGridRow(
      additionalFieldName,
      gridRow,
      currentField,
      currentKey
    )
    const newGridColumns = UTIL.AdditionalColumnHandler.handleNewGridColumn(
      additionalFieldName,
      gridColumns,
      currentField,
      currentKey,
      hasNewColumn
    )

    setGridRow(newGridRow)
    setGridColumns(newGridColumns)
    setHasNewColumn(true)
    setCurrentField(null)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (currentKey) {
      handleAdditionalColumn()
    }

    setColumnKeys(null)
  }

  useEffect(() => {
    const keys = UTIL.AdditionalColumnHandler.getColumnKeys(
      gridRow,
      currentField
    )
    setColumnKeys(keys)
  }, [currentField])

  return (
    <C.UI.Modal isModalOpen={!!columnKeys?.length} closeModal={setCurrentField}>
      <S.Form onSubmit={handleSubmit}>
        <C.UI.Select
          options={columnKeys}
          label="Adionar uma nova coluna"
          placeholder="Selecione uma nova Key"
          onChange={setCurrentKey}
        />

        <C.UI.Button type="submit">Ok</C.UI.Button>
      </S.Form>
    </C.UI.Modal>
  )
}

export default AdditionalColumnHandler
