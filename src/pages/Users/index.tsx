import React, { useCallback } from 'react'
import { Container, UserItem } from './styles'
import { useFetch } from '../hooks/useFetch'
import api from '../services/api'
import { mutate as mutateGlobal } from 'swr'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'

interface IUser {
  id: number
  name: string
}

const Users: React.FC = () => {
  const { data: users, isValidating, mutate } = useFetch<IUser[]>('users')

  const handleNameChange = useCallback(
    (id: number) => {
      const updateInfos = { name: 'Changed Name' }

      api.put(`users/${id}`, updateInfos)

      const updatedUsers = users?.map((user) =>
        user.id === id ? { ...user, ...updateInfos } : user
      )

      // mutate cache in other components
      mutateGlobal(`users/${id}`, { id, ...updateInfos })

      // false is for otmist interface
      mutate(updatedUsers, false)
    },
    [users, mutate]
  )

  return (
    <Container>
      <h1>Users {isValidating && <Loading />}</h1>
      {users?.map(({ id, name }) => (
        <UserItem key={id}>
          <div>
            <img
              src={`https://api.adorable.io/avatars/285/${id}.png`}
              alt={`profile ${name}`}
            />
            <p onClick={() => handleNameChange(id)}>{name}</p>
          </div>
          <Link to={`/${id}`}>config</Link>
        </UserItem>
      ))}
    </Container>
  )
}

export default Users
