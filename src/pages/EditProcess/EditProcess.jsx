import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

import * as C from 'components'
import PropTypes from 'prop-types'
import * as API from 'services/Loaders'
import * as UTIL from 'utils'

import * as S from './styles'

const EditProcess = ({ className, ...props }) => {
  const [processData, setProcessData] = useState('')

  const history = useHistory()

  const loadData = async (props) => {
    const editProcessResponse = await API.loadEditProcess(
      props?.location?.state
    )
    UTIL.stringifyObjects(editProcessResponse)
    setProcessData(editProcessResponse)
    history.replace('/monitoring/edit_process', null)
  }
  console.log('[EditProcess] props: ', props)
  useEffect(() => loadData(props), [])

  // console.log(
  //   '[EditProcess] props.location.state.data.id: ',
  //   props.location.state.data.id
  // )

  return (
    <S.Container className={className} {...props}>
      <h1>Edit Process</h1>
      <S.Content>
        <C.GRID.GeneralStatsGrid rowData={processData} />
      </S.Content>
    </S.Container>
  )
}

EditProcess.propTypes = {
  className: PropTypes.string,
  location: PropTypes.object,
  state: PropTypes.object
}

EditProcess.defaultProps = {
  className: 'editprocess'
}

export default EditProcess
