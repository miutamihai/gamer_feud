import {useAppContext} from './app-context'
import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'

export const Logout = () => {
    const {setLoggedIn} = useAppContext()
    const navigate = useNavigate()

    useEffect(() => {
        setLoggedIn(false)
        window.sessionStorage.clear()
        navigate('/')
    }, [setLoggedIn, navigate])

    return ''
}