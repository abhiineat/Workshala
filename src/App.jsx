import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
    <Outlet/>
    </>
  )
}
export default App
