"use client"
import React from 'react'
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel,
    SortingState,
    getFilteredRowModel,
    ColumnFiltersState,
    getSortedRowModel
  } from "@tanstack/react-table"
   
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    
  } from "./table"
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { DropdownMenuContent } from './dropdown-menu'
import { Button } from './button'
import  {cn}  from  '../lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import{Calendar} from './calendar'
import { DateRange } from 'react-day-picker'
import { addDays, format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'

  interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
  }
   
  export function DataTable<TData, TValue>({
    columns,
    data,
  }: DataTableProps<TData, TValue>) {
    
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [date, setDate] = React.useState<DateRange | undefined>({
      from: new Date(),
      to: addDays(new Date(), 5),
    })

    
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      onSortingChange: setSorting,
      getSortedRowModel: getSortedRowModel(),
      state: {
        sorting,
      },
    })


   

        return (
            <div className="rounded-t-[1.2rem] border bg-white  shadow-md  w-full  max-h-full  h-auto  overflow-y-auto my-6">
              <Table>
                <TableHeader    className='bg-gray-400/40   text-black'>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                        {console.log()}
                        return (
                          <TableHead key={header.id}    className='text-center'>
                            {header.isPlaceholder
                              ? null
                              :header.column.columnDef.header=='Order Date'? 
                                <Popover >
                      
                                <PopoverTrigger className=''  >{flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}</PopoverTrigger>
                                <PopoverContent className='bg-white rounded-[0.3rem]  shadow-md'>
                                <div className="grid  gap-2">
                                    <Popover>
                                    <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full rounded-[0.4rem] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-white" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
                                    </Popover>
                                  </div>
                                  <p className="text-xs my-2  font-semibold">Filter by Month.</p>
                                </PopoverContent>
                              </Popover>

                              
                              
                              
                              
                              :header.column.columnDef.header=='Status'?<DropdownMenu>
                                  <DropdownMenuTrigger>
                                  {flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent  className='bg-white font-normal text-[12px] text-center gap-3 rounded-[0.4rem]  shadow-md'>
                                      <DropdownMenuItem className='h-8  hover:border-b-2  hover:border-b-gray-400/40  hover:font-semibold'>Pending</DropdownMenuItem>
                                      <DropdownMenuItem className='h-8  hover:border-b-2  hover:border-b-gray-400/40  hover:font-semibold'>Successful</DropdownMenuItem>
                                      <DropdownMenuItem className='h-8  hover:border-b-2  hover:border-b-gray-400/40  hover:font-semibold'>Failed</DropdownMenuItem>
                                      <DropdownMenuItem className='h-8  hover:border-b-2  hover:border-b-gray-400/40  hover:font-semibold'>Cancelled</DropdownMenuItem>


                                  </DropdownMenuContent>

                              </DropdownMenu>:flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                          </TableHead>
                        )
                      })}
                     
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                      <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && "selected"}
                     className='text-center ' >
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}  className='hover:text-blue-400  hover:font-semibold' >
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </TableCell>
                        ))}
                       
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={columns.length} className="h-24 text-center">
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
              <div className="flex items-center justify-end space-x-2 py-4  absolute">
        <Button
          variant="outline"
          className='rounded-[0.2rem]'
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          className='rounded-[0.2rem]'
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
            </div>
         )}