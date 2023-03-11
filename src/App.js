import React from 'react'
import { Routes,Route} from 'react-router-dom'
import "./App.css"
import Homepage from "./pages/homepage/index"
import FAQ from "./pages/faq/faq"

const App = () => { 
  return (
    <>
		<Routes>
			<Route path="/" element={<Homepage/>}/>
			<Route path="/faq" element={<FAQ/>}/>
		</Routes>
    </>
  )
}
 
export default App



