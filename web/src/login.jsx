import {Label, TextInput, Button, Alert} from 'flowbite-react'
import {useCallback, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useAppContext} from './app-context'

const useLogin = (email, password, setError, setLoggedIn) => {
    const navigate = useNavigate()

    return useCallback(() => {
        fetch(`${process.env.REACT_APP_API_URL}/login`, {
            method: 'POST', body: JSON.stringify({
                email, password
            }), headers: {'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(({success}) => {
                if (success) {
                    setLoggedIn(true)
                    window.sessionStorage.setItem('loggedIn', true)
                    navigate('/')
                } else {
                    setError('Invalid email or password')
                }
            })
            .catch(err => setError(err.message || 'An error occurred'))
    }, [navigate, email, password, setError])
}

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {setLoggedIn} = useAppContext()
    const login = useLogin(email, password, setError, setLoggedIn)

    return <div className={'flex flex-col items-center justify-center w-screen'}
                style={{minHeight: '70vh'}}>
        <h1 className={'font-medium leading-tight text-5xl mt-0 mb-2'}>Login</h1>
        <div style={{minWidth: '20vw'}}>
            <div className="mb-2 block">
                <Label
                    htmlFor="email1"
                    value="Your email"
                />
            </div>
            <TextInput
                id="email1"
                type="email"
                placeholder="name@gamerfeud.com"
                required={true}
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
        </div>
        <div style={{minWidth: '20vw'}}>
            <div className="mb-2 block">
                <Label
                    htmlFor="password1"
                    value="Your password"
                />
            </div>
            <TextInput
                id="password1"
                type="password"
                required={true}
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
        </div>
        <div className={'mt-5'}>
            <Button type="submit" style={{minWidth: '10vw'}} disabled={!email && !password} onClick={login}>
                Submit
            </Button>
        </div>
        {error && <Alert
            color="failure" onDismiss={() => setError('')}
        >
  <span>
    <span className="font-medium">
        Error
    </span>
      {' '}{error}.
  </span>
        </Alert>}
    </div>
}