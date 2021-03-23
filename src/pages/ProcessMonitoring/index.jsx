import React, { useState, useEffect } from 'react'

import axios from 'axios'
import Layout from 'components/Layout'
import ProcessMonitoringGrid from 'components/ProcessMonitoringGrid'
import Viewer from 'components/Viewer'
import PropTypes from 'prop-types'

import * as S from './styles'

const ProcessMonitoring = ({ className, ...props }) => {
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
    <Layout>
      <h1>ProcessMonitoring</h1>
      <S.Wrapper className={className} {...props}>
        <ProcessMonitoringGrid
          rowData={gridData}
          cellClicked={(e) => showViewerHandler(e)}
        />
        <Viewer viewerContent={viewerContent} />
      </S.Wrapper>
    </Layout>
  )
}

ProcessMonitoring.propTypes = {
  className: PropTypes.string
}

ProcessMonitoring.defaultProps = {
  className: 'processmonitoring'
}

export default ProcessMonitoring
