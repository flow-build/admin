import React, { useState, useEffect } from 'react'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { DateRangePicker, SingleDatePicker } from 'react-dates'
import { useHistory } from 'react-router'

import * as C from 'components'
import PropTypes from 'prop-types'
import * as API from 'services/Loaders'
import * as UTIL from 'utils/components/utils'

import * as S from './styles'

const GeneralStats = ({ className, ...props }) => {
  const [generalStatsData, setGeneralStatsData] = useState('')
  const [searchString, setSearchString] = useState('')

  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [focusedInput, setFocusedInput] = useState(null)

  const [singleDate, setSingleDate] = useState(null)
  const [focused, setFocused] = useState(false)

  const options = [
    { value: '1', text: 'Bret' },
    { value: '2', text: 'Delphine' },
  ]

  const history = useHistory()

  const loadData = async (URLSearchParam) => {
    const generalStatsResponse = await API.loadGeneralStats(URLSearchParam)
    UTIL.stringifyObjects(generalStatsResponse)
    setGeneralStatsData(generalStatsResponse)
  }

  const onSearchbarChangeHandler = (enteredText) => {
    setSearchString(enteredText)

    if (enteredText !== '') {
      const paramsString = `search=${enteredText}`
      const searchParams = new URLSearchParams(paramsString)
      loadData(searchParams)
      history.push(`general_stats?${paramsString}`)
    }
  }

  const onDropdownChangeHandler = (value) => {
    if (options[value - 1]) {
      const paramsString = `username=${options[value - 1].text}`
      const searchParams = new URLSearchParams(paramsString)
      loadData(searchParams)
      history.push(`general_stats?${paramsString}`)
    }
  }

  const onDatesChangeHandler = (dates) => {
    setStartDate(dates.startDate)
    setEndDate(dates.endDate)
    const paramsString = `createdAt?start=${JSON.stringify(
      dates.startDate?._d
    )}&end=${JSON.stringify(dates.endDate?._d)}`
    const searchParams = new URLSearchParams(paramsString)
    loadData(searchParams)

    if (dates.startDate?._d && dates.endDate?._d) {
      history.push(`general_stats?${paramsString}`)
    }
  }

  const onSingleDateChangeHandler = (date) => {
    setSingleDate(date.date)
    const paramsString = `createdAt=${JSON.stringify(date.date._d)}`
    const searchParams = new URLSearchParams(paramsString)
    loadData(searchParams)
    history.push(`general_stats?${paramsString}`)
  }

  useEffect(() => {
    loadData()
    history.replace('/monitoring/general_stats', null)
  }, [])

  return (
    <S.Container>
      <h1>General Stats</h1>
      <C.UI.TextField
        name="name"
        placeholder="Searchbar"
        type="text"
        onChange={(e) => onSearchbarChangeHandler(e.target.value)}
        value={searchString}
      />
      <C.UI.Dropdown
        label={'Dropdown menu'}
        options={options}
        onChange={(e) => onDropdownChangeHandler(e.target.value)}
      />
      <DateRangePicker
        startDateId="startDate"
        endDateId="endDate"
        startDate={startDate}
        endDate={endDate}
        onDatesChange={({ startDate, endDate }) => {
          onDatesChangeHandler({ startDate, endDate })
        }}
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
        isOutsideRange={() => false}
      />
      <SingleDatePicker
        date={singleDate}
        onDateChange={(date) => onSingleDateChangeHandler({ date })}
        focused={focused}
        onFocusChange={({ focused }) => setFocused(focused)}
        id="unique_id"
        isOutsideRange={() => false}
      />
      <S.Content className={className} {...props}>
        <C.GRID.GeneralStatsGrid rowData={generalStatsData} />
      </S.Content>
    </S.Container>
  )
}

GeneralStats.propTypes = {
  className: PropTypes.string,
}

GeneralStats.defaultProps = {
  className: 'generalstats',
}

export default GeneralStats
