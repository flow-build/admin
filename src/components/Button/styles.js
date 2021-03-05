import styled, { css } from 'styled-components'

const wrapperModifiers = {
  primary: (theme) => css`
    background: ${theme.colors.primary.base};
    color: ${theme.colors.white};

    &:hover {
      background: ${theme.colors.primary.dark};
    }
  `,
  secondary: (theme) => css`
    background: ${theme.colors.secondary.base};
    color: ${theme.colors.white};

    &:hover {
      background: ${theme.colors.secondary.dark};
    }
  `,
  small: (theme) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 3rem;
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.small};
    height: 4rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme) => css`
    font-size: ${theme.font.sizes.medium};
    height: 5rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
}

export const Wrapper = styled.button`
  ${({ theme, size, fullWidth, variant, hasIcon, disabled }) => css`
    align-items: center;
    border: 0;
    border-radius: ${theme.border.radius};
    cursor: pointer;
    display: inline-flex;
    font-family: ${theme.font.family};
    font-weight: ${theme.font.weight.bold};
    justify-content: center;
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    transition: ${theme.transition};

    ${!!size && wrapperModifiers[size](theme)};
    ${!!variant && wrapperModifiers[variant](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${disabled && wrapperModifiers.disabled()};
  `}
`
