import React, { useState, useEffect } from 'react'

import axios from 'axios'
import * as C from 'components'

import * as S from './styles'

const ProcessMonitoring = () => {
  const [viewerContent, setViewerContent] = useState(undefined)

  const showViewerHandler = (e) => {
    // console.log('[ProcessMonitoring] event: ', e)
    if (viewerContent === e.data[e.colDef['field']]) {
      setViewerContent(undefined)
    } else {
      setViewerContent(e.data[e.colDef['field']])
    }
    // console.log('[ProcessMonitoring] viewerContent: ', viewerContent)
  }

  const [gridData, setGridData] = useState('')

  const getGridData = () => {
    axios
      .get('https://604a26779251e100177ce0d3.mockapi.io/api/processes')
      .then((response) => {
        // console.log('[Process Monitoring ] response: ', response)
        setGridData(response.data.slice(0, 5))
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => getGridData(), [])

  return (
    <S.Container>
      <h1>ProcessMonitoring</h1>

      <S.Content>
        <C.GRID.ProcessMonitoringGrid
          rowData={gridData}
          cellClicked={(e) => showViewerHandler(e)}
        />

        <C.GRID.Viewer viewerContent={viewerContent} />
      </S.Content>
    </S.Container>
  )
}

export default ProcessMonitoring
