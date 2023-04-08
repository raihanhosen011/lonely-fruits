import { useState } from 'react';
import Image from 'next/image';
//
import { coreData } from '@config/constants';
import { CoreDataTypes } from '@config/types';


const Core = () => {

  // states
  const [activeIndex, setActiveIndex] = useState<number | null>()

  return (
    <div id='__core' className='relative w-full h-[1020px] mt-[-30px] pt-[16.5rem] z-[1]' >
      <Image src='/images/core/core-2.png' layout='fill' className='z-[-10]' />

      <div className='w-[80px] absolute right-[19.6%] bottom-[195px]' >
        <Image src='/images/core/loney.png' layout='responsive' width={.3} height={1} objectFit='contain' className='z-[-10]' />
      </div>

      <div className='container relative z-50' >
        <div className='flex flex-col items-center justify-center' >
           
           <div className='w-[250px]' >
              <Image src='/images/core/title.png' layout='responsive' width={1} height={.4} objectFit='contain' className='z-[-10]' />
           </div>

           <div onMouseLeave={() => setActiveIndex(null)} className='max-w-full w-[415px] mx-auto' >
              
              <div className='space-x-3 text-[#6f6f6f] flex justify-between' >
                {coreData.map((e:CoreDataTypes, i:number) => (
                  <span 
                    key={i}
                    onMouseEnter={() => setActiveIndex(i+1)}
                    className='transition-all hover:text-[#d8d8d8] cursor-pointer' 
                  > {e.label} </span>
                ))}
              </div>

              {activeIndex && <div>
                <div 
                  className=' text-[#7c7c7c] mt-3'
                  dangerouslySetInnerHTML={coreData[activeIndex-1].description} 
                ></div>
              </div>}

           </div>

        </div>  
      </div>

    </div>
  )
};

export default Core;