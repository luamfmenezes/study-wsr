import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  img {
    border-radius: 8px;
    width: 80px;
    height: 80px;
  }
`

export const Content = styled.div`
  background: #112637;
  padding: 16px;
  border-radius: 8px;
  margin-top: 32px;
  button {
    margin-top: 8px;
    border-radius: 8px;
    border: 0;
    background: #e71d36;
    height: 40px;
    width: 80px;
    color: #fdfffc;
    font-font-weight: bold;
  }
`
