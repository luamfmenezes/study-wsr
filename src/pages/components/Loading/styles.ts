import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    to{
        transform:rotate(0deg);
    }
    from{
        transform:rotate(360deg);
    }
`

export const Container = styled.div`
  position: absolute;
  animation: ${rotate} 0.5s linear infinite;
  border: 2px solid transparent;
  border-top: 2px solid #2ec4b6;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  right: -40px;
  top: 8px;
`
