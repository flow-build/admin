import React, { useState, useEffect } from 'react'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { DateRangePicker, SingleDatePicker } from 'react-dates'

import * as C from 'components'
import PropTypes from 'prop-types'
import * as API from 'services/Loaders'
import * as UTIL from 'utils'

import * as S from './styles'

const GeneralStats = ({ className, ...props }) => {
  const [generalStatsData, setGeneralStatsData] = useState('')
  const [searchString, setSearchString] = useState('')
  const [generalStatsDataDefault, setGeneralStatsDataDefault] = useState('')

  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [focusedInput, setFocusedInput] = useState(null)

  const [singleDate, setSingleDate] = useState(null)
  const [focused, setFocused] = useState(false)

  const options = [
    { value: '1', text: 'Bret' },
    { value: '2', text: 'Delphine' }
  ]

  const loadData = async () => {
    const generalStatsResponse = await API.loadGeneralStats()
    UTIL.stringifyObjects(generalStatsResponse)
    setGeneralStatsData(generalStatsResponse)
    setGeneralStatsDataDefault(generalStatsResponse)
    generalStatsResponse.map((el) => (el.createdAt = new Date()))
  }

  const onSearchbarChangeHandler = (enteredText) => {
    setSearchString(enteredText)
    const searchStringRegex = new RegExp(enteredText, 'i')
    const keys = Object.keys(generalStatsDataDefault[0])

    if (enteredText !== '') {
      setGeneralStatsData(
        [...generalStatsDataDefault].filter(
          (el) =>
            searchStringRegex.test(keys.map((key) => el[key])) ||
            searchStringRegex.test(JSON.stringify(el.createdAt))
        )
      )
    } else {
      setGeneralStatsData(generalStatsDataDefault)
    }
  }

  const onDropdownChangeHandler = (value) => {
    const searchStringRegex = new RegExp(options[value - 1]?.text, 'i')
    const keys = Object.keys(generalStatsDataDefault[0])
    if (options[value - 1]) {
      setGeneralStatsData(
        [...generalStatsDataDefault].filter((el) =>
          searchStringRegex.test(keys.map((key) => el[key]))
        )
      )
    } else {
      setGeneralStatsData(generalStatsDataDefault)
    }
  }

  const onDatesChangeHandler = (dates) => {
    setStartDate(dates.startDate)
    setEndDate(dates.endDate)
    if (dates.endDate) {
      setGeneralStatsData(
        [...generalStatsDataDefault].filter((el) => {
          return UTIL.isDateBetweenDays(
            dates.startDate?._d,
            dates.endDate?._d,
            el.createdAt
          )
        })
      )
    }
  }

  const onSingleDateChangeHandler = (date) => {
    setSingleDate(date.date)

    if (date.date) {
      setGeneralStatsData(
        [...generalStatsDataDefault].filter((el) => {
          return UTIL.areDatesOnSameDay(date.date?._d, el.createdAt)
        })
      )
    }
  }

  useEffect(() => loadData(), [])

  return (
    <S.Container>
      <h1>General Stats</h1>
      <C.UI.TextField
        name="name"
        placeholder="Numero"
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
  className: PropTypes.string
}

GeneralStats.defaultProps = {
  className: 'generalstats'
}

export default GeneralStats
