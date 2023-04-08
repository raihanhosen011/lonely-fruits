import React, { useState } from 'react'
import Link from 'next/link'
import { Drawer } from '@mantine/core'
//
import Menu from '@components/Menu'
import { cx, menuItems, socialMedia } from '@config/constants'
import { MenuProps } from '@config/types'
import Brand from '@components/Brand'
import { icons } from '@libs/Icons'
import Mobile from './partials/Mobile'


const Header = () => {

  // state
  const [opened, setOpened] = useState(false)

  return (
    <div className='fixed z-10 w-full' >
      <div className='container' >
        <div className='flex items-center justify-between py-4' >

          <Brand />

          <div className='gap-6 hidden md:flex' >
            {menuItems.map((e: MenuProps, i: number) => (
                <Menu key={i} {...e} />
            ))}

            {socialMedia.map((e: any, i: number) => (
              <a href={e.link} target='_blank' className='mt-[8px]' >
                <span className={cx('text-[26px] text-white', e.className)} > {icons[e.icon]} </span>
              </a>
            ))}
          </div>

          <div className='p-[6px] rounded-[6px] md:hidden' onClick={() => setOpened(true)} >
            <span className='cursor-pointer text-white text-[27px]' > {icons.hamburger} </span>
          </div>

        </div>

        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          className="drawer__"
          overlayBlur={3}
          padding="xl"
          position='left'
        >
          <Mobile setOpened={setOpened} />
        </Drawer>

      </div>
    </div>
  )
}

export default Header