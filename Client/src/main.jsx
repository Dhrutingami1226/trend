import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Home.jsx'
import Layout from './Main_Layout.jsx'
import Login from './Login.jsx'
import '../input.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='men' element={<Home/>} />
        <Route path='women' element={<Home/>} />
        <Route path='kids' element={<Home/>} />
      </Route>
      <Route path='/login' element={<Login/>} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)