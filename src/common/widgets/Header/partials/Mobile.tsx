import React from 'react'
import Link from 'next/link'
//
import Menu from '@components/Menu'
import { cx, menuItems, socialMedia } from '@config/constants'
import { MenuProps } from '@config/types'
import { icons } from '@libs/Icons'


const Mobile = ({ setOpened } : { setOpened : any }) => {
    return (
        <div className='flex flex-col gap-2 mt-[92px]' >
            {menuItems.map((e: MenuProps, i: number) => (
                <a href={`#${e.label.toLowerCase().replace('', '-')}`} >
                    <Menu key={i} {...e} />
                </a>
            ))}

            <div className='flex gap-3 justify-center' >
                {socialMedia.map((e: any, i: number) => (
                    <a href={e.link} target='_blank' className='mt-[8px]' >
                        <span className={cx('text-[26px] text-white', e.className)} > {icons[e.icon]} </span>
                    </a>
                ))}                
            </div>
        </div>
    )
}

export default Mobile