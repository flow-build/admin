import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    display: flex;
    flex-direction: column;
    margin-bottom: 1.6rem;
    padding: 20px;
    position: relative;
  `}
`

export const Label = styled.label`
  color: #2e3a59;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.6;
  margin-bottom: 0.4rem;
  text-transform: uppercase;
`

export const DropdownContent = styled.div`
  position: relative;
`

export const Select = styled.select`
  appearance: none;
  background: #ffffff;
  border: 2px solid #e4e9f2;
  border-radius: 3px;
  color: #c5cef4;
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  font-weight: 400;
  overflow: hidden;
  padding: 1.2rem 0 1.2rem 0.8rem;
  width: 100%;

  &:focus,
  &:active {
    border-color: #598bff;
  }
`

export const DropdownOption = styled.option`
  color: #c5cef4;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.4rem;
`

export const DropdownIcon = styled.img`
  height: auto;
  pointer-events: none;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 2.5rem;
`
