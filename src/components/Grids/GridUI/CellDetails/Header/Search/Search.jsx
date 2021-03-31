import React, { useCallback, useEffect, useState } from 'react'
import { VscCaseSensitive, VscWholeWord, VscKey } from 'react-icons/vsc'

import * as C from 'components'
import PropTypes from 'prop-types'
import * as UTIL from 'utils'

import * as S from './styles'

const Search = ({ currentCell, setContent }) => {
  const [searched, setSearched] = useState('')
  const [isSearchedByKey, setIsSearchedByKey] = useState(false)
  const [isCaseSensitive, setIsCaseSensitive] = useState(false)
  const [isWholeWord, setIsWholeWord] = useState(false)

  const handleSearch = useCallback(
    (content, setContent) => {
      let searchedContent = UTIL.isString(content)
        ? content
        : UTIL.Components.CellDetails.formatJsonToString(content)

      if (searched && !UTIL.isString(content)) {
        searchedContent = UTIL.Components.CellDetails.filterContent(
          searched,
          isSearchedByKey,
          isCaseSensitive,
          isWholeWord,
          content
        )
      }

      setContent(searchedContent)
    },
    [searched, isSearchedByKey, isCaseSensitive, isWholeWord]
  )

  useEffect(() => {
    handleSearch(currentCell, setContent)
  }, [handleSearch, setContent, currentCell])

  return (
    <S.Container>
      <S.Input
        type="text"
        placeholder="Pesquisar..."
        onChange={(e) => setSearched(e.target.value)}
      />

      <C.UI.Tooltip title="Procurar apenas pela chave" placement="top" hasArrow>
        <S.SearchByKeyToggle
          isActive={isSearchedByKey}
          onClick={() => setIsSearchedByKey((prev) => !prev)}
        >
          <VscKey />
        </S.SearchByKeyToggle>
      </C.UI.Tooltip>

      <C.UI.Tooltip title="Case sensitive" placement="top" hasArrow>
        <S.CaseSensitiveToggle
          isActive={isCaseSensitive}
          onClick={() => setIsCaseSensitive((prev) => !prev)}
        >
          <VscCaseSensitive />
        </S.CaseSensitiveToggle>
      </C.UI.Tooltip>

      <C.UI.Tooltip title="Match whole word" placement="top" hasArrow>
        <S.WholeWordToggle
          isActive={isWholeWord}
          onClick={() => setIsWholeWord((prev) => !prev)}
        >
          <VscWholeWord />
        </S.WholeWordToggle>
      </C.UI.Tooltip>
    </S.Container>
  )
}

Search.propTypes = {
  currentCell: PropTypes.any,
  setContent: PropTypes.func.isRequired,
}

export default Search
