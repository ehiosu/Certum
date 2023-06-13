"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./dropdown-menu"
import { BsThreeDotsVertical } from "react-icons/bs"
import React from "react"
import { Calendar, CalendarIcon } from "lucide-react"
import { Button } from "./button"
import { cn } from "../lib/utils"
import  {Popover, PopoverContent, PopoverTrigger}  from    './popover'
export  type   Certificate={    
    orderNumber:number,
    serialNumber:number,
    productCode:number,
    requester:string,
    sanDomain:string,
    status:string
}


export const  certificateColumns :  ColumnDef<Certificate>[]=[{
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
},{
    id:'actions',
    cell:({row})=>{
        const certificate=row.original
        return(
            <DropdownMenu>
                            <DropdownMenuTrigger    className=' transition-all  outline-none active:rotate-90   '>
                                <BsThreeDotsVertical       />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent    className='bg-white rounded-[0.4rem]    text-center h-32  p-1'>
                                <DropdownMenuItem   className='flex items-center    justify-center  outline-none'>Revoke</DropdownMenuItem>
                                <DropdownMenuSeparator  className='bg-gray-400/20'/>
                                <DropdownMenuItem   className='flex items-center    justify-center  outline-none'>Re-issue</DropdownMenuItem>
                                <DropdownMenuSeparator   className='bg-gray-400/20'/>
                                <DropdownMenuItem   className='flex items-center    justify-center  outline-none'>Download</DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
        )
    }
}]
export  type   Order={    
    orderNumber:number,
   requesterName:string,
   productName:string,
   orderDate:string,
   status:string
}

export const  orderColumns :  ColumnDef<Order>[]=[{
    accessorKey:'orderNumber',
    header:'Order Number'
},{
    accessorKey:'requesterName',
    header:'Requester Name'
},{
    accessorKey:'productName',
    header:'Product Name'
},{
    accessorKey:'orderDate',
    header:'Order Date'
},{
    accessorKey:'status',
    header:'Status'
},{
    id:'actions',
    cell:({row})=>{
        const order=row.original
       
        return(
            <DropdownMenu  >
                            <DropdownMenuTrigger    className=' transition-all  outline-none active:rotate-90   '>
                                <BsThreeDotsVertical       />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent    className='bg-white rounded-[0.4rem]    text-center   p-1'>
                            <DropdownMenuItem   className='flex items-center    justify-center  outline-none'>
                                   Cancel Order
                                </DropdownMenuItem>
                                <DropdownMenuSeparator  className='bg-gray-400/20'/>
                                <DropdownMenuItem   className='flex items-center    justify-center  outline-none'>
                                   San Entries
                                </DropdownMenuItem>
                                <DropdownMenuSeparator  className='bg-gray-400/20'/>
                                <DropdownMenuItem   className='flex items-center    justify-center  outline-none'>
                                   Export(1)
                                </DropdownMenuItem>
                                <DropdownMenuSeparator   className='bg-gray-400/20'/>
                                <DropdownMenuItem   className='flex items-center    justify-center  outline-none'>Export(all)</DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
        )
    }
}]