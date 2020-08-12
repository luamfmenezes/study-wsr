import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const rotate = keyframes`
    to{
        transform:rotate(0deg);
    }
    from{
        transform:rotate(360deg);
    }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #eb5e28;
    margin: 32px;
    position: relative;
  }
`

export const UserItem = styled(Link)`
  background: #ccc5b9;
  padding: 16px;
  border-radius: 8px;
  margin: 4px;
  display: flex;
  align-items: center;
  flex-grow: 1;
  width: 300px;
  text-decoration: none;
  img {
    width: 48px;
    height: 48px;
    border-radius: 8px;
  }
  p {
    color: #403d39;
    font-weight: bold;
    margin-left: 16px;
  }
`

export const Loading = styled.div`
  position: absolute;
  animation: ${rotate} 0.5s linear infinite;
  border: 2px solid transparent;
  border-top: 2px solid #252422;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  right: -40px;
  top: 8px;
`
