import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #ff9f1c;
    margin: 32px;
    position: relative;
  }
`

export const UserItem = styled.div`
  background: #112637;
  padding: 16px;
  border-radius: 8px;
  margin: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  width: 300px;
  text-decoration: none;
  div {
    display: flex;
    align-items: center;
    img {
      width: 48px;
      height: 48px;
      border-radius: 8px;
    }
    p {
      color: #fdfffc;
      font-weight: bold;
      margin-left: 16px;
    }
  }
  a {
    color: #2ec4b6;
  }
`
