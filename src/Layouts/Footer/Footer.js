import React from 'react';
import Copyright from './Components/Copyright/Copyright';
import Locations from './Components/Locations/Locations';
import Services from './Components/Services/Services';
import Subscription from './Components/Subscription/Subscription';

const Footer = () => {
	return (
		<>
			{/*  Footer Container */}
			<div className='footer-container '>
				{/* Services Container */}
				<div className='services-container'>
					<Services />
				</div>
				{/* Location Container */}
				<div className='location-container '>
					<Locations />
				</div>
				{/* Subscribtion Container */}
				<div className='subscribtion-container'>
					<Subscription />
				</div>
				{/* CopyRight Container */}
				<div className='copyright-container'>
					<Copyright />
				</div>
			</div>
		</>
	);
};

export default Footer;
