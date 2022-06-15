import {AppNavbar} from './navbar'
import {Routes, Route} from 'react-router-dom'
import {Home} from './home'
import {Games} from './games'
import {Game} from './game'
import {Login} from './login'
import {Register} from './register'
import {AppContext, useDefaultAppContext} from './app-context'

export const App = () => <AppContext.Provider value={useDefaultAppContext()}>
  <AppNavbar />
  <Routes>
    <Route path={'/register'} element={<Register />} />
    <Route path={'/login'} element={<Login />} />
    <Route path="/games/:game_id" element={<Game />} />
    <Route path="/games" element={<Games />} />
    <Route path="/" exact element={<Home />} />
  </Routes>
  </AppContext.Provider>