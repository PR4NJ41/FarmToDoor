import React from 'react'
import { Routes,Route} from 'react-router-dom'
import "./App.css"
import Homepage from "./pages/homepage/index"
import FAQ from "./pages/faq/faq"
import Searchpage from "./pages/searchpage/index"
import Aboutus from "./pages/about_us/index"


const App = () => { 
  return (
    <>
		<Routes>
			<Route path="/" element={<Homepage/>}/>
			<Route path="/faq" element={<FAQ/>}/>
      <Route path="/searchpage" element={<Searchpage/>}/>
      <Route path="/about_us" element={<Aboutus/>}/>
		</Routes>
    </>
  )
}
 
export default App



