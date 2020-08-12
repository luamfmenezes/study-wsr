import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Container, Content } from './styles'
import { useFetch } from '../hooks/useFetch'
import Loading from '../components/Loading'

interface IParams {
  id: string
}

interface IUser {
  id: number
  name: string
}

const User: React.FC = () => {
  const { goBack } = useHistory()
  const { id } = useParams()
  const { data: user } = useFetch<IUser>(`users/${id}`)

  if (!user) return <p>Carregando</p>

  return (
    <Container>
      <img
        src={`https://api.adorable.io/avatars/285/${user.id}.png`}
        alt={`profile ${user.name}`}
      />
      <Content>
        <h1>Name: {user.name}</h1>
        <p>id: {user.id}</p>
        <button onClick={goBack}>Voltar</button>
      </Content>
    </Container>
  )
}

export default User
