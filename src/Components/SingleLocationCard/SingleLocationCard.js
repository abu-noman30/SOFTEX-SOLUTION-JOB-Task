import React from 'react';

const SingleLocationCard = ({ location }) => {
	const { name, flag, image, address, phoneNumber } = location;
	return (
		<>
			{/* Single Location Card Container*/}
			<div className='single-location-card-conatainer'>
				<div className='grid grid-cols-12 '>
					<div className='col-span-3 xl:col-span-4 mr-3'>
						<img src={image} alt='Movie' className='object-fill' />
					</div>
					<div className='col-span-9 xl:col-span-8 flex justify-start pr-2'>
						<div className=''>
							<div className='flex items-center justify-start '>
								<img src={flag} alt='' className='mr-2' />
								<span className='text-sm'>{name}</span>
							</div>
							<div className=''>
								<p className='text-[#cccccc] text-xs '>{address}</p>
								<p>{phoneNumber}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleLocationCard;
