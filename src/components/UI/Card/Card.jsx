import React, { useEffect, useState } from 'react'
import { DiStreamline } from 'react-icons/di'

import PropTypes from 'prop-types'
import * as API from 'services/Loaders'

import * as S from './styles'

const Card = (...rest) => {
  console.log('rest: ', rest)
  const { className, type, ...props } = rest
  console.log('[Card] type: ', type)

  const [cardData, setCardData] = useState(null)
  const dictionary = {
    apiName: {
      icon: <DiStreamline />,
      label: 'apiLabel',
    },
  }

  const loadData = async () => {
    const cardDataResponse = await API.loadCardData()
    setCardData(cardDataResponse)
  }

  useEffect(() => {
    loadData()
  }, [])

  console.log('[Card] cardData: ', cardData)

  let card = null
  switch (type) {
    case 'P':
      card = (
        <S.CardP>
          <p>Ícone: {dictionary.apiName.icon}</p>
          <p>Título: {dictionary.apiName.label}</p>
        </S.CardP>
      )
      break
    case 'M':
      card = (
        <S.CardM>
          <p>Ícone: {dictionary.apiName.icon}</p>
          <p>Título: {dictionary.apiName.label}</p>
          {/* <p>
            Descrição: {cardData ? cardData[0].body : dictionary.apiName.label}
          </p> */}
          <p>Description: anything</p>
        </S.CardM>
      )
      break
    default:
      card = (
        <S.CardP>
          <p>Ícone: {dictionary.apiName.icon}</p>
          <p>Título: {dictionary.apiName.label}</p>
        </S.CardP>
      )
  }

  return (
    <S.Container className={className} {...props}>
      {card}
    </S.Container>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
}

export default Card
