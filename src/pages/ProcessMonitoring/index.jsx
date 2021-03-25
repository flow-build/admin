import React, { useState, useEffect } from 'react'

import axios from 'axios'
import Layout from 'components/Layout'
import ProcessMonitoringGrid from 'components/ProcessMonitoringGrid'
import Viewer from 'components/Viewer'
import PropTypes from 'prop-types'

import * as S from './styles'

const ProcessMonitoring = ({ className, ...props }) => {
  const [viewerContent, setViewerContent] = useState(undefined)
  const [gridData, setGridData] = useState('')

  const showViewerHandler = (e) => {
    // console.log('[ProcessMonitoring] event: ', e)
    if (viewerContent === e.data[e.colDef['field']]) {
      setViewerContent(undefined)
    } else {
      setViewerContent(e.data[e.colDef['field']])
    }
    console.log('[ProcessMonitoring] viewerContent: ', viewerContent)
  }

  const stringifyObjects = (arr) => {
    Object.keys(arr[0]).map((key) => {
      if (typeof arr[0][key] === 'object') {
        arr.map((el) => {
          el[key] = JSON.stringify(el[key], null, 2)
        })
      }
    })
  }

  const getGridData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        // console.log('[Process Monitoring ] response: ', response)
        stringifyObjects(response.data)
        // console.log('[Process Monitoring ] modified data: ', response)
        setGridData(response.data)
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
