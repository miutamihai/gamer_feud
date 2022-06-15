import {AppNavbar} from './navbar'
import {Routes, Route} from 'react-router-dom'
import {Home} from './home'
import {Games} from './games'
import {Game} from './game'

export const App = () => <>
  <AppNavbar />
  <Routes>
    <Route path="/games/:game_id" element={<Game />} />
    <Route path="/games" element={<Games />} />
    <Route path="/" exact element={<Home />} />
  </Routes>
  </>