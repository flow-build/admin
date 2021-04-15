import React, { useState, useEffect } from 'react'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { DateRangePicker, SingleDatePicker } from 'react-dates'
import { useHistory } from 'react-router'

import * as C from 'components'
import * as API from 'services/Loaders'
import * as UTIL from 'utils/components/utils'

import * as S from './styles'

const GeneralStats = () => {
  const [state, setState] = useState({
    generalStatsData: [],
    searchString: '',
    startDate: null,
    endDate: null,
    focusedInput: null,
    singleDate: null,
    focused: false,
  })

  const options = [
    { value: '1', text: 'Bret' },
    { value: '2', text: 'Delphine' },
  ]

  const history = useHistory()

  const loadData = async (URLSearchParam) => {
    const generalStatsResponse = await API.loadGeneralStats(URLSearchParam)
    UTIL.stringifyObjects(generalStatsResponse)
    setState((prevState) => {
      return {
        ...prevState,
        generalStatsData: generalStatsResponse,
      }
    })
  }

  const onSearchbarChangeHandler = (enteredText) => {
    setState((prevState) => {
      return {
        ...prevState,
        searchString: enteredText,
      }
    })

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
    setState((prevState) => {
      return {
        ...prevState,
        startDate: dates.startDate,
        endDate: dates.endDate,
      }
    })

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
    setState((prevState) => {
      return {
        ...prevState,
        singleDate: date.date,
      }
    })
    const paramsString = `createdAt=${JSON.stringify(date.date._d)}`
    const searchParams = new URLSearchParams(paramsString)
    loadData(searchParams)
    history.push(`general_stats?${paramsString}`)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <S.Container>
      <h1>General Stats</h1>
      <C.UI.TextField
        name="name"
        placeholder="Searchbar"
        type="text"
        onChange={(e) => onSearchbarChangeHandler(e.target.value)}
        value={state.searchString}
      />
      <C.UI.Dropdown
        label={'Dropdown menu'}
        options={options}
        onChange={(e) => onDropdownChangeHandler(e.target.value)}
      />
      <DateRangePicker
        startDateId="startDate"
        endDateId="endDate"
        startDate={state.startDate}
        endDate={state.endDate}
        onDatesChange={({ startDate, endDate }) => {
          onDatesChangeHandler({ startDate, endDate })
        }}
        focusedInput={state.focusedInput}
        onFocusChange={(focusedInput) =>
          setState((prevState) => {
            return {
              ...prevState,
              focusedInput: focusedInput,
            }
          })
        }
        isOutsideRange={() => false}
      />
      <SingleDatePicker
        date={state.singleDate}
        onDateChange={(date) => onSingleDateChangeHandler({ date })}
        focused={state.focused}
        onFocusChange={({ focused }) =>
          setState((prevState) => {
            return {
              ...prevState,
              focused: focused,
            }
          })
        }
        id="unique_id"
        isOutsideRange={() => false}
      />
      <S.Content>
        <C.GRID.GeneralStatsGrid rowData={state.generalStatsData} />
      </S.Content>
    </S.Container>
  )
}

export default GeneralStats
