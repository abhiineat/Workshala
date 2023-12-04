import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Companies from './Components/Companies.jsx'
import Jobs from './Components/Jobs.jsx'
import Profile from './Components/Profile.jsx'
import Welcome from './Components/Welcome.jsx'
import Home from './Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
   <>
   <Route path='/' element={<Home />} />
   <Route path='/companies' element={<Companies/>}/>
   <Route path='/jobs' element={<Jobs/>}/>
   <Route path='/profile' element={<Profile/>}/>
   <Route path='/welcome' element={<Welcome/>}/>
   </>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
