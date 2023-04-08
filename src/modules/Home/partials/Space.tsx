import Image from 'next/image';

const Space = () => {
  return (
    <div id='__space' className='relative w-full bg-[#111111] mt-[-30px] z-[1]' >

      <div className='max-w-[1520px] mx-auto' >
        <Image src='/images/space/space.png' layout='responsive' width={1} height={.6} className='z-[-10]' />
      </div>

      <div className='absolute z-30 inset-0' >
        <div className='container flex items-center flex-col justify-center pt-[150px]' >
           
          <div className='flex' >
            <h1 className='text-[#d4d3d3] text-[25px] uppercase' > knock knock </h1>

            <div className='w-[107px] ml-[-30px]' style={{ transform : "scaleX(1) rotateX(183deg) rotate(63deg)" }} >
              <Image src='/images/morpheus/arrow-top-white.png' layout='responsive' width={1} height={.75} />
            </div>
          </div>

          <div className='w-[400px] max-w-full cursor-pointer transition-all duration-300 hover:scale-[1.09]' >
            <Image src='/images/space/black-hole.png' layout='responsive' width={1} height={1} />
          </div>
           
        </div>
      </div>

    </div>
  )
};

export default Space;