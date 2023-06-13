import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Avatar,AvatarImage,AvatarFallback } from './avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './dropdown-menu'

export const Header = ({children,Heading}) => {
  return (
   <section className='w-full max-h-48  h-auto  flex  flex-col bg-white lg:gap-1 p-4 rounded-[1rem] flex-grow shadow-md  flex-wrap '>
    <div className="flex  h-1/2  w-full  lg:justify-between  flex-wrap lg:gap-0 gap-4">
      <p className="font-bold text-xl text-neutral-800/80 t">{Heading}</p>
      <div className="relative mb-4 flex flex-wrap items-stretch  w-96  h-max gap-0">
  <span
    className="rounded-l-full bg-gray-400/40  text-black flex items-center whitespace-nowrap  px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6]  "
    id="basic-addon1"
    ><AiOutlineSearch/></span
  >
  <input
    type="text"
    className="bg-gray-400/40 outline-none text-black  relative m-0 block w-[1px] min-w-0 flex-auto    bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]transition duration-200 ease-in-out focus:z-[3] rounded-r-full"
    placeholder="Search"
    aria-label="Username"
    aria-describedby="basic-addon1" />
</div>
<DropdownMenu >
  <DropdownMenuTrigger  className='outline-none'>
<Avatar className='border-2  border-gray-400/20'>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>PU</AvatarFallback>
    </Avatar>
    </DropdownMenuTrigger>

    <DropdownMenuContent  className='bg-white rounded-t-lg  text-center w-40  h-36  p-2 rounded-xl  '>
    <DropdownMenuLabel>
      Peter UKA
    </DropdownMenuLabel>
    <DropdownMenuSeparator  className='bg-gray-500/10'/>
    <DropdownMenuItem className='text-center  flex  justify-center  items-center  hover:font-semibold'>Account</DropdownMenuItem>
    <DropdownMenuSeparator  className='bg-gray-500/10'/>
    <DropdownMenuItem className='text-center  flex  justify-center  items-center  hover:font-semibold'>Logout</DropdownMenuItem>


    </DropdownMenuContent>
    </DropdownMenu>
    </div>
    {children}
   </section>
  )
}
