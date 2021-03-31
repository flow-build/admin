import styled, { css } from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  width: 440px;
`
export const Input = styled.input`
  border: 1px solid #e6ecf5;
  border-radius: 3px;
  flex: 1;
  padding: 9px 170px 9px 7px;
`

export const Icon = styled.div`
  ${({ isActive }) => css`
    align-items: center;
    border: 1px solid ${isActive ? '#8457ef' : '#d0d0d0'};
    border-radius: 3px;
    color: #333;
    cursor: pointer;
    display: flex;
    font-size: 18px;
    justify-content: center;
    padding: 2px 5px;
    position: absolute;
  `}
`

export const SearchByKeyToggle = styled(Icon)`
  right: 80px;
`

export const CaseSensitiveToggle = styled(Icon)`
  right: 45px;
`

export const WholeWordToggle = styled(Icon)`
  right: 10px;
`
