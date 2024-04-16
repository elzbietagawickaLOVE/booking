import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { LOGIN } from '../queries/hotelQueries'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = ({setToken}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [login, result] = useMutation(LOGIN, {
        onError: (error) => {
            toast.error("Logowanie nie powiodło się! Spróbuj ponownie.")
        }
    })

    useEffect(() => {
        if ( result.data ) {
          const token = result.data.login.value
          setToken(token)
          localStorage.setItem('authorization', 'bearer ' + token)
          toast.success("Zalogowano pomyślnie!")
          
        }
      }, [result.data])

    const submit = async (event) => {
        event.preventDefault()
        login({ variables: { username, password } })
    }



    return (
        <div style={{ height: '599px', position: 'relative'}}>
            <ToastContainer />
            <div style={{ margin: 'auto', width: '50%', padding: '10px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white' }} className='card'>
            <h2>Login</h2>
            <form onSubmit={submit}>
                <div>
                nazwa użytkownika
                <input
                    value={username}
                    onChange={({ target }) => setUsername(target.value)}
                    className='form-control'
                    placeholder='Tu wpisz nazwę użytkownika...'
                />
                </div>
                <div>
                hasło
                <input
                    type='password'
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                    className='form-control'
                    style={{ marginBottom: '25px'}}
                    placeholder='Tu wpisz hasło...'
                />
                </div>
                <a href='/register'>Nie posiadasz konta? Zarejestruj się!</a>
                <button type='submit'
                    className='btn btn-primary'
                    style={{ marginTop: '10px', position: 'absolute', bottom: '10px', right: '10px'}}
                    >zaloguj</button>
            </form>
            </div>
        </div>
    )
}

export default LoginForm