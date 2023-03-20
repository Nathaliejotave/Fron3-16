import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Contacto from './Pages/Contacto'
import Home from './Pages/Home'
import Beer from './Pages/Beer'
import { routes } from './routes'
import React from 'react'

  function App() {
  
  return (
    <div> 
      <Navbar/>
        <h1>Mas que solo bebidas, festejemos el encuentro.</h1> 
        <Routes>
          <Route path={routes.home} element={<Home/>}>
          </Route>
          <Route path={routes.contact} element={<Contacto/>}/>
          <Route path={routes.beer} element={<Beer/>}/>
      </Routes>
    </div> 
    )
  }

export default App
