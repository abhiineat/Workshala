import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LoginPage from './components/LoginPage.jsx'
import Reset from './components/Reset password/Reset.jsx'
import Register from './components/Register/Register.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='reset' element={<Reset/>}/>
        <Route path='register' element={<Register/>}/>
    </Route>

  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
