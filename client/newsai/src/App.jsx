import React from 'react'
import Navbar from './components/Navbar'
import '@mantine/core/styles.css';
import {Routes , Route} from "react-router-dom"
import Login  from '../Pages/Login';
function App() {
  

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
