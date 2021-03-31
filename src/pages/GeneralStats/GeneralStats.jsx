import React, { useState, useEffect } from 'react'

import * as C from 'components'
import PropTypes from 'prop-types'
import * as API from 'services/Loaders'
import * as UTIL from 'utils'

import * as S from './styles'

const GeneralStats = ({ className, ...props }) => {
  const [generalStatsData, setGeneralStatsData] = useState('')

  const loadData = async () => {
    const generalStatsResponse = await API.loadGeneralStats()
    UTIL.stringifyObjects(generalStatsResponse)
    setGeneralStatsData(generalStatsResponse)
  }

  useEffect(() => loadData(), [])

  return (
    <S.Container>
      <h1>General Stats</h1>
      <S.Content className={className} {...props}>
        <C.GRID.GeneralStatsGrid rowData={generalStatsData} />
      </S.Content>
    </S.Container>
  )
}

GeneralStats.propTypes = {
  className: PropTypes.string
}

GeneralStats.defaultProps = {
  className: 'generalstats'
}

export default GeneralStats
