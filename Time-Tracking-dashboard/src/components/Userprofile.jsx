import React from 'react';

const Userprofile = ({image, username, handleIntervalChange, selectedInterval }) => {

  return (
    <div>
      <div className="main sm:my-8 mt-4 sm:w-52 sm:h-[28.5rem] flex flex-col bg-Darkblue rounded-2xl ">
        <div className="sec-A border-w sm:h-[70%] flex flex-col  bg-Blue rounded-2xl p-8">
          <div className='flex sm:flex-col  gap-2' >
          <div className='flex justify-start '>
            <img className="img min-w-16 max-w-16 border-4 rounded-[50%]" src={image} alt="not found" />
          </div>
          <div className='flex flex-col  '>
          <div className='report text-sm sm:pt-10 opacity-80 text-white '>
            Report for
          </div>
          <div className='user sm:text-4xl text-2xl sm:pt-2 text-white '>
            {username}
          </div>
          </div>
          </div>         
        </div>
        <div className="sec-B w-full rounded-2xl flex sm:flex-col sm:pl-8 pl-6 py-4  text-sm sm:gap-6 gap-12  bg-Darkblue  cursor-pointer">
          <div className={`text-Violet ${selectedInterval === 'daily' ?  'text-white' : ''} `} onClick={() => handleIntervalChange('daily')}>Daily</div>
          <div className={`text-Violet  ${selectedInterval === 'weekly' ?  'text-white' : ''}`} onClick={() => handleIntervalChange('weekly')}>Weekly</div>
          <div className={`text-Violet   ${selectedInterval === 'monthly' ?  'text-white' : ''}`} onClick={() => handleIntervalChange('monthly')}>Monthly</div>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;
