import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding: 0 0 0 10px;
  width: 100%;
`

export const Title = styled.span`
  font-size: 12px;
  margin: 0 10px 0 0;
`

export const Icons = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  & > * {
    cursor: pointer;
    font-size: 20px;
  }
`
