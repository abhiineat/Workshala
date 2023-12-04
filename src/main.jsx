import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Companies from './Components/Companies.jsx'
import Jobs from './Components/Jobs.jsx'
import Profile from './Components/Profile.jsx'
import Welcome from './Components/Welcome.jsx'
import Home from './Home.jsx'
import { Provider } from 'react-redux'
// import LoginPage from './Components/LoginPage.jsx'
import Login from './Components/Login.jsx'
import Reset from './Components/Reset password/Reset.jsx'
import Register from './Components/Register/Register.jsx'
import Courses from './Components/Courses.jsx'
import Courses2 from './Components/Courses2.jsx'

import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store.js";




const router = createBrowserRouter(
  createRoutesFromElements(
   <>
   <Route path='/' element={<Home />} />
   <Route path='/companies' element={<Companies/>}/>
   <Route path='/jobs' element={<Jobs/>}/>
   <Route path='/profile' element={<Profile/>}/>
   <Route path='/welcome' element={<Welcome/>}/>
       <Route path='/login' element={<Login/>}/>
        <Route path='/reset' element={<Reset/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses2' element={<Courses2/>}/>
        
   </>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={router}/>
    </PersistGate>
    </Provider>
    
  </React.StrictMode>,
)
