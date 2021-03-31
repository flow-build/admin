import React from 'react'
import { VscCaseSensitive, VscWholeWord, VscKey } from 'react-icons/vsc'

import * as C from 'components'
import PropTypes from 'prop-types'
import { SEARCH_PARAMS } from 'utils/components/cellDetails/cellDetails'

import * as S from './styles'

const Input = ({ setSearched, searchParams, setSearchParams }) => {
  const toggleParamsUpdate = (event, paramKey) => {
    event.preventDefault()
    const newParams = { ...searchParams }
    newParams[paramKey] = !newParams[paramKey]
    setSearchParams({ ...newParams })
  }

  return (
    <S.Container>
      <S.Input
        type="text"
        placeholder="Pesquisar..."
        onChange={(e) => setSearched(e.target.value)}
      />
      <C.UI.Tooltip title="Procurar apenas pela chave" placement="top" hasArrow>
        <S.SearchByKeyToggle
          isActive={searchParams[SEARCH_PARAMS.isSearchedByKey]}
          onClick={(e) => toggleParamsUpdate(e, SEARCH_PARAMS.isSearchedByKey)}
        >
          <VscKey />
        </S.SearchByKeyToggle>
      </C.UI.Tooltip>
      <C.UI.Tooltip title="Case sensitive" placement="top" hasArrow>
        <S.CaseSensitiveToggle
          isActive={searchParams[SEARCH_PARAMS.isCaseSensitive]}
          onClick={(e) => toggleParamsUpdate(e, SEARCH_PARAMS.isCaseSensitive)}
        >
          <VscCaseSensitive />
        </S.CaseSensitiveToggle>
      </C.UI.Tooltip>
      <C.UI.Tooltip title="Match whole word" placement="top" hasArrow>
        <S.WholeWordToggle
          isActive={searchParams[SEARCH_PARAMS.isWholeWord]}
          onClick={(e) => toggleParamsUpdate(e, SEARCH_PARAMS.isWholeWord)}
        >
          <VscWholeWord />
        </S.WholeWordToggle>
      </C.UI.Tooltip>
    </S.Container>
  )
}

Input.propTypes = {
  setSearched: PropTypes.func.isRequired,
  searchParams: PropTypes.object.isRequired,
  setSearchParams: PropTypes.func.isRequired,
}

export default Input
