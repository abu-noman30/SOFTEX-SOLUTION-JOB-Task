import React from 'react';
import indiaFlag from '../../../../Assets/Images/asset 0.png';
import usaFlag from '../../../../Assets/Images/asset 1.png';
import tajmahal from '../../../../Assets/Images/asset 14.png';
import getWay from '../../../../Assets/Images/asset 15.png';
import usaStatu from '../../../../Assets/Images/asset 16.png';
import london from '../../../../Assets/Images/asset 17.png';
import ukFlag from '../../../../Assets/Images/uk-flag.png';
import SingleLocationCard from '../../../../Components/SingleLocationCard/SingleLocationCard';
import './Locations.modules.css';

const Locations = () => {
	const locations = [
		{
			name: 'INDIA (HQ)',
			flag: indiaFlag,
			image: tajmahal,
			address: 'C-106/B, Ganesh Meridian, Opp. Gujarat High Court, S. G. Highway, Ahmedabad, Gujarat, 380061',
			phoneNumber: '+91 8000-161161'
		},
		{
			name: 'MUMBAI OFFICE',
			flag: indiaFlag,
			image: getWay,
			address: 'Level 8, Vibgyor Towers, G Block, C62 Bandra Kurla Complex, Mumbai 400 098',
			phoneNumber: '+91 8000-161161'
		},
		{
			name: 'USA OFFICE',
			flag: usaFlag,
			image: usaStatu,
			address: 'One World Trade Center, 285 Fulton Street suite 8500, New York, NY 10007, United States.',
			phoneNumber: '+1 309 791 4105'
		},
		{
			name: 'UK OFFICE',
			flag: ukFlag,
			image: london,
			address: 'Level 30, The Leadenhall Building, 122 Leadenhall Street, London EC3V 4AB',
			phoneNumber: '+44 20 8133 8639'
		}
	];
	return (
		<>
			{/* Locations Container */}
			<div className='locations-container w-10/12 mx-auto'>
				<div className='my-10'>
					<h1 id='locate-us' className='service text-3xl relative font-semibold mb-3 before:text-[2.8rem] md:before:text-[3.5rem] before:-mt-5'>
						Locate Us
					</h1>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3'>
					{locations.map((location, index) => (
						<div className='' key={index}>
							<SingleLocationCard location={location} />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Locations;
