import React from 'react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

const Layout = ({children}) => {
  return (
    <>
    <Nav/>
    <main>{children}</main>
    <Footer/>
    </>
  )
}

export default Layout