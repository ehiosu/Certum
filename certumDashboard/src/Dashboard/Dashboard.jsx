import React from 'react'
import { Header } from '../Components/Header'
import { AiOutlinePlus } from 'react-icons/ai'
import{BiHelpCircle}    from    'react-icons/bi'
import { dashboardData } from './Fakedata'

export const Dashboard = () => {
  return (
    <section    className='flex-grow   min-h-full   overflow-y-auto      scroll-smooth'>
      
        <Header Heading={"Dashboard"}/>

        <div className="w-full  lg:h-60     flex    flex-col    my-4    gap-4">
            <div className="w-80    h-12       rounded-[0.6rem]  shadow-md bg-white    flex    justify-center  gap-4   items-center    hover:shadow-xl hover:scale-105 transition-all">
                <p className="text-xl   font-bold">
                    Place New Order
                </p>
                <div className="w-8 h-8 bg-black    flex    items-center    justify-center  rounded-full    text-white  hover:scale-110   hover:font-semibold hover:shadow-md transition-all">
                        <AiOutlinePlus/>    
                </div>
            </div>
            <div className="grid    lg:grid-cols-4 grid-cols-2 gap-4   ">
               {dashboardData.map((datum,index)=>{
                return   <div className=" p-2  lg:w-44  w-40   h-40 lg:h-40    bg-white    shadow-md   rounded-[0.6rem]   mx-auto   hover:shadow-xl hover:scale-105 transition-all"    key={index.toString()+datum.title}>
                       <div className="h-auto   w-full  flex    justify-end items-center    text-lg ">
                       <BiHelpCircle/>
                       </div>
                       <div className="flex mt-4  flex-col justify-center  items-center">
                        <p className="lg:text-4xl  text-2xl  my-1    font-semibold">
                            {datum.frequency}
                        </p>
                        <p className="   my-1    text-center">
                            {datum.title}
                        </p>
                        <p className="text-[13px]   hover:underline   text-blue-400">
                            {'{Total}'}
                        </p>

                       </div>
                </div>
               })}

            </div>
        </div>

        <div className="w-full  h-[45vh]    bg-white    shadow-md   my-6  rounded-[1.4rem]">

        </div>

        <div className="flex lg:flex-row    flex-col   gap-6   my-8    h-[60vh]    ">
            <div className="lg:w-1/2    w-full   bg-white   h-full   rounded-[1.2rem]    shadow-lg">

            </div>
            <div className="lg:w-1/2    w-full   bg-purple-600   h-2/3   rounded-[1.2rem]    shadow-lg">

</div>
        </div>
        

    </section>
  )
}
