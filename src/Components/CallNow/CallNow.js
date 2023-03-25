import React, { useState } from 'react';
import callIcon from '../../Assets/Images/asset 18.png';
import usIcon from '../../Assets/Images/asset 1.png';
import ukIcon from '../../Assets/Images/uk-flag.png';

const CallNow = () => {
  const [toggle, setToggle] = useState(false);
  const contactNumbers = [
    {
      id: '1',
      icon: ukIcon,
      number: '+91 8000 161161'
    },
    {
      id: '2',
      icon: usIcon,
      number: '+1 309 791 4105'
    }
  ];
  return (
    <>
      {/* Call Now Container */}
      <div className='call-now-container'>
        <div className='fixed bottom-1/2 top-1/2 right-0 flex items-center justify-end'>
          <button type='button' className='flex items-center justify-center text-white bg-[#4842a8]  w-12 h-12 ' onClick={() => setToggle(!toggle)}>
            <img src={callIcon} alt='' className='w-5' />
            {/*  <span className='sr-only'>Open actions menu</span>  */}
          </button>

          <div data-dial-init className={`w-[15rem] h-[15rem] bg-[#0057FF] p-5 transition-transform duration-[5000ms] ${toggle === true ? 'hidden' : ''} `}>
            <h1 className='text-white text-2xl mb-3'>Call Us Now</h1>
            <div className='text-white '>
              {contactNumbers.map((number) => (
                <a href={`tel:${number.number}`} className='flex flex-row items-center mb-2' key={number.id}>
                  <img src={number.icon} alt='India Flag' />
                  <span className='text-lg ml-3'>{number.number}</span>
                </a>
              ))}
            </div>
            <hr className='mb-3' />
            <div className='h-[4.5rem] bg-[#0056b3] flex items-center justify-center'>
              <h1 className='text-white'>Schedule Call</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallNow;

/* <button type='button' className='flex items-center justify-center text-white bg-[#4842a8]  w-12 h-12  '>
  <img src={callIcon} alt='' className='w-5' />
  {/* <span className='sr-only'>Open actions menu</span> 
</button>; 
*/
