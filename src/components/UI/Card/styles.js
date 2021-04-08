import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: lightgray;
    border: solid 2px ${theme.colors.black};
    /* color: ${theme.colors.black}; */
    overflow-y: auto;
    width: 400px;
  `}
`
export const CardP = styled(Container)`
  ${({ theme }) => css`
    background-color: lightgray;
    color: ${theme.colors.black};
    max-height: 140px;
    min-height: 100px;
    overflow-y: auto;
    width: 600px;
  `}
`

export const CardM = styled(Container)`
  ${({ theme }) => css`
    background-color: lightgray;
    color: ${theme.colors.black};
    max-height: 140px;
    min-height: 100px;
    overflow-y: auto;
    width: 400px;
  `}
`
