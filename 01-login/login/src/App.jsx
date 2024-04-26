import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Singup from './pages/Singup'
import RecoverPassword from './pages/Recover-password'
import Error404 from './pages/Error404'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='singup' element={<Singup />} />
        <Route path='recover-password' element={<RecoverPassword />} />
        <Route path='*' element={<Error404 />} />
        <Route path='privacy' element={<Privacy />} />
        <Route path='terms' element={<Terms />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
