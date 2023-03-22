import React, { useState } from 'react';
import Calender from '../Calender/Calender';
import ScheduleDetails from '../ScheduleDetails/ScheduleDetails';
import ScheduleEventForm from '../ScheduleEventForm/ScheduleEventForm';

const ScheduleCall = () => {
  const [selected, setSelected] = useState();
  const props = {
    selected,
    setSelected
  };
  return (
    <>
      {/* ScheduleCall Container */}
      <div className='schedule-call-container w-10/12 mx-auto'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-5xl font-medium text-center my-20'>Schedule Call</h1>

          <div className='w-full h-[25rem] overflow-auto shadow-gray-300'>
            <div className='w-full xl:w-9/12 mx-auto grid grid-cols-1 xl:grid-cols-2 rounded-xl shadow border'>
              {/* Left Container */}
              <div className='border-r border-b xl:border-b-0'>
                {/* Logo Container */}
                <ScheduleDetails />
              </div>
              {/* Right Container */}
              <div className='overflow-auto flex flex-col '>
                {/* Calender */}
                <div className=''>
                  {!selected && <Calender props={props} />}
                  {selected && <ScheduleEventForm props={props} />}
                </div>

                {/* Schedule Event Form */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleCall;
