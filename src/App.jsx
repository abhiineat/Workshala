import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Homeframe from './Components/Homeframe'
import Footer from './Components/Footer'
import Services from './Components/Services'
import CompaniesCard from './Components/ComapaniesCard'

function App() {
  return (
    <>
   <Navbar/>
   <Homeframe/>
   <Services/>
   <CompaniesCard/>
   <Footer/>
    </>
  )
}
export default App
