import './App.css'
import { BrowserRouter,Routes,Route,NavLink } from 'react-router-dom'

//pages
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import FirstPage from './pages/firstPage'
import Cart from './pages/cart'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FirstPage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
