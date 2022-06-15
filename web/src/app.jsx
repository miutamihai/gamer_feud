import {AppNavbar} from './navbar'
import {Routes, Route} from 'react-router-dom'
import {Home} from './home'
import {Games} from './games'
import {Game} from './game'
import {Login} from './login'
import {Register} from './register'
import {Logout} from './logout'
import {AppContext, useDefaultAppContext} from './app-context'

const LogoutRoute = () => <Logout/>

const RegisterRoute = () => <Register/>

const LoginRoute = () => <Login/>

const GameRoute = () => <Game/>

const GamesRoute = () => <Games/>

const HomeRoute = () => <Home/>

const Router = () => <Routes>
    <Route path={'/logout'} element={<LogoutRoute/>}/>
    <Route path={'/register'} element={<RegisterRoute/>}/>
    <Route path={'/login'} element={<LoginRoute/>}/>
    <Route path="/games/:game_id" element={<GameRoute/>}/>
    <Route path="/games" element={<GamesRoute/>}/>
    <Route path="/" exact element={<HomeRoute/>}/>
</Routes>

export const App = () => <AppContext.Provider value={useDefaultAppContext()}>
    <AppNavbar/>
    <Router/>
</AppContext.Provider>