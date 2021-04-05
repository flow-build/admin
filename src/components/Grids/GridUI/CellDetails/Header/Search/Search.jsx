import React, { useCallback, useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import * as UTIL from 'utils/components'

import Input from './Input/Input'
import Result from './Result/Result'
import * as S from './styles'

const Search = ({ currentCell, setContent }) => {
  const [searched, setSearched] = useState('')
  const [searchParams, setSearchParams] = useState({})
  const [hasSearchReloaded, setHasSearchReloaded] = useState(false)

  const handleSearch = useCallback(
    (content, setContent) => {
      let searchedContent = UTIL.isString(content)
        ? content
        : UTIL.CellDetails.formatJsonToString(content)

      if (searched) {
        searchedContent = UTIL.CellDetails.filterContent(
          searched,
          searchParams,
          content
        )
      }

      setContent(searchedContent)
    },
    [searched, searchParams]
  )

  useEffect(() => {
    handleSearch(currentCell, setContent)
  }, [handleSearch, setContent, currentCell])

  useEffect(() => {
    setHasSearchReloaded((prev) => !prev)
  }, [currentCell, searched, searchParams])

  return (
    <S.Container>
      <Input
        setSearched={setSearched}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />

      <Result hasSearchReloaded={hasSearchReloaded} />
    </S.Container>
  )
}

Search.propTypes = {
  currentCell: PropTypes.any,
  setContent: PropTypes.func.isRequired,
}

export default Search
