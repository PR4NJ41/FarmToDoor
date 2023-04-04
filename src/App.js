import React from 'react'
import { Routes,Route} from 'react-router-dom'
import "./App.css"
import Homepage from "./pages/homepage/index"
import FAQ from "./pages/faq/faq"
import Searchpage from "./pages/buy/index"
import Aboutus from "./pages/about_us/index"
import Cart from './pages/cart/index'
import Test from './pages/test/index'


const App = () => { 
  return (
    <>
		<Routes>
			<Route path="/" element={<Homepage/>}/>
			<Route path="/faq" element={<FAQ/>}/>
      <Route path="/buy" element={<Searchpage/>}/>
      <Route path="/about_us" element={<Aboutus/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/test" element={<Test/>}/>
		</Routes>
    </>
  )
}
 
export default App



