import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    height: 100%;
    -ms-overflow-style: scrollbar;
  }

  body {
    ${({ theme }) => css`
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      height: 100%;
    `}
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${({ theme }) => css`
      font-family: ${theme.font.family};
      font-weight: ${theme.font.weight.bold};
      line-height: ${theme.font.height.heading};
    `}
  }

  b,
  strong {
    ${({ theme }) => css`
      font-weight: ${theme.font.weight.bold};
    `}
  }

  p {
    ${({ theme }) => css`
      line-height: ${theme.font.height.medium};
    `}
  }

  input ,
  select {
    appearance: none;
  }

  ul {
    list-style: none;
  }


  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: 1px solid #D4DCDF;
    box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`
