import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import GlobalStyle from './styles/global'
import Users from './pages/Users'
import User from './pages/User'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Route exact path='/' component={Users} />
        <Route exact path='/:id' component={User} />
      </BrowserRouter>
    </>
  )
}

export default App
