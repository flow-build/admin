import React, { useEffect, useState } from 'react'

import * as C from 'components'
import * as API from 'services/Loaders'

import * as S from './styles'

const ProcessMonitoring = () => {
  const [process, setProcess] = useState([])

  const loadData = async () => {
    const processResponse = await API.loadProcess()
    setProcess([processResponse, processResponse])
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <S.Container>
      <h1>ProcessMonitoring</h1>

      <C.GRID.ProcessMonitoring rowData={process} />
    </S.Container>
  )
}

export default ProcessMonitoring
