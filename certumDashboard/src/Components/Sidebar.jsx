import React, { useState } from 'react'
import {CiMenuBurger, CiSettings} from 'react-icons/ci'
import {BsHouse, BsPersonLinesFill, BsPersonPlus} from 'react-icons/bs'
import {TbFileCertificate}  from 'react-icons/tb'
import  {AiOutlineSecurityScan, AiOutlineShoppingCart} from    'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
export const Sidebar = () => {
    const [sidebarOpen,toggleSidebar]=useState(false)
    const  Nav=useNavigate()
  return (
    <section  className={`${!sidebarOpen?'md:w-12   w-20   rounded-xl  relative ':'lg:w-60  md:w-48  w-40      rounded-xl  md:relative fixed   z-20'} h-full bg-black      p-2 transition-all  ease-out   overflow-hidden    `   }>
        <div className="w-full  h-12">
        <div className={`absolute  text-white    flex    justify-end  top-[10px] w-max   ${sidebarOpen?'right-[0.5rem]':'right-[30%]'}  h-auto `}>
            <CiMenuBurger   className='text-lg  font-semibold   hover:cursor-pointer'    onClick={()=>{toggleSidebar((state)=>!state)}}/>
        </div>
        </div>
      <section>
               <div className="flex-col w-full  gap-2   h-16    ">
               <Link    to={'/'}> <div className={`w-full  flex    items-center    lg:gap-6 text-xs gap-2    lg:text-lg font-semibold   peer p-2 hover:font-bold     hover:text-blue-400  md:text-lg  md:gap-4    hover:cursor-pointer   ${window.location.pathname=='/'?'text-blue-400':'text-white'}`}>
                        <BsHouse    />
                        {sidebarOpen&&<p>DASHBOARD</p>}
                        
                </div></Link>
                <div className="flex w-full    peer-hover:translate-x-[-130%]  transition-all    flex-wrap">
                    <span className={`${window.location.pathname=='/'?' bg-blue-200':'bg-white'}    h-[3px]   w-full translate-x-[130%] rounded-md`}></span>
                </div>
               </div>
               {/* dashboard-above */}
               <div className="flex-col w-full  gap-2   h-16">
               <Link    to={'/Certificates'}>  <div className={`w-full  flex    items-center    lg:gap-6 text-xs gap-2      font-semibold   peer p-2 hover:font-bold lg:text-lg   hover:text-blue-400 md:text-lg  md:gap-4    hover:cursor-pointer    ${window.location.pathname=='/Certificates'?'text-blue-400':'text-white'}`}>
                     <TbFileCertificate    />
                        {sidebarOpen&&<p>CERTIFICATES</p>}
                        
                </div></Link>
                <div className="flex w-full    peer-hover:translate-x-[-130%]  transition-all    flex-wrap">
                    <span className={`${window.location.pathname.includes('/Certificates')?' bg-blue-400':'bg-white'}    h-[3px]   w-full translate-x-[130%]    rounded-md`}></span>
                </div>
               </div>

               {/* Certificates-above */}
               <div className="flex-col w-full  gap-2   h-16">
               <Link  to={'/Orders'}>   <div className={`w-full  flex    items-center    lg:gap-6 text-xs gap-2      font-semibold   peer p-2 hover:font-bold lg:text-lg   hover:text-blue-400 md:text-lg  md:gap-4    hover:cursor-pointer    ${window.location.pathname=='/Orders'?'text-blue-400':'text-white'}`}>
                     <AiOutlineShoppingCart    />
                        {sidebarOpen&&<p>Orders</p>}
                        
                </div></Link>
                <div className="flex w-full    peer-hover:translate-x-[-130%]  transition-all    flex-wrap">
                    <span className={`${window.location.pathname.includes('/SSL-Tools')?' bg-blue-400':'bg-white'}    h-[3px]   w-full translate-x-[130%]    rounded-md`}></span>
                </div>
               </div>

               {/* orders-above */}


               <div className="flex-col w-full  gap-2   h-16">
              <Link to={'/SSL-Tools'}> <div className={`w-full  flex    items-center    lg:gap-6 text-xs gap-2      font-semibold   peer p-2 hover:font-bold lg:text-lg   hover:text-blue-400 md:text-lg  md:gap-4    hover:cursor-pointer    ${window.location.pathname.includes('/SSL-Tools')?'text-blue-400':'text-white'}` }>
                        <AiOutlineSecurityScan      />
                        {sidebarOpen&&<p>SSL TOOLS</p>}
                        
                </div></Link>
                <div className="flex w-full    peer-hover:translate-x-[-130%]  transition-all    flex-wrap">
                    <span className={`${window.location.pathname.includes('/SSL-Tools')?' bg-blue-400':'bg-white'}    h-[3px]   w-full translate-x-[130%]    rounded-md`}></span>
                </div>
               </div>

               {/* ssl-tools-above */}

               <div className="flex-col w-full  gap-2   h-16">
               <div className={`w-full  flex    items-center    lg:gap-6 text-xs gap-2      font-semibold   peer p-2 hover:font-semibold lg:text-lg   hover:text-blue-400 md:text-lg  md:gap-4    hover:cursor-pointer    ${window.location.pathname.includes('/Settings')?'text-blue-400':'text-white'}`}>
                        <CiSettings      />
                        {sidebarOpen&&<p>SETTINGS</p>}
                        
                </div>
                <div className="flex w-full    peer-hover:translate-x-[-130%]  transition-all    flex-wrap">
                    <span className={`${window.location.pathname.includes('/Settings')?' bg-blue-400':'bg-white'}    h-[3px]   w-full translate-x-[130%]    rounded-md`}></span>
                </div>
               </div>
            {/* settings-above */}

            <div className="flex-col w-full  gap-2   h-16">
               <div className={`w-full  flex    items-center    lg:gap-6 text-xs gap-2      font-semibold   peer p-2 hover:font-semibold lg:text-lg   md:text-lg  md:gap-4   hover:text-blue-400  hover:cursor-pointer    ${window.location.pathname.includes('/Help')?'text-blue-400':'text-white'}`}>
                        <BsPersonPlus      />
                        {sidebarOpen&&<p>HELP</p>}
                        
                </div>
                <div className="flex w-full    peer-hover:translate-x-[-130%]  transition-all    flex-wrap">
                    <span className={`${window.location.pathname.includes('/Help')?' bg-blue-400':'bg-white'}    h-[3px]   w-full translate-x-[130%]    rounded-md  duration-1000   ease-out    transition-all`}></span>
                </div>
               </div>
               


                </section>
        
    




    </section>
  )
}
