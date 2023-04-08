import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Looney = () => {

    // refs
    const videoRef = useRef(null);

    // play and pause
    const handlePlay = () => {
        const video: any = videoRef.current;
        video.play();
    };

    // effects
    useEffect(() => {
        handlePlay()
    }, [videoRef])


    return (
        <div className='max-w-[390px] relative' >
            <video ref={videoRef} autoPlay loop preload='auto' >
                <source src='/images/morpheus/morpheus-talking.mp4' type='video/mp4' />
            </video>

            <div className='absolute inset-0' >
                <div>
                    <div className='flex absolute bottom-[220px] left-[-40px]' >
                        <h1 className='text-[#424242] text-[17px] uppercase' > Twitter </h1>

                        <div className='w-[35px] ml-[13px] mt-[7px] rotate-[52deg]' >
                            <Image src='/images/morpheus/arrow-right.png' layout='responsive' width={1} height={.75} />
                        </div>
                    </div>

                    <a href='https://twitter.com/looneyfruits' target='_blank' rel="noreferrer" >
                        <div className='w-[10px] absolute bottom-[199px] left-[85px] cursor-pointer transition-all duration-300 hover:scale-[1.7]' >
                            <Image src='/images/morpheus/red-seed.png' layout='responsive' width={1} height={1} />
                        </div>
                    </a>

                </div>


                <div>
                    <div className='flex absolute bottom-[220px] right-[-40px]' >
                        <div className='w-[35px] mr-[13px] mt-[7px] rotate-[-52deg]' >
                            <Image src='/images/morpheus/arrow-left.png' layout='responsive' width={1} height={.75} />
                        </div>

                        <h1 className='text-[#424242] text-[17px] uppercase' > Discord </h1>
                    </div>

                    <a href='https://discord.com/' target='_blank' rel="noreferrer" >
                        <div className='w-[10px] absolute bottom-[199px] right-[85px] cursor-pointer transition-all duration-300 hover:scale-[1.7]' >
                            <Image src='/images/morpheus/blue-seed.png' layout='responsive' width={1} height={1} />
                        </div>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Looney