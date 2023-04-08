import React from 'react'

const Contact = () => {

  // render __input  
  const __renderInput = (label:string) => {
    return (
       <div className='flex flex-col'  >
            <label className='ml-2' > {label} </label>
            <input className='border-[#3a3a3a] border rounded-[15px] outline-none py-[8px] mt-1 px-[12px]' required />
       </div> 
    )
  }

  return (
    <div className='max-w-[385px]' >

        <div className='mb-6' >
           <h1 className='text-[14px] text-[#a2a2a2]' >
               <span className='text-[22px]' > Gain early access to our discord and whitelist. </span>
               this entry does not guarantee discord entry or whitelist, active members of our community will be noticed.
           </h1> 

           <h1 className='text-[23px] uppercase text-[#3a3a3a] mt-1' > we are always watching </h1>
        </div>

        <button className='text-[16px] px-[25px] py-[3px] rounded-full uppercase text-[#3a3a3a] border border-[#3a3a3a] transition-all duration-300 hover:bg-[#484848] hover:text-[#cecece]' > Connect wallet </button>

        <form>
           <div className='space-y-4 mt-8' >       
              {__renderInput("Twitter handle")} 
              {__renderInput("Discord tag (optional)")} 
           </div>

           <div className='flex justify-end' >       
               <button className='text-[16px] px-[25px] py-[5px] rounded-xl uppercase text-[#242424] bg-[#989898] mt-6' > Submit </button>
           </div> 
        </form>

    </div>
  )
}

export default Contact