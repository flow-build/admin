import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import axios from 'axios'
import Dropdown from 'components/Dropdown'
import GeneralStatsGrid from 'components/GeneralStatsGrid'
import Layout from 'components/Layout'
// import TextField from 'components/TextField'
import PropTypes from 'prop-types'

import * as S from './styles'

const GeneralStats = ({ className, ...props }) => {
  const [gridData, setGridData] = useState('')

  const history = useHistory()

  const redirectPageHandler = () => {
    history.push('edit_process')
  }

  const stringifyObjects = (arr) => {
    Object.keys(arr[0]).map((key) => {
      if (typeof arr[0][key] === 'object') {
        arr.map((el) => {
          el[key] = JSON.stringify(el[key])
        })
      }
    })
  }

  const getGridData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        stringifyObjects(response.data)
        setGridData(response.data)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => getGridData(), [])

  const options = [
    { value: '1', text: 'option1' },
    { value: '2', text: 'option2' }
  ]
  return (
    <Layout>
      <h1>General Stats</h1>
      {/* <TextField name="name" placeholder="Numero" type="date" /> */}
      <Dropdown label={'dropdown menu'} options={options} />
      <S.Wrapper className={className} {...props}>
        <GeneralStatsGrid
          rowData={gridData}
          cellClicked={() => redirectPageHandler()}
        />
      </S.Wrapper>
    </Layout>
  )
}

GeneralStats.propTypes = {
  className: PropTypes.string
}

GeneralStats.defaultProps = {
  className: 'generalstats'
}

export default GeneralStats
