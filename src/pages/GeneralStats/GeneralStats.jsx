import React, { useState, useEffect } from 'react'

import * as C from 'components'
import PropTypes from 'prop-types'
import * as API from 'services/Loaders'
import * as UTIL from 'utils'

import * as S from './styles'

const GeneralStats = ({ className, ...props }) => {
  const [generalStatsData, setGeneralStatsData] = useState('')
  const [searchString, setSearchString] = useState('')
  const [generalStatsDataDefault, setGeneralStatsDataDefault] = useState('')

  const loadData = async () => {
    const generalStatsResponse = await API.loadGeneralStats()
    UTIL.stringifyObjects(generalStatsResponse)
    setGeneralStatsData(generalStatsResponse)
    setGeneralStatsDataDefault(generalStatsResponse)
  }

  const onSearchbarChangeHandler = (enteredText) => {
    setSearchString(enteredText)

    // console.log('[GeneralStats] searchString: ', searchString)
    // console.log('[GeneralStats] e.target.value: ', enteredText)

    const searchStringRegex = new RegExp(enteredText, 'i')
    if (enteredText !== '') {
      setGeneralStatsData(
        [...generalStatsDataDefault].filter(
          (el) =>
            searchStringRegex.test(el.id) ||
            searchStringRegex.test(el.name) ||
            searchStringRegex.test(el.username) ||
            searchStringRegex.test(el.address)
        )
      )
    } else {
      setGeneralStatsData(generalStatsDataDefault)
    }
  }

  const handleDropdownChange = (value) => {
    // console.log('[GeneralStats] value: ', value)
    const searchStringRegex = new RegExp(options[value - 1]?.text, 'i')
    if (options[value - 1]) {
      setGeneralStatsData(
        [...generalStatsDataDefault].filter(
          (el) =>
            searchStringRegex.test(el.id) ||
            searchStringRegex.test(el.name) ||
            searchStringRegex.test(el.username) ||
            searchStringRegex.test(el.address)
        )
      )
    } else {
      setGeneralStatsData(generalStatsDataDefault)
    }
  }

  useEffect(() => loadData(), [])

  const options = [
    { value: '1', text: 'Bret' },
    { value: '2', text: 'Delphine' }
  ]

  return (
    <S.Container>
      <h1>General Stats</h1>
      <C.UI.TextField
        name="name"
        placeholder="Numero"
        // type="text"
        onChange={(e) => onSearchbarChangeHandler(e.target.value)}
        value={searchString}
      />
      <C.UI.Dropdown
        label={'Dropdown menu'}
        options={options}
        onChange={(e) => handleDropdownChange(e.target.value)}
      />
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
