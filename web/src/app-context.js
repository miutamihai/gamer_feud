import {createContext, useContext, useState} from 'react'

export const AppContext = createContext({})

export const useAppContext = () => useContext(AppContext)

export const useDefaultAppContext = () => {
    const [loggedIn, setLoggedIn] = useState(window.sessionStorage.getItem('loggedIn') === 'true')

    return {
        loggedIn,
        setLoggedIn
    }
}