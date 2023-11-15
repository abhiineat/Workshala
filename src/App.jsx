import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Homeframe from './Components/Homeframe'
import Footer from './Components/Footer'
import Services from './Components/Services'
import CompaniesCard from './Components/ComapaniesCard'
import Events from './Components/Events'

function App() {
  return (
    <>
   <Navbar/>
   <Homeframe/>
   <Services/>
   <CompaniesCard/>
   <Events/>
   <Footer/>
    </>
  )
}
export default App
