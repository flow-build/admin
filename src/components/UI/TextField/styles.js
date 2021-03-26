import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.white};
    border: 0.2rem solid;
    border-color: ${theme.colors.gray};
    border-radius: 0.2rem;
    display: flex;
    padding: 0 ${theme.spacings.xsmall};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    background: transparent;
    border: 0;
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    outline: none;
    padding: ${theme.spacings.xxsmall} 0;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    cursor: pointer;
    font-size: ${theme.font.sizes.small};
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

const wrapperModifiers = {
  error: (theme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }

    ${Label} {
      color: ${theme.colors.red};
    }
  `,
  disabled: (theme) => css`
    ${Label},
    ${Input} {
      color: ${theme.colors.gray};
      cursor: not-allowed;

      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div`
  ${({ theme, error, disabled }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`
