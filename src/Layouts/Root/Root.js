import React from 'react';
import arrowIcon from '../../Assets/Images/asset 13.png';
import CallNow from '../../Components/CallNow/CallNow';
import SocialMedia from '../../Components/SocialMedia/SocialMedia';
import TopHeader from '../../Components/TopHeader/TopHeader';
import WhatsApp from '../../Components/WhatsApp/WhatsApp';
import ScheduleCall from '../Footer/Components/ScheduleCall/ScheduleCall';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Root.modules.css';

const Root = () => {
	return (
		<>
			
			{/* Top Header Section */}
			<section className='top-header'>
				<TopHeader />
			</section>
			{/* Navbar Section */}
			<section className='navbar-section'>
				<Navbar />
			</section>
			{/* Schedule Call Section */}
			<section className='schedule-call-section'>
				<ScheduleCall />
			</section>
			{/* Get A Quote Section */}
			<section className='get-a-quote-Section bg-[#1f1f1f] '>
				<div className='w-full shadow-lg'>
					{/* Social Media Section */}
					<section className='social-media-section'>
						<SocialMedia />
					</section>
					<div className='flex flex-col items-center justify-center p-4 -mt-48 '>
						<div className='relative block mx-auto'>
							{/* Advertise Container */}
							<div className='advertise-container '>
								<div id='content-box' className='w-full bg-[#4842a8] rounded-3xl relative flex flex-col text-white items-center justify-center py-10'>
									<h1 className='text-3xl font-medium mb-5 text-center'>Let’s Create Big Stories Together</h1>
									<p className='text-lg mb-8 w-10/12 text-center'>Mobile is in our nerves. We don’t just build apps, we create brand. Choosing us will be your best decision.</p>

									<button className='flex items-center justify-center bg-[#dc2e3d] py-3 px-3'>
										<span>Get A Quote </span>
										<span>
											<img src={arrowIcon} alt='' className='ml-4' />
										</span>
									</button>
								</div>
							</div>
						</div>
						{/* Footer Section */}
						<section className='footer-section text-white'>
							<Footer />
						</section>
					</div>
				</div>
				{/* Speed Dail - WhatsApp Section */}
				<section className='whats-app-section'>
					<WhatsApp />
				</section>
				{/* Call Now - Call Now Section */}
				<section className='call-now-section'>
					<CallNow />
				</section>
			</section>
		</>
	);
};

export default Root;
