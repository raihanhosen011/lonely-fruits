import Image from 'next/image'
import React from 'react'
//
import { logo_white, logo_black } from '@config/constants'


const Brand = () => {
  return (
    <div className='w-[100px] md:w-[140px] group relative cursor-pointer' >
      <div className='w-full absolute top-0 opacity-100 group-hover:opacity-0 hover:opacity-0' >
        <Image src={logo_black} width={1} height={1} layout='responsive' className='' />  
      </div>

      <div className='w-full opacity-0 group-hover:opacity-100' >
        <Image src={logo_white} width={1} height={1} layout='responsive' className='' />  
      </div>
    </div>
  )
}

export default Brand