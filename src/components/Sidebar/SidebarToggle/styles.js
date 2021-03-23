import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background: #15171c;
    color: ${theme.colors.black};
    display: flex;
    height: 50px;
    justify-content: flex-start;
    width: 50px;
  `}
`

export const NavIcon = styled.div`
  align-items: center;
  display: flex;
  font-size: 2rem;
  height: 50px;
  justify-content: center;
  width: 50px;
`
