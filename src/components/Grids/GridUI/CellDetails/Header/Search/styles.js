import styled, { css } from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  width: 400px;
`
export const Input = styled.input`
  border: 1px solid #e6ecf5;
  border-radius: 3px;
  flex: 1;
  outline: 0;
  padding: 9px 80px 9px 7px;
`

export const Icon = styled.div`
  ${({ isActive }) => css`
    align-items: center;
    border: ${isActive ? '1px solid #8457ef' : '0.5px solid #d0d0d0'};
    border-radius: 3px;
    color: #333;
    cursor: pointer;
    display: flex;
    font-size: 21px;
    justify-content: center;
    padding: 2px 5px;
    position: absolute;
  `}
`

export const CaseSensitiveToggle = styled(Icon)`
  right: 40.1px;
`

export const WholeWordToggle = styled(Icon)`
  right: 4px;
`
