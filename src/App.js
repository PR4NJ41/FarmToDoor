import React from 'react'
import { Routes,Route} from 'react-router-dom'
import "./App.css"
import Homepage from "./pages/homepage/index"

const App = () => { 
  return (
    <>
		<Routes>
			<Route path="/" element={<Homepage/>}/>
		</Routes>
    </>
  )
}
 
export default App



