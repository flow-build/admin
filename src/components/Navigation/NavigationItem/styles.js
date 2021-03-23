import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    box-sizing: border-box;
    color: ${theme.colors.black};
    display: block;
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;

    & :hover {
      background-color: gray;
      border-bottom: 4px solid #40a4c8;
      color: white;
    }
  `}
`

// export const NavItema = styled.a`
//   ${({ theme }) => css`
//     border-bottom: 4px solid transparent;
//     box-sizing: border-box;
//     color: ${theme.colors.white};
//     height: 100%;
//     padding: 16px 10px;
//     text-decoration: none;
//   `}
// `
