import React from 'react';
import callIcon from '../../Assets/Images/asset 18.png';

const CallNow = () => {
  return (
    <>
      {/* Call Now Container */}
      <div className='call-now-container'>
        <div className='whats-app-container'>
          <div data-dial-init className='fixed bottom-80 right-0 group'>
            <button type='button' className='flex items-center justify-center text-white bg-[#4842a8]  w-12 h-12 '>
              <img src={callIcon} alt='' className='w-5' />
              <span className='sr-only'>Open actions menu</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallNow;
