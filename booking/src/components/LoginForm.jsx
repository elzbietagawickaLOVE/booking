import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { LOGIN } from '../queries/hotelQueries'
import { ME } from '../queries/hotelQueries'
import { set } from 'mongoose'


const LoginForm = ({setToken}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [login, result] = useMutation(LOGIN, {
        onError: (error) => {
        console.log('error', error.graphQLErrors[0].message)
        }
    })

    useEffect(() => {
        if ( result.data ) {
          const token = result.data.login.value
          setToken(token)
          localStorage.setItem('authorization', 'bearer ' + token)
        }
      }, [result.data])

    const submit = async (event) => {
        event.preventDefault()
        login({ variables: { username, password } })
        
    }



    return (
        <div>
        <h2>Login</h2>
        <form onSubmit={submit}>
            <div>
            username
            <input
                value={username}
                onChange={({ target }) => setUsername(target.value)}
            />
            </div>
            <div>
            password
            <input
                type='password'
                value={password}
                onChange={({ target }) => setPassword(target.value)}
            />
            </div>
            <button type='submit'>login</button>
        </form>
        </div>
    )
}

export default LoginForm