import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({
    width,
    margin,
    padding,
    height,
    display,
    childrenPosition,
    color,
    fontSize,
    fontWeight,
    colorOnHover
  }) => css`
    width: ${width || 'auto'};
    & a {
      align-items: center;
      all: unset;
      color: ${color || '#000'};
      cursor: pointer;
      display: ${display || 'flex'};
      font-size: ${fontSize || '14px'};
      font-weight: ${fontWeight || '500'};
      height: ${height || 'auto'};
      justify-content: ${() => {
        switch (childrenPosition) {
          case 'left':
            return 'flex-start'
          case 'right':
            return 'flex-end'
          default:
            return 'center'
        }
      }};
      margin: ${margin || '0'};
      padding: ${padding || '0'};
      width: ${width || 'auto'};
      &:hover {
        ${colorOnHover && `color: ${colorOnHover}`};
      }
    }
  `}
`

export const LinkAnchor = styled.a``

export const Title = styled.p``
