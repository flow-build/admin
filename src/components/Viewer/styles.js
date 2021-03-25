import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    align-content: center;
    align-items: center;
    background: silver;
    border: 2px solid black;
    color: ${theme.colors.black};
    /* flex: 1; */
    height: 500px;
    justify-content: center;
    margin-left: 5px;
    max-width: 400px;
    overflow: auto;
    resize: horizontal;
    width: 250px;
  `}
`
export const Line = styled.pre`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    padding: 10px 10px;
  `}
`
