import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    border: 1px solid #cccccc;
    color: ${theme.colors.black};
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    overflow-x: hidden;
    width: 500px;

    @media screen and (max-width: 1200px) {
      width: 100%;
    }
  `}
`

export const Content = styled.p`
  background: #fff;
  height: 100%;
  padding: 15px;
  white-space: pre-line;
  width: 100%;
`
