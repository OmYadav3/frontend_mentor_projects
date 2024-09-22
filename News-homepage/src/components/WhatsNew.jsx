import React from 'react'

const WhatsNew = () => {
  return (
    <div>
      <div className="section md:w-[68%] md:ml-8 bg-darkblue text-white p-6 flex flex-col gap-2 ">
        <div className='text-5xl font-bold text-yellow-500'>New</div>
        <div className='mt-6'>
            <h1  className='text-2xl font-semibold mt-4 hover:text-yellow-500'>Hydrogen VS Electric Cars</h1>
            <p  className='my-2'> Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>

        <hr />
        
        <div className='mt-6'>
            <h1  className='text-2xl font-semibold mt-4 hover:text-yellow-500'>The Downsides of AI Artistry</h1>
            <p  className='my-2'>What are the possible adverse effects of on-demand AI image generation?</p>
        </div>

        <hr />
        
        <div className='mt-6'>
            <h1  className='text-2xl font-semibold mt-4 hover:text-yellow-500'>Is VC Funding Drying Up?</h1>
            <p  className='my-2'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
        
      </div>
    </div>
  )
}

export default WhatsNew
