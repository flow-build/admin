import React, { useEffect, useState } from 'react'
import { VscArrowUp, VscArrowDown } from 'react-icons/vsc'

import PropTypes from 'prop-types'
import {
  SEARCHED_ID,
  handleOnFocusID,
} from 'utils/components/cellDetails/cellDetails'

import * as S from './styles'

const Result = ({ hasSearchReloaded }) => {
  const [searchedElements, setSearchedElements] = useState([])
  const [currentOnFocus, setCurrentOnFocus] = useState(null)

  const increaseCurrentOnFocus = (event) => {
    event.preventDefault()

    if (!Number.isInteger(currentOnFocus)) return

    if (currentOnFocus < searchedElements?.length - 1) {
      setCurrentOnFocus((prev) => ++prev)
    } else {
      setCurrentOnFocus(0)
    }
  }

  const decreaseCurrentOnFocus = (event) => {
    event.preventDefault()
    if (!Number.isInteger(currentOnFocus)) return

    if (currentOnFocus > 0) {
      setCurrentOnFocus((prev) => --prev)
    } else {
      setCurrentOnFocus(searchedElements.length - 1)
    }
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      const searchedElements = document.querySelectorAll(`#${SEARCHED_ID}`)
      setSearchedElements(searchedElements)
      setCurrentOnFocus(0)
    }, 500)

    return () => clearTimeout(delay)
  }, [hasSearchReloaded])

  useEffect(() => {
    const currentElement = searchedElements[currentOnFocus]

    if (currentElement) {
      handleOnFocusID(currentOnFocus)
      currentElement.scrollIntoView({ block: 'center' })
    }
  }, [currentOnFocus, searchedElements])

  return (
    <S.Container>
      <S.Title>
        {searchedElements?.length
          ? `Resultados: ${currentOnFocus + 1}/${searchedElements.length}`
          : 'Nenhum resultado'}
      </S.Title>
      <S.Icons>
        <VscArrowDown onClick={increaseCurrentOnFocus} />
        <VscArrowUp onClick={decreaseCurrentOnFocus} />
      </S.Icons>
    </S.Container>
  )
}

Result.propTypes = {
  hasSearchReloaded: PropTypes.bool.isRequired,
}

export default Result
