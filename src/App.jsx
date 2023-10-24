import './App.css'
import Navbar from './components/Navbar'
import ShopCards from './components/ShopCards'
import Offers from './components/Offers'

function App() {
  

  return (
    <>
      <Navbar />
      <Offers caption="Hurry Up and Order! It's rush hour!!!"/>
      <ShopCards/>
    </>
  )
}

export default App
