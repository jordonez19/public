import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Whatsapp from '@/components/Whatsapp'
import React from 'react'

const MainLayout = ({children}) => {
  return (
      <div>
          <Navbar/>
          {children}
          <Footer/>
          <Whatsapp />
    </div>
  )
}

export default MainLayout
