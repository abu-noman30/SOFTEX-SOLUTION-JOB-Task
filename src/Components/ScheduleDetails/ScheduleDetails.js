import React from 'react';
import * as AIIcons from 'react-icons/ai';
import logo from '../../Assets/Images/logo.png';

const ScheduleDetails = () => {
  return (
    <>
      <div className='p-5'>
        <div className='pb-5 border-b flex items-center justify-center '>
          <img src={logo} alt='' className='w-60' />
        </div>
        {/* Description */}
        <div className='pt-5 flex items-center justify-center'>
          <div className='px-4 flex flex-col items-center justify-center xl:items-start'>
            <h3 className='text-sm font-semibold text-zinc-500 mb-3'>Hyperlink Infosystem</h3>
            <h1 className='text-2xl w-10/12 font-semibold text-center xl:text-left'>Introduction Call With Hyperlink Infosystem</h1>
            <p className='flex items-center my-6 '>
              <span className='mr-1 '>
                <AIIcons.AiFillClockCircle className='text-xl text-zinc-500' />
              </span>
              30 min
            </p>

            <ul className='list-decimal pl-4 py-4 text-[15px] font-light space-y-1'>
              <p className='text-[15px] font-light -ml-3'>Agenda:</p>
              <li>Introduction of Hyperlink infosystem</li>
              <li>Requirement understanding</li>
              <li>Similar work showcase</li>
              <li> Next actions</li>
            </ul>
            <p className='hidden xl:block text-xs text-blue-700 font-light'>Cookie settings</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleDetails;
