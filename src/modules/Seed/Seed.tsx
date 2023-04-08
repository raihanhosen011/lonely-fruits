import Image from 'next/image'
import React from 'react'
//
import Looney from './partials/Looney'
import Contact from './partials/Contact'
import Link from 'next/link'


const Seed = () => {
  return (
    <div className='container xl:!max-w-[930px] py-10' >

      <h1 className='uppercase text-center text-[35px]' > Chose a seed </h1>

      <Link href='/' >
        <div className='w-fit cursor-pointer' >
          <div className='w-[38px]' >
            <Image src='/images/morpheus/arrow-top.png' layout='responsive' width={1} height={.75} />
          </div>

          <h1 className='text-[#9d9d9d] text-[21px] uppercase text-center mr-[-25px]' > Back </h1>
        </div>      
      </Link>


      <div className='flex gap-6 justify-between mt-10' >
         <Looney />
         <Contact />
      </div>

    </div>
  )
}

export default Seed