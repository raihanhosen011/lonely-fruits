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
                <a key={i} href={`#${e.label.toLowerCase().replace('', '-')}`} >
                    <Menu {...e} />
                </a>
            ))}

            <div className='flex gap-3 justify-center' >
                {socialMedia.map((e: any, i: number) => (
                    <a key={i} href={e.link} target='_blank'  rel="noreferrer" className='mt-[8px]' >
                        <span className={cx('text-[26px] text-white', e.className)} > {icons[e.icon]} </span>
                    </a>
                ))}                
            </div>
        </div>
    )
}

export default Mobile