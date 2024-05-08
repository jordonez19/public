import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Whatsapp from '@/components/Whatsapp'
import React from 'react'
import HeaderContact from "@/components/HeaderContact";

const MainLayout = ({ children }) => {
  return (
    <div>
      <HeaderContact />
      <Navbar />
      {children}
      <Footer />
      <Whatsapp />
    </div>
  )
}

export default MainLayout
