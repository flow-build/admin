import React, { useEffect, useState } from 'react'
import { VscCaseSensitive, VscWholeWord } from 'react-icons/vsc'

import * as C from 'components'
import PropTypes from 'prop-types'
import * as UTIL from 'utils'

import * as S from './styles'

const Search = ({ setContent, currentCell }) => {
  const [keyword, setKeyword] = useState('')
  const [isCaseSensitive, setIsCaseSensitive] = useState(false)
  const [isWholeWord, setIsWholeWord] = useState(false)

  const filterByWholeWord = (keyword, isCaseSensitive, content) => {
    console.log('content', content)
    return []
  }

  const filterBySubstring = (keyword, isCaseSensitive, content) => {
    const contentFormatted = JSON.stringify(content, undefined, 2)
    const Contentlines = contentFormatted.match(/[^\r\n]+/g)

    return Contentlines?.filter((line) => {
      if (isCaseSensitive) {
        return line?.includes(keyword)
      }

      return line?.toLowerCase()?.includes(keyword?.toLowerCase())
    })
  }

  const filterContent = (keyword, isCaseSensitive, isWholeWord, content) => {
    let filteredContent = []

    switch (isWholeWord) {
      case true:
        filteredContent = filterByWholeWord(keyword, isCaseSensitive, content)
        break
      default:
        filteredContent = filterBySubstring(keyword, isCaseSensitive, content)
        break
    }

    let result = filteredContent?.length
      ? ''
      : 'Nenhuma combinação foi encontrada'

    filteredContent?.forEach((line) => {
      result += `${line?.replace(/,\s*$/, '')?.trim()}\n`
    })

    return result
  }

  const handleSearch = (
    keyword,
    isCaseSensitive,
    isWholeWord,
    setContent,
    content
  ) => {
    let searchedContent = UTIL.isString(content)
      ? content
      : JSON.stringify(content, undefined, 2)

    if (keyword && !UTIL.isString(content)) {
      searchedContent = filterContent(
        keyword,
        isCaseSensitive,
        isWholeWord,
        content
      )
    }

    setContent(searchedContent)
  }

  useEffect(() => {
    handleSearch(keyword, isCaseSensitive, isWholeWord, setContent, currentCell)
  }, [keyword, isCaseSensitive, isWholeWord, setContent, currentCell])

  console.log('isCaseSensitive', isCaseSensitive)
  console.log('isWholeWord', isWholeWord)

  return (
    <S.Container>
      <S.Input
        type="text"
        placeholder="Pesquisar..."
        onChange={(e) => setKeyword(e.target.value)}
      />

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
