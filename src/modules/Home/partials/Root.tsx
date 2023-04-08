import Image from 'next/image';
import Link from 'next/link';
//
import { icons } from '@libs/Icons';


const Root = () => {


  // --- section one --- //
  const __renderSectionone = () => {
    return (
      <div className='flex gap-[60px]' >

        <div className='flex-1' >
          <p className='text-[#827557] text-[20px] leading-[2]' >
            Cornucopia, a once bountiful nation of fruits, has fallen prey to The Great Rot - a drought of catastrophic proportions that has left the land fruitless and barren. The fruits of the land, once <span className='wu' >plump</span> (adj) and <span className='wu' >juicy</span> (adj), now lie withered and rotten, unable to peel themselves from the grip of this nefarious affliction. The rotten <span className='wu' >fruits</span> (noun) are wreaking havoc across the land, their insatiable appetite driving them to prey on the helpless and defenseless fruits and berries.
          </p>

          <a className='flex items-center gap-1 text-[#e7e7e7] justify-end cursor-pointer text-[17px] mt-4 underline' >
            <span> {icons.twitter} </span>
            <span> Tweet Y(our) Roots </span>
          </a>
        </div>

        <div className='flex-1' >
          <div className='max-w-[400px]' >
            <Image src='/images/roots/farm.png' layout='responsive' width={1} height={1} objectFit='contain' className='z-[-10]' />
          </div>
        </div>

      </div>
    )
  }


  // --- section two --- //
  const __renderSectionTwo = () => {
    return (
      <div className='flex gap-[60px] mt-12' >

        <div className='flex-1' >
          <div className='max-w-[400px]' >
            <Image src='/images/roots/election.png' layout='responsive' width={1} height={1} objectFit='contain' className='z-[-10]' />
          </div>
        </div>

        <div className='flex-1' >
          <p className='text-[#827557] text-[20px] leading-[2] text-end' >
            The fruits were left to wither and rot, their once-thriving communities reduced to nothing more than barren wastelands. However, a glimmer of hope emerged from the outskirts of <span className='wu' >Orangetown</span> (n town), where a young farmer named Corey Peel (Current President 2023-present) decided to take action. for the fruits to flourish once again. With a determined spirit and a <span className='wu' >heart</span> (n) full of <span className='wu' >ambition</span> (n), President Peel established a new colony for the fruits to flourish once again. Here, amidst the verdant fields and fertile soil, the fruits can start to rebuild what they have lost and reclaim their land, one seed at a time.
          </p>

          <div className='mt-8 flex flex-wrap justify-between' >

            <Link href='/' >
              <h1 className='flex text-[#e7e7e7] transition-all hover:opacity-70 text-[22px] mt-[-15px] uppercase cursor-pointer' > 
                <span> learn more about </span>
                <span className='text-[#7e7df7]' > Presidant corey peel </span>
              </h1>            
            </Link>

            <a className='flex items-center gap-1 text-[#e7e7e7] justify-end cursor-pointer text-[17px] underline' >
              <span> {icons.twitter} </span>
              <span> Tweet Y(our) Roots </span>
            </a>      
                  
          </div>
        </div>

      </div>
    )
  }


  return (
    <div id='__root' className='relative w-full h-[1475px] mt-[-40px]' >
      <Image src='/images/roots/roots-bg.png' layout='fill' className='z-[-10]' />

      <div className='absolute inset-0 pt-[100px]' >
        <div className='container' >

          <div className='max-w-[380px] mx-auto mt-[140px]' >
            <Image src='/images/roots/title.png' layout='responsive' width={1} height={.5} className='z-[-10]' />
          </div>

          <div>
            {__renderSectionone()}
            {__renderSectionTwo()}
          </div>

        </div>
      </div>

    </div>
  )
};

export default Root;