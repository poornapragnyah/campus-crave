import './App.css'
import { BrowserRouter,Routes,Route,NavLink } from 'react-router-dom'

//pages
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import FirstPage from './pages/firstPage'
import Cart from './pages/cart'
import Checkout from './pages/checkout'
import Admin from './pages/admin'
import AdminPanel from './pages/adminPanel'

//shop pages
import Cantina from './pages/shops/cantina'
import HalliMane from './pages/shops/halli-mane'
import PesCanteen from './pages/shops/pes-canteen'
import CampusMart from './pages/shops/campusmart'

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
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/admin/shops/cantina' element={<AdminPanel page='cantina'/>}/>
          <Route path='/shops/cantina' element={<Cantina/>}/>
          <Route path='/shops/halli-mane' element={<HalliMane/>}/>
          <Route path='/shops/pes-canteen' element={<PesCanteen/>}/>
          <Route path='/shops/campus-mart' element={<CampusMart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
