import React from 'react'
import PromotionSection from './PromotionSection'
import Navbar from './Navbar'
import BottomNavbar from './BottomNavbar'
import ContactMenu from './ContatctMenu'

function Header() {
  return (
    <div>
        <PromotionSection />
        <ContactMenu />
        <Navbar />
        <div className='border-b'> </div>
        <BottomNavbar />
    </div>
  )
}

export default Header