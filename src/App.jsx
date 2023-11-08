import React from 'react'
import LoginPage from './components/LoginPage'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="body">
      <Outlet/>
    </div>
  )
}

export default App
