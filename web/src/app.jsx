import {AppNavbar} from './navbar'
import {Routes, Route} from 'react-router-dom'
import {Home} from './home'

export const App = () => <>
  <AppNavbar />
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
  </>