import React from 'react'
import { Container, UserItem, Loading } from './styles'
import { useFetch } from '../hooks/useFetch'

interface IUser {
  id: number
  name: string
}

const Users: React.FC = () => {
  const { data: users, isValidating } = useFetch<IUser[]>(
    'http://localhost:3333/users'
  )

  return (
    <Container>
      <h1>Users {isValidating && <Loading />}</h1>
      {users?.map(({ id, name }) => (
        <UserItem key={id} to={`/${id}`}>
          <img
            src={`https://api.adorable.io/avatars/285/${id}.png`}
            alt={`profile ${name}`}
          />
          <p>{name}</p>
        </UserItem>
      ))}
    </Container>
  )
}

export default Users
