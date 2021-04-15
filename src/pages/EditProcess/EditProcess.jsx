import React, { useEffect, useState } from 'react'

import * as C from 'components'
import PropTypes from 'prop-types'
import * as API from 'services/Loaders'
import * as UTIL from 'utils/components/utils'

import * as S from './styles'

const EditProcess = ({ location }) => {
  const [processData, setProcessData] = useState('')

  const loadData = async (location) => {
    const editProcessResponse = await API.loadEditProcess(location?.state)
    UTIL.stringifyObjects(editProcessResponse)
    setProcessData(editProcessResponse)
  }

  useEffect(() => {
    loadData(location)
  }, [location])

  return (
    <S.Container>
      <h1>Edit Process</h1>
      <S.Content>
        <C.GRID.GeneralStatsGrid rowData={processData} />
      </S.Content>
    </S.Container>
  )
}

EditProcess.propTypes = {
  location: PropTypes.object,
}

export default EditProcess
