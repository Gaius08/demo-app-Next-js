import React from 'react'
import Header from '../components/header/header'
import Footer from '@/components/footer/footer'

export default function Layout({children}:{children:React.ReactNode}) {
  return (
    <div className='bg-black'>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}
