import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
	const [selected, setSelected] = useState(new Date());

	return (
		<>
			{/* Calender Container */}
			<div className='calender-container  '>
				<h1 className='text-lg font-semibold p-5 text-center md:text-left'>Select a Date & Time</h1>

				<DayPicker mode='single' selected={selected} onSelect={setSelected} />

				<h1 className='text-lg font-semibold p-5 text-left'>Time zone</h1>
			</div>
		</>
	);
};

export default Calender;
