import React, { useEffect, useState } from 'react'

import axios from 'axios'
import * as C from 'components'

import * as S from './styles'

const ProcessMonitoring = () => {
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

      <C.GRID.ProcessMonitoring rowData={gridData} />
    </S.Container>
  )
}

export default ProcessMonitoring
