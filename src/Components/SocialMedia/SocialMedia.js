import React from 'react';
import youtubeIcon from '../../Assets/Images/asset 10.png';
import topCompaniesIcon from '../../Assets/Images/asset 11.png';
import facebookIcon from '../../Assets/Images/asset 6.png';
import twitterIcon from '../../Assets/Images/asset 7.png';
import instagramIcon from '../../Assets/Images/asset 8.png';
import linkedinIcon from '../../Assets/Images/asset 9.png';
import './SocialMedia.modules.css';

const SocialMedia = () => {
	const socialIcons = [
		{
			icon: facebookIcon,
			link: ''
		},
		{
			icon: twitterIcon,
			link: ''
		},
		{
			icon: instagramIcon,
			link: ''
		},
		{
			icon: linkedinIcon,
			link: ''
		},
		{
			icon: youtubeIcon,
			link: ''
		},
		{
			icon: topCompaniesIcon,
			link: ''
		}
	];
	return (
		<>
			{/* Social Media Container */}
			<div className='social-media-container pt-5 pb-36 bg-[#f9fafb]'>
				<div className='w-10/12 mx-auto'>
					<hr />
				</div>
				{/* Social Medias */}
				<div className='grid grid-cols-12 my-20 w-10/12 mx-auto'>
					<div className='col-span-12 lg:col-span-5 '>
						<h1 id='social' className='text-3xl relative font-medium before:text-[4rem] before:-mt-5'>
							Social Media
						</h1>
						<p className='text-base font-normal'>
							Don’t Miss To Follow Us On Our Social <br /> Networks Accounts.
						</p>
					</div>
					<div className='col-span-12 lg:col-span-7'>
						<div className='flex flex-row items-center justify-center xl:justify-end flex-wrap gap-2 md:gap-6 '>
							{socialIcons.map((singleSocial, index) => (
								<>
									<div class='shadow-lg rounded-2xl bg-white  flex items-center justify-center p-6 2xl:p-8'>
										<a href='/'>
											<img alt='profil' src={singleSocial.icon} class='mx-auto object-fill rounded-full ' />
										</a>
									</div>
								</>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SocialMedia;
