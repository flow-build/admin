import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    animation: ease-in;
    /* background-color: lightgray; */
    border: solid 1px ${theme.colors.gray};
    box-shadow: 0px 0px 15px -5px;
    color: ${theme.colors.black};
    overflow: hidden;
    transition: 0.3s;

    &:hover {
      box-shadow: 0px 0px 15px 0px;
      transform: scale(1.02);
    }
  `}
`
