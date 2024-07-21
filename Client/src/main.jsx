import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home.jsx'
import Layout from './Layout.jsx'
import Login from './Login.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
    </Route>,
    <Route path='/login' element={<Login />}>
      <Route path='' element={<Login />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

//<Route path='men' element={<Men/>} />
//<Route path='women' element={<Women />} />
//<Route path='kids' element={<Kids />} />