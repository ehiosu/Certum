import React from 'react'
import { Header } from '../Components/Header'
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger,DropdownMenuContent } from '../Components/dropdown-menu'
import { AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import {getCoreRowModel, useReactTable,flexRender}  from    '@tanstack/react-table'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../Components/table"
import { DataTable } from '../Components/DataTable'
import { certificateColumns } from '../Components/columns'
export const Certificates = () => {
    console.log(window.location.pathname)
  return (
    <section    className='flex-grow   min-h-full   overflow-y-auto      scroll-smooth'>
        <Header Heading={'Certificates'}>
            <div className="w-full  lg:h-10 md:h-16 h-24   flex    justify-between  lg:flex-row flex-col    lg:gap-0    gap-2">
                <DropdownMenu  >
                    <DropdownMenuTrigger    className='w-28 h-8 bg-gray-400/40  text-black  rounded-[0.4rem]    flex    justify-between items-center    p-2 outline-none'>
                        Views<AiOutlineArrowDown/>
                            
                    </DropdownMenuTrigger>
                    <DropdownMenuContent    className='bg-white shadow-md   rounded-[0.6rem]   text-center'>
                        <DropdownMenuItem   className='flex items-center   justify-center   hover:font-semibold'>List</DropdownMenuItem>
                        <DropdownMenuItem   className='flex items-center   justify-center   hover:font-semibold'>Grid</DropdownMenuItem>

                    </DropdownMenuContent>


                </DropdownMenu>

                <div className="flex    gap-2   justify-between">
                <DropdownMenu  >
                    <DropdownMenuTrigger    className='w-36 h-8 bg-gray-400/40  text-black  rounded-[0.4rem]    flex    justify-between items-center    p-2 outline-none    md:text-[14px]  text-xs'>
                        Filter By All<AiOutlineArrowDown/>
                            
                    </DropdownMenuTrigger>
                    <DropdownMenuContent    className='bg-white shadow-md   rounded-[0.6rem]   text-center'>
                        <DropdownMenuItem   className='flex items-center   justify-center   hover:font-semibold'>Order Number</DropdownMenuItem>
                        <DropdownMenuItem   className='flex items-center   justify-center   hover:font-semibold'>Requester Name</DropdownMenuItem>
                        <DropdownMenuItem   className='flex items-center   justify-center   hover:font-semibold'>Product Name</DropdownMenuItem>
                        <DropdownMenuItem   className='flex items-center   justify-center   hover:font-semibold'>Order Date</DropdownMenuItem>
                        <DropdownMenuItem   className='flex items-center   justify-center   hover:font-semibold'>Expiry Date</DropdownMenuItem>



                    </DropdownMenuContent>


                </DropdownMenu>

                <DropdownMenu  >
                    <DropdownMenuTrigger    className='min-w-36 h-8 bg-transparent  text-black  rounded-[0.4rem]    border-2     border-gray-400/80   flex    justify-between items-center    gap-2    p-2 outline-none    md:text-[14px]  text-xs whitespace-nowrap'>
                        Showing Last 90 Days<AiOutlineArrowDown/>
                            
                    </DropdownMenuTrigger>
                    <DropdownMenuContent    className='bg-white shadow-md   rounded-[0.6rem]   text-center'>
                        <DropdownMenuItem   className='flex items-center   justify-center   hover:font-semibold'>30 Days</DropdownMenuItem>
                        <DropdownMenuItem   className='flex items-center   justify-center   hover:font-semibold'>60 Days</DropdownMenuItem>

                    </DropdownMenuContent>


                </DropdownMenu>

              

                </div>
            </div>
        </Header>
       

        {/* Header  Above */}
        <div className="w-full  h-[40vh]">
                <Tables />
            </div>

    </section>
  )
}

const  Tables=(columns,data)=>{
    console.log(data)
    columns=[{
        accessorKey:'orderNumber',
        header:'Order Number'
    },{
        accessorKey:'serialNumber',
        header:'Serial Number'
    },{
        accessorKey:'productCode',
        header:'Product Code'
    },{
        accessorKey:'requester',
        header:'Requester'
    },{
        accessorKey:'sanDomain',
        header:'San Domain'
    },{
        accessorKey:'status',
        header:'Status'
    }]    

    data=[{
        orderNumber:0,
        serialNumber:3412312322,
        productCode:601,
        requester:'Peter Uba',
        sanDomain:'www.certum.com',
        status:'Enrolled'


    },{
        orderNumber:1,
        serialNumber:3412312323,
        productCode:602,
        requester:'Peter Uba',
        sanDomain:'www.certum.com',
        status:'Revoked'


    },{
        orderNumber:2,
        serialNumber:3412312324,
        productCode:603,
        requester:'Peter Uba',
        accesorKey:'www.certum.com',
        status:'Revoked',
        sanDomain:'www.certum.com'


    },{
        orderNumber:3,
        serialNumber:3412312325,
        productCode:604,
        requester:'Peter Uba',
        accesorKey:'www.certum.com',
        status:'Enrolled',
        sanDomain:'www.certum.com'


    }]
    
    return(
        <section    className='w-full   h-full'>
            <DataTable  columns={certificateColumns}  data={data}/>
    </section>  
    )
      

}