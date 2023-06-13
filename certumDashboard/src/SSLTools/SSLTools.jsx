import React from 'react'
import  {Tabs, TabsContent, TabsList, TabsTrigger}  from'../Components/tabs'
import { Header } from '../Components/Header'
import {Label} from '../Components/label'
import { Checkbox } from '../Components/checkbox'
import { Button } from '../Components/button'
import { AiOutlineCopy } from 'react-icons/ai'
import { Input } from '../Components/input'
export const SSLTools = () => {
  return (
    <section    className='flex-grow   min-h-full   overflow-y-auto      scroll-smooth'>
        <Header Heading={'SSL Tools'}/>
    <div className="w-full  h-auto  my-4">
    <Tabs   defaultValue='checker' className='w-full    grid grid-cols-4  gap-4 '  orientation='vertical'>
    <TabsList className="grid w-full grid-cols-1    lg:col-span-1   col-span-3    h-72  shadow-md     bg-white    gap-2   rounded-[0.2rem]    ">
        <TabsTrigger value="checker"  className='col-span-1  data-[state=active]:font-semibold   data-[state=active]:border-b-2  border-blue-400    outline-none    data-[state=inactive]:hover:border-b-2  data-[state=inactive]:hover:border-blue-400/40  transition-all  h-8 data-[state=inactive]:text-neutral-400  data-[state=inactive]:font-normal'>SSL Checker</TabsTrigger>
        <TabsTrigger    className='col-span-1    data-[state=active]:font-semibold   data-[state=active]:border-b-2  border-blue-400    outline-none    data-[state=inactive]:hover:border-b-2  data-[state=inactive]:hover:border-blue-400/40  transition-all  h-8 data-[state=inactive]:text-neutral-400  data-[state=inactive]:font-normal' value="decoder">CSR Decoder</TabsTrigger>
        <TabsTrigger    className='col-span-1    data-[state=active]:font-semibold   data-[state=active]:border-b-2  border-blue-400    outline-none    data-[state=inactive]:hover:border-b-2  data-[state=inactive]:hover:border-blue-400/40  transition-all  h-8 data-[state=inactive]:text-neutral-400  data-[state=inactive]:font-normal' value="cdecoder">Certificate Decoder</TabsTrigger>
        <TabsTrigger    className='col-span-1    data-[state=active]:font-semibold   data-[state=active]:border-b-2  border-blue-400    outline-none    data-[state=inactive]:hover:border-b-2  data-[state=inactive]:hover:border-blue-400/40  transition-all  h-8 data-[state=inactive]:text-neutral-400  data-[state=inactive]:font-normal' value="matcher">Key Matcher</TabsTrigger>
        <TabsTrigger    className='col-span-1    data-[state=active]:font-semibold   data-[state=active]:border-b-2  border-blue-400    outline-none    data-[state=inactive]:hover:border-b-2  data-[state=inactive]:hover:border-blue-400/40  transition-all  h-8 data-[state=inactive]:text-neutral-400  data-[state=inactive]:font-normal' value="converter">SSL Generator</TabsTrigger>
        <TabsTrigger    className='col-span-1    data-[state=active]:font-semibold   data-[state=active]:border-b-2  border-blue-400    outline-none    data-[state=inactive]:hover:border-b-2  data-[state=inactive]:hover:border-blue-400/40  transition-all  h-8 data-[state=inactive]:text-neutral-400  data-[state=inactive]:font-normal' value="generator">CSR Generator</TabsTrigger>



      </TabsList>
    <TabsContent    className=' bg-white   lg:col-span-3    col-span-4   shadow-md   h-full  mt-0    rounded-[0.4rem]    p-4'   value='checker'>
        <div className="flex    items-center    gap-2   justify-center">
            <span   className='w-[45%]  h-[1px] bg-black/40'> </span>
            <p className="font-semibold whitespace-nowrap   w-[12%] text-center">Server Details</p>
            <span   className='w-[45%]  h-[1px] bg-black/40'> </span>

        </div>
        <div className="flex    gap-4   items-center    h-auto my-2">
            <p className="font-semibold  text-[14px]">
                Enter Host Name
            </p>
            <input type="text" name="" id=""    placeholder='www.certum.ng' className='border border-gray-400/40    w-[60%]    p-2  rounded-[0.4rem]    outline-none    h-8' />

        </div>
        <div className="h-12   my-2 flex    justify-end items-center space-x-2">
        <label
        htmlFor="www"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
       include www?
      </label>
            <Checkbox  className='  data-[state=checked]:bg-black      data-[state=checked]:text-white   ' id='www'/>
            
        </div>
        <div className="w-full  h-40 rounded-[0.4rem]  border-[3px] border-gray-400/40    p-4">
            <p className="text-neutral-400 font-bold">
                This Section Displays Validity of SSL Cetificate Validity.
            </p>
        </div>

        <div className="flex space-x-4  my-4">
            <Button className='border-[2px] border-gray-400/40 text-black rounded-[0.3rem] font-normal w-32 hover:shadow-md hover:bg-black hover:text-white'>
                Check SSL
            </Button>
            <Button className='border-[2px] border-gray-400/40 text-black rounded-[0.3rem] font-normal w-32 hover:shadow-md hover:bg-black hover:text-white'>
                Cancel 
            </Button>   
        </div>

    </TabsContent>
    <TabsContent    className=' bg-white   lg:col-span-3 col-span-4   shadow-md   h-full  mt-0    rounded-[0.4rem]    p-4'   value='decoder'>
       
        <p className="text-center   w-full  h-10    text-neutral-400    text-[14px]">Use this CSR Decoder  to decode your <span    className='text-blue-400'>Certificate Signing Request</span></p>
        <p className="text-center   w-full  h-10    text-neutral-400    text-[12px] my-2"> openssl x509 -in certificate.crt text -noout</p>
        <div className="flex    lg:h-60 h-full gap-4   lg:flex-row flex-col my-4    p-3">
            <div className="lg:w-1/2   w-full   bg-transparent  border-2 border-gray-400/40  h-full   rounded-[0.2rem] ">
               <textarea  name="" className='w-full h-full  outline-none placeholder:text-neutral-400   p-2 max-h-full'  placeholder='Paste text here'  id="" />
            </div>
            <div className="lg:w-1/2   w-full   bg-transparent  border-2 border-gray-400/40  h-full   rounded-[0.2rem] ">

</div>

        </div>
        <div className="flex space-x-4  my-4">
            <Button className='border-[2px] border-gray-400/40 text-black rounded-[0.3rem] font-normal w-32 hover:shadow-md hover:bg-black hover:text-white'>
                Check SSL
            </Button>
            <Button className='border-[2px] border-gray-400/40 text-black rounded-[0.3rem] font-normal w-32 hover:shadow-md hover:bg-black hover:text-white'>
                Cancel 
            </Button>   
        </div>

    </TabsContent>
    <TabsContent    className=' bg-white   lg:col-span-3 col-span-4   shadow-md   h-full  mt-0    rounded-[0.4rem]    p-4'   value='cdecoder'>
       
       <p className="text-center   w-full  h-10    text-neutral-400    text-[14px]">Use this CSR Decoder  to decode your <span    className='text-blue-400'>PEM encoded SSL Certificate</span></p>
       <p className="text-center   w-full  h-10    text-neutral-400    text-[12px] my-2"> openssl x509 -in certificate.crt text -noout</p>
       <div className="flex    lg:h-60 h-full gap-4   lg:flex-row flex-col my-4    p-3">
           <div className="lg:w-1/2   w-full   bg-transparent  border-2 border-gray-400/40  h-full   rounded-[0.2rem] ">
              <textarea  name="" className='w-full h-full  outline-none placeholder:text-neutral-400   p-2 max-h-full'  placeholder='Paste Certificate here'  id="" />
           </div>
           <div className="lg:w-1/2   w-full   bg-transparent  border-2 border-gray-400/40  h-full   rounded-[0.2rem] ">

</div>

       </div>
       <div className="flex space-x-4  my-4">
           <Button className='border-[2px] border-gray-400/40 text-black rounded-[0.3rem] font-normal w-32 hover:shadow-md hover:bg-black hover:text-white'>
               Check SSL
           </Button>
           <Button className='border-[2px] border-gray-400/40 text-black rounded-[0.3rem] font-normal w-32 hover:shadow-md hover:bg-black hover:text-white'>
               Cancel 
           </Button>   
       </div>

   </TabsContent>
   <TabsContent    className=' bg-white   lg:col-span-3 col-span-4   shadow-md   h-full  mt-0    rounded-[0.4rem]    p-4'   value='matcher'>
    <p className="w-full    text-start text-neutral-400">
        You can use this Certificate Key Matcher to check whether a private key matches a certificate or whether a certifcate matches a  Certificate Signing Request (CSR).
    </p>
    <div className="flex    justify-center  items-center my-4   gap-4">
    <Button className='border-[3px] border-gray-400/40 text-black rounded-[0.3rem] font-normal w-80 hover:shadow-md hover:bg-black hover:text-white'>
               Check Certificate Against Private Key
           </Button>
           <Button className='border-[3px] border-gray-400/40 text-black rounded-[0.3rem] font-normal w-80 hover:shadow-md hover:bg-black hover:text-white'>
               Check CSR against Cetificate 
           </Button>

    </div>

    <div className="flex    lg:h-60 h-full gap-4   lg:flex-row flex-col my-4    p-3">
           <div className="lg:w-1/2   w-full   bg-transparent  border-2 border-gray-400/40  h-full   rounded-[0.2rem] ">
              <textarea  name="" className='w-full h-full  outline-none placeholder:text-neutral-400   p-2 max-h-full'  placeholder='Enter Certificate here'  id="" />
           </div>
           <div className="lg:w-1/2   w-full   bg-transparent  border-2 border-gray-400/40  h-full   rounded-[0.2rem] ">

</div>

       </div>

       <div className="relative w-full  h-40 p-2 bg-gray-400/40 rounded-[0.4rem]">
            <p className="font-semibold text-neutral-500">
                Reuslts will be displayed here.
            </p>

            <div className="flex    absolute right-[0.5rem] bottom-[0.5rem] items-center    gap-2   text-neutral-500    hover:text-blue-400 hover:cursor-pointer">
                <p className="font-semibold">
                    Copy
                </p>
                <AiOutlineCopy/>
            </div>
       </div>
   </TabsContent>
   
   <TabsContent    className=' bg-white   lg:col-span-3 col-span-4   shadow-md   h-full  mt-0    rounded-[0.4rem]    p-4'   value='converter'>

    <p  className='text-neutral-400 lg:text-[16px] text-xs text-center'>Use this SSL converter to convert SSLs to and from different formats such as pem,der,p7b and pfx.</p>

    <div className="my-2    flex lg:items-center    lg:flex-row flex-col   gap-2   lg:h-20  h-28">
        <p className="font-semibold mt-3">
            Certificate File to Convert:
        </p>
        <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="certifcate">Preview</Label>
      <Input id="certifcate" type="file" />
    </div>
   

    </div>
    <div className="flex  lg:flex-row  flex-col  gap-2 lg:items-center  h-20 my-2">
    <p className="font-semibold ">
            Type of Certificate to Convert:
        </p>
        <div className="lg:w-96 w-full border border-black text-neutral-400 p-2 text-[14px] h-10">
            <p className="font-semibold ">
                Standard PEM
            </p>
        </div>
    </div>

    <div className="flex    gap-2 lg:items-center  h-20 my-2   lg:flex-row flex-col">
    <p className="font-semibold ">
            Type of Converted Certificate:
        </p>
        <div className="lg:w-96 w-full border border-black text-neutral-400 p-2 text-[14px] h-10">
            <p className="font-semibold ">
                DER/Binary
            </p>
        </div>
    </div>

    <Button className='border border-black text-black   hover:border-white font-normal lg:w-80  w-full hover:shadow-md hover:bg-black hover:text-white my-2 lg:ml-56   '>
               Convert Cetificate 
           </Button>
   </TabsContent>
   <TabsContent    className=' bg-white   lg:col-span-3 col-span-4   shadow-md h-auto  min-h-full  mt-0    rounded-[0.4rem]    p-4'   value='generator'>
        <div className="w-full  grid h-[60vh] grid-cols-2 p-3 ">
            <div className="col-span-1  h-full">
                <div className="flex    items-center    gap-2   justify-center">
                    <span   className='h-[1px]  w-1/3   bg-gray-400'></span>
                        <p className="font-semibold text-black">Certificate Details</p>
                    <span   className='h-[1px]  w-1/3   bg-gray-400'>  </span>
                </div>  

                <div className="flex    items-center    w-full  h-12   gap-3">
                    <p className="font-semibold">DNS Names:</p>
                    <input type="text" name=""  className='flex-1   outline-none  border border-black  p-2  h-7 ' id="" />
                </div>

                 <div className="flex    items-center    w-full  h-12   gap-3">
                    <p className="font-semibold">Organization:</p>
                    <input type="text" name=""  className='flex-1   outline-none  border border-black  p-2  h-7 ' id="" />
                </div> 
                 <div className="flex    items-center    w-full  h-12   gap-3">
                    <p className="font-semibold">Department:</p>
                    <input type="text" name=""  className='flex-1   outline-none  border border-black  p-2  h-7 ' id="" />
                </div> 

                 <div className="flex    items-center    w-full  h-12   gap-3">
                    <p className="font-semibold">City:</p>
                    <input type="text" name=""  className='flex-1   outline-none  border border-black  p-2  h-7 ' id="" />
                </div>

                 <div className="flex    items-center    w-full  h-12   gap-3">
                    <p className="font-semibold">State  / Province:</p>
                    <input type="text" name=""  className='flex-1   outline-none  border border-black  p-2  h-7 ' id="" />
                </div>

                 <div className="flex    items-center    w-full  h-12   gap-3">
                    <p className="font-semibold">Country:</p>
                    <input type="text" name=""  className='flex-1   outline-none  border border-black  p-2  h-7 ' id="" />
                </div>
                 <div className="flex    items-center    w-full  h-12   gap-3">
                    <p className="font-semibold">Key Size:</p>
                    <input type="text" name=""  className='flex-1   outline-none  border border-black  p-2  h-7 ' id="" />
                </div>
                <Button className='border-[3px] border-gray-400/40 text-black rounded-[0.3rem] font-normal w-48 hover:shadow-md hover:bg-black hover:text-white mx-auto flex    justify-center'>
               Generate 
           </Button> 

            </div>
            <div className="col-span-1">
                 <div className="flex    items-center    gap-2   justify-center">
                    <span   className='h-[1px]  w-1/3   bg-gray-400'></span>
                        <p className="font-semibold text-black">Information </p>
                    <span   className='h-[1px]  w-1/3   bg-gray-400'>  </span>
                </div>  
            </div>
        </div>
   </TabsContent>

  
    </Tabs>
    </div>

    </section>
  )
}
