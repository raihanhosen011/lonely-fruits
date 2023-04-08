import Image from 'next/image'
import React from 'react'
//
import { MenuProps } from '@config/types'
import { cx } from '@config/constants'


const Menu : React.FC<MenuProps> = ({ label, src, className, to }) => {
  return (
    <a href={`#${to}`} className='_item h-full relative flex items-center justify-center cursor-pointer group' >

      <h1 className='absolute text-[25px] top-0 opacity-100 group-hover:opacity-0 hover:opacity-0 z-20 uppercase text-white' > {label} </h1>

      <div className={cx('w-[90px] h-[37px] relative _menu-svg  opacity-0 group-hover:opacity-100', className)} >
        <Image src={`/images/menu/${src}`} objectFit='contain' layout='fill' /> 
      </div>

    </a>
  )
}

export default Menu