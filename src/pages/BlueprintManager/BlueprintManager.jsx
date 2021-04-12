import React from 'react'

import * as C from 'components'

import { Grid } from '@material-ui/core'

import * as S from './styles'

const BlueprintManager = () => {
  return (
    <S.Container>
      <h1>BlueprintManager</h1>
      <Grid container justify="center" spacing={1}>
        <Grid item xs={12} sm={6} md={4}>
          <S.Card>
            <C.UI.OutlinedCard type="P" />
          </S.Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <S.Card>
            <C.UI.OutlinedCard type="P" />
          </S.Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <S.Card>
            <C.UI.OutlinedCard type="P" />
          </S.Card>
        </Grid>
        <Grid item xs={9} sm={4} md={3}>
          <S.Card>
            <C.UI.OutlinedCard type="M" />
          </S.Card>
        </Grid>
        <Grid item xs={9} sm={4} md={3}>
          <S.Card>
            <C.UI.OutlinedCard type="M" />
          </S.Card>
        </Grid>
        <Grid item xs={9} sm={4} md={3}>
          <S.Card>
            <C.UI.OutlinedCard type="M" />
          </S.Card>
        </Grid>
        <Grid item xs={9} sm={4} md={3}>
          <S.Card>
            <C.UI.OutlinedCard type="M" />
          </S.Card>
        </Grid>
      </Grid>
    </S.Container>
  )
}

export default BlueprintManager
