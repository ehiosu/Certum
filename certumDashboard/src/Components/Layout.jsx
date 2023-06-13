import React from 'react'
import { Sidebar } from './Sidebar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <main   className='w-full   h-screen    overflow-hidden  bg-[#FAFAFA]   scroll-smooth  flex p-3 gap-4 '>
      
        <Sidebar/>
        <Outlet/>
    </main>
  )
}
