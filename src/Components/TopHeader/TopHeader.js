import React from 'react';
import indiaIcon from '../../Assets/Images/asset 0.png';
import usIcon from '../../Assets/Images/asset 1.png';
import ukIcon from '../../Assets/Images/uk-flag.png';

const TopHeader = () => {
  const contactNumbers = [
    {
      id: '1',
      icon: indiaIcon,
      number: '+91 8000 161161'
    },
    {
      id: '2',
      icon: usIcon,
      number: '+1 309 791 4105'
    },
    {
      id: '3',
      icon: ukIcon,
      number: '+44 20 8133 8639'
    }
  ];

  return (
    <>
      {/* Top Header Container */}
      <div className='top-header-container hidden xl:block'>
        <div className='flex items-center justify-between w-10/12 mx-auto py-2  '>
          <div className='contacts flex items-center '>
            {contactNumbers.map((number) => (
              <div className='flex items-center mr-5' key={number.id}>
                <img src={number.icon} alt='India Flag' />
                <span className='text-sm font-normal ml-3'>{number.number}</span>
              </div>
            ))}
          </div>
          <div className='buttons flex items-center '>
            <button className=' text-sm py-2 px-4 rounded-full mr-1 shadow-gray-300 shadow bg-white '>Press Release</button>
            <button className=' text-sm py-2 px-4 rounded-full shadow-gray-300 shadow bg-white '>Our Fresh Work</button>
            <button className=' text-sm py-2 px-4 rounded-full ml-4 shadow-gray-300 shadow bg-[#4842a8] text-[#ffffff]'>Schedule Call</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
