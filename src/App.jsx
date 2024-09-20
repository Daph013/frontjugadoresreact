import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Posicion from './pages/Posicion'
import Pitchers from './pages/Pitchers'
import Inicio from './pages/Inicio'



const App = () => {
  return (
    <BrowserRouter>
        <Header/>
       
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/pitchers" element={<Pitchers/>} />
            <Route path="/posicion" element={<Posicion/>} />
            <Route path="*" element={<Inicio/>} />
        </Routes>
       
        <Footer/>
        </BrowserRouter>
  )
}

export default App