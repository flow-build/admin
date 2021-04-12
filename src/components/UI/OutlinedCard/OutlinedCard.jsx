import React, { useEffect, useState } from 'react'
import { DiStreamline } from 'react-icons/di'

import PropTypes from 'prop-types'
import * as API from 'services/Loaders'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import * as S from './styles'

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 500,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

const OutlinedCard = ({ type }) => {
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

  const classes = useStyles()

  let card = null
  switch (type) {
    case 'P':
      card = (
        <S.Container>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {dictionary.apiName.icon}
              </Typography>
              <Typography variant="h5" component="h2">
                {dictionary.apiName.label}
              </Typography>
              <br />
            </CardContent>
          </Card>
        </S.Container>
      )
      break
    case 'M':
      card = (
        <S.Container>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {dictionary.apiName.icon}
              </Typography>
              <Typography variant="h5" component="h2">
                {dictionary.apiName.label}
              </Typography>
              <br />
              <Typography variant="body2" component="p">
                Descrição:{' '}
                {cardData ? cardData[0].body : dictionary.apiName.label}
              </Typography>
            </CardContent>
          </Card>
        </S.Container>
      )
      break
    default:
      card = (
        <S.Container>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {dictionary.apiName.icon}
              </Typography>
              <Typography variant="h5" component="h2">
                {dictionary.apiName.label}
              </Typography>
              <br />
              {/* <Typography variant="body2" component="p">
                Descrição:{' '}
                {cardData ? cardData[0].body : dictionary.apiName.label}
              </Typography> */}
            </CardContent>
          </Card>
        </S.Container>
      )
  }

  return <S.Container>{card}</S.Container>
}

OutlinedCard.propTypes = {
  type: PropTypes.string,
}

export default OutlinedCard
