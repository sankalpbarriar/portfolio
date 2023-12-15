import React from 'react'
import Header from './components/Header/header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'   // it use layout as a base and keeps header and footer same

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout