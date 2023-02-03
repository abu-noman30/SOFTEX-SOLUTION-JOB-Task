import React from 'react';
import * as AIIcons from 'react-icons/ai';
import logo from '../../../../Assets/Images/logo.png';
import Calender from '../Calender/Calender';

const ScheduleCall = () => {
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
								<div className='p-12 border-b flex items-center justify-center '>
									<img src={logo} alt='' className='w-60' />
								</div>
								{/* Description */}
								<div className='py-8 flex items-center justify-center'>
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
							{/* Right Container */}
							<div className='overflow-auto flex flex-col md:items-center justify-center'>
								<Calender />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ScheduleCall;
