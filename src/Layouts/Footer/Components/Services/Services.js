import React from 'react';
import './Services.modules.css';

const Services = () => {
	return (
		<>
			{/* Services Container */}
			<div className='services-container w-11/12 lg:w-10/12 mx-auto'>
				<div className=' grid grid-cols-12 py-10'>
					<div className='flex flex-col  space-y-2 mt-32 text-base col-span-12 lg:col-span-4'>
						<span id='about' className='service text-3xl relative font-semibold mb-3 before:text-[3.5rem] before:-mt-5'>
							About
						</span>
						<a className='hover:text-red-600 '>Who We Are</a>
						<a className='hover:text-red-600'>Career</a>
						<a className='hover:text-red-600'>Evints</a>
						<a className='hover:text-red-600'>Services</a>
						<a className='hover:text-red-600'>Industries</a>
						<a className='hover:text-red-600'>Case Study</a>
						<a className='hover:text-red-600'>Portfolio</a>
						<a className='hover:text-red-600'>Sitemap</a>
						<a className='hover:text-red-600'>Contact Us</a>
					</div>
					<div className='flex flex-col  space-y-2 mt-32 text-base col-span-12 lg:col-span-4'>
						<span id='mobile' className='service text-3xl relative font-semibold mb-3 before:text-[3.5rem] before:-mt-5'>
							Mobile
						</span>
						<a className='hover:text-red-600'>Andriod Apps</a>
						<a className='hover:text-red-600'>iphone Apps</a>
						<a className='hover:text-red-600'>Hybrid Apps</a>
						<a className='hover:text-red-600'>Flutter</a>
						<a className='hover:text-red-600'>React Native</a>
						<a className='hover:text-red-600'>Kotlin</a>
						<a className='hover:text-red-600'>lonic</a>
						<a className='hover:text-red-600'>Swift</a>
						<a className='hover:text-red-600'>Xamrin</a>
					</div>
					<div className='flex flex-col  space-y-2 mt-32 text-base col-span-12 lg:col-span-4'>
						<span id='web' className='service text-3xl relative font-semibold mb-3 before:text-[3.5rem] before:-mt-5'>
							WEB
						</span>
						<a className='hover:text-red-600'>PHP</a>
						<a className='hover:text-red-600'>Java</a>
						<a className='hover:text-red-600'>Python</a>
						<a className='hover:text-red-600'>Wordpress</a>
						<a className='hover:text-red-600'>Drupal</a>
						<a className='hover:text-red-600'>Laravel</a>
						<a className='hover:text-red-600'>Codelgniter</a>
						<a className='hover:text-red-600'>CakePHP</a>
						<a className='hover:text-red-600'>TypeScript</a>
					</div>
					<div className='flex flex-col  space-y-2 mt-32 text-base col-span-12 lg:col-span-4'>
						<span id='ecommerce' className='service text-3xl relative font-semibold mb-3 before:text-[2.8rem] md:before:text-[3.5rem] before:-mt-5'>
							Ecommerce
						</span>
						<a className='hover:text-red-600'>Magento</a>
						<a className='hover:text-red-600'>Shopify</a>
						<a className='hover:text-red-600'>Ubercart</a>
						<a className='hover:text-red-600'>Prestashop</a>
						<a className='hover:text-red-600'>CS Cart</a>
						<a className='hover:text-red-600'>VertueMart</a>
						<a className='hover:text-red-600'>BigCommerce</a>
						<a className='hover:text-red-600'>WooCommerce</a>
					</div>
					<div className='flex flex-col  space-y-2 mt-32 text-base col-span-12 lg:col-span-4'>
						<span id='ai-ml' className='service text-3xl relative font-semibold mb-3 before:text-[3.5rem] before:-mt-5'>
							AI & ML
						</span>
						<a className='hover:text-red-600'>Text to Speech</a>
						<a className='hover:text-red-600'>Business Intelligence</a>
						<a className='hover:text-red-600'>Data Forecasting</a>
						<a className='hover:text-red-600'>Natural Language Processing</a>
						<a className='hover:text-red-600'>Data Analytics</a>
						<a className='hover:text-red-600'>Object Recognition</a>
						<a className='hover:text-red-600'>Sentimental Analysis</a>
						<a className='hover:text-red-600'>Alexa Skills Development</a>
					</div>
					<div className='flex flex-col  space-y-2 mt-32 text-base col-span-12 lg:col-span-4'>
						<span id='iot-embedded' className='service text-3xl relative font-semibold mb-3 before:text-[3.5rem] before:-mt-5'>
							IoT & Embedded
						</span>
						<a className='hover:text-red-600'>IoT App</a>
						<a className='hover:text-red-600'>Embedded Software</a>
						<a className='hover:text-red-600'>IoT Hardware Prototyping</a>
						<a className='hover:text-red-600'>IoT Dashboard and Analytics</a>
						<a className='hover:text-red-600'>Smart Home - Home Automation</a>
					</div>
					<div className='flex flex-col  space-y-2 mt-32 text-base col-span-12 lg:col-span-4'>
						<span id='blockchain' className='service text-3xl relative font-semibold mb-3 before:text-[3rem] md:before:text-[3.5rem] before:-mt-5'>
							Blockchain
						</span>
						<a className='hover:text-red-600'>Wallet</a>
						<a className='hover:text-red-600'>Exchange</a>
						<a className='hover:text-red-600'>Ethereum</a>
						<a className='hover:text-red-600'>Hyperledger</a>
						<a className='hover:text-red-600'>Smart Contracts</a>
						<a className='hover:text-red-600'>Private Blockchains</a>
						<a className='hover:text-red-600'>NFT Marketplace</a>
					</div>
					<div className='flex flex-col  space-y-2 mt-32 text-base col-span-12 lg:col-span-4'>
						<span id='game' className='service text-3xl relative font-semibold mb-3 before:text-[3.5rem] before:-mt-5'>
							Game
						</span>
						<a className='hover:text-red-600'>Unity 3D</a>
						<a className='hover:text-red-600'>Unreal Engine</a>
						<a className='hover:text-red-600'>Augmented Reality</a>
						<a className='hover:text-red-600'>Virtual Reality</a>
						<a className='hover:text-red-600'>Casual Games</a>
						<a className='hover:text-red-600'>Case Study</a>
						<a className='hover:text-red-600'>Metaverse</a>
					</div>
					<div className='flex flex-col  space-y-2 mt-32 text-base col-span-12 lg:col-span-4'>
						<span id='salesforce' className='service text-3xl relative font-semibold mb-3 before:text-[3rem] md:before:text-[3.5rem] before:-mt-5'>
							Salesforce
						</span>
						<a className='hover:text-red-600'>Salesforce Development</a>
						<a className='hover:text-red-600'>Salesforce Consulting</a>
						<a className='hover:text-red-600'>Salesforce Implementation</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Services;
