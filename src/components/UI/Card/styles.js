import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    animation: ease-in;
    background-color: lightgray;
    border: solid 1px ${theme.colors.black};
    box-shadow: 0px 0px 15px -5px;
    /* color: ${theme.colors.black}; */
    overflow: hidden;
    transition: 0.3s;

    &:hover {
      box-shadow: 0px 0px 15px 0px;
      transform: scale(1.02);
    }
  `}
`
export const CardP = styled(Container)`
  ${({ theme }) => css`
    /* align-items: center; */
    background-color: lightgray;
    color: ${theme.colors.black};
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: 150px;
    max-width: 500px;
    min-height: 100px;
    overflow-y: auto;
    width: 483px;
  `}
`

export const CardM = styled(Container)`
  ${({ theme }) => css`
    /* align-items: center; */
    background-color: lightgray;
    color: ${theme.colors.black};
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: 150px;
    max-width: 400px;
    min-height: 100px;
    overflow-y: auto;
    width: 363px;
  `}
`

export const CardContent = styled.p`
  ${({ theme }) => css`
    align-items: center;
    color: ${theme.colors.black};
    font-size: 0.8em;
    margin: 1rem;
    margin-top: 0.5rem;
  `}
`
