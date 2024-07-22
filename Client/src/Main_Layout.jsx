import React from 'react'
import Footer from './Components/Footer'
import Topbar from './Components/Topbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <div className="absolute">
        <Topbar/>
      </div>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout