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

  const addQueryParam = (key, value) => {
    const pathname = location.pathname
    const searchParams = new URLSearchParams(location.search)
    searchParams.set(key, value)
    history.push({
      pathname: pathname,
      search: searchParams.toString(),
    })
  }

  const loadData = async (searchParam) => {
    const generalStatsResponse = await API.loadGeneralStats(searchParam)
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
      addQueryParam('search', enteredText)
    }
  }

  const onDropdownChangeHandler = (value) => {
    if (options[value - 1]) {
      addQueryParam('username', options[value - 1].text)
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

    if (dates.startDate?._d && dates.endDate?._d) {
      addQueryParam('start', JSON.stringify(dates.startDate?._d))
      addQueryParam('end', JSON.stringify(dates.endDate?._d))
    }
  }

  const onSingleDateChangeHandler = (date) => {
    setState((prevState) => {
      return {
        ...prevState,
        singleDate: date.date,
      }
    })

    addQueryParam('createdAt', JSON.stringify(date.date._d))
  }

  useEffect(() => {
    loadData(location.search)
  }, [location.search])

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
