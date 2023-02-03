import React, { useState } from 'react';
import companyLogo from '../../Assets/Images/logo.png';

const Navbar = () => {
	const [isCompanyShown, setIsCompanyShown] = useState(false);
	const [isServiceShown, setIsServiceShown] = useState(false);
	const [isDeveloperShown, setIsDeveloperShown] = useState(false);
	const [isResourceShown, setIssResourcesShown] = useState(false);
	const [sidebar, setSidebar] = useState(false);
	return (
		<>
			{/* Navbar Section */}
			<section className='navbar-section bg-white drop-shadow-xl shadow-gray-300 '>
				<div className=''>
					<nav className='bg-white border-gray-200'>
						<div className='flex flex-wrap justify-between items-center w-10/12 mx-auto py-2.5'>
							<a href='/' className='flex items-center'>
								<img src={companyLogo} className='w-40 mr-3' alt='' />
							</a>
							<button
								data-collapse-toggle='mega-menu-full'
								type='button'
								className='inline-flex items-center p-2 ml-1 text-sm text-gray-50 rounded-lg xl:hidden bg-[#4842a8] hover:bg-[#4842a8] focus:outline-none focus:ring-2 focus:ring-gray-200'
								aria-controls='mega-menu-full'
								aria-expanded='false'
								onClick={() => setSidebar(!sidebar)}
							>
								<span className='sr-only'>Open main menu</span>
								<svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
									<path
										fill-rule='evenodd'
										d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
										clip-rule='evenodd'
									></path>
								</svg>
							</button>
							<div id='mega-menu-full' className='items-center justify-between hidden w-full xl:flex md:w-auto md:order-1'>
								<ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:border-0 md:bg-white'>
									<li>
										<button
											id='dropdownHelperButton'
											data-collapse-toggle='dropdownHelper'
											className='flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400'
											onMouseEnter={() => setIsCompanyShown(true)}
											onMouseLeave={() => setIsCompanyShown(false)}
										>
											Company{' '}
											<svg className='w-5 h-5 ml-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
												<path
													fill-rule='evenodd'
													d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
													clip-rule='evenodd'
												></path>
											</svg>
										</button>
									</li>
									<li>
										<button
											id='mega-menu-full-dropdown-button'
											data-collapse-toggle='mega-menu-full-dropdown'
											className='flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400'
											onMouseEnter={() => setIsServiceShown(true)}
											onMouseLeave={() => setIsServiceShown(false)}
										>
											Services{' '}
											<svg className='w-5 h-5 ml-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
												<path
													fill-rule='evenodd'
													d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
													clip-rule='evenodd'
												></path>
											</svg>
										</button>
									</li>
									<li>
										<button
											id='mega-menu-full-dropdown-button'
											data-collapse-toggle='mega-menu-full-dropdown'
											className='flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400'
											onMouseEnter={() => setIsDeveloperShown(true)}
											onMouseLeave={() => setIsDeveloperShown(false)}
										>
											Hire Developers{' '}
											<svg className='w-5 h-5 ml-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
												<path
													fill-rule='evenodd'
													d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
													clip-rule='evenodd'
												></path>
											</svg>
										</button>
									</li>
									<li>
										<a href='/' className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0'>
											Case Study
										</a>
									</li>
									<li>
										<button
											id='mega-menu-full-dropdown-button'
											data-collapse-toggle='mega-menu-full-dropdown'
											className='flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400'
											onMouseEnter={() => setIssResourcesShown(true)}
											onMouseLeave={() => setIssResourcesShown(false)}
										>
											Resources{' '}
											<svg className='w-5 h-5 ml-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
												<path
													fill-rule='evenodd'
													d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
													clip-rule='evenodd'
												></path>
											</svg>
										</button>
									</li>
									<li>
										<a href='/' className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0'>
											Contact Us
										</a>
									</li>
								</ul>
								<div className='ml-5'>
									<button className='rounded-full px-4 py-4 bg-white text-sm text-[#1f1f1f] border-none shadow-lg  shadow-gray-300'>Get A Free Quote</button>
								</div>
							</div>
						</div>
						{/* Company - Dropdown Menu */}
						{isCompanyShown && (
							<div id='mega-menu-full-dropdown' className='mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y '>
								<div className='grid grid-cols-4 w-full mx-auto text-gray-900'>
									{/* Grid Container */}

									<div className='w-full p-4 h-24 border '>
										<h1 className='bg-gray-300 flex items-center justify-center h-full'>Menu Items</h1>
									</div>
									<div className='w-full p-4 h-24  border '>
										<h1 className='bg-gray-300  flex items-center justify-center h-full'>Menu Items</h1>
									</div>
									<div className='w-full p-4 h-24  border '>
										<h1 className='bg-gray-300  flex items-center justify-center h-full'>Menu Items</h1>
									</div>
									<div className='w-full p-4 h-24  border '>
										<h1 className='bg-gray-300  flex items-center justify-center h-full'>Menu Items</h1>
									</div>
								</div>
							</div>
						)}
						{/* Company - Dropdown Menu */}
						{isServiceShown && (
							<div id='mega-menu-full-dropdown' className='mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y '>
								<div className='grid grid-cols-4 w-full mx-auto text-gray-900'>
									{/* Grid Container */}

									<div className='w-full p-4 h-24 border '>
										<h1 className='bg-gray-300 flex items-center justify-center h-full'>Menu Items</h1>
									</div>
									<div className='w-full p-4 h-24  border '>
										<h1 className='bg-gray-300  flex items-center justify-center h-full'>Menu Items</h1>
									</div>
									<div className='w-full p-4 h-24  border '>
										<h1 className='bg-gray-300  flex items-center justify-center h-full'>Menu Items</h1>
									</div>
									<div className='w-full p-4 h-24  border '>
										<h1 className='bg-gray-300  flex items-center justify-center h-full'>Menu Items</h1>
									</div>
								</div>
							</div>
						)}
						{/* Company - Dropdown Menu */}
						{isDeveloperShown && (
							<div id='mega-menu-full-dropdown' className='mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y '>
								<div className='grid grid-cols-4 w-full mx-auto text-gray-900'>
									{/* Grid Container */}

									<div className='w-full p-4 h-24 border '>
										<h1 className='bg-gray-300 flex items-center justify-center h-full'>Menu Items</h1>
									</div>
									<div className='w-full p-4 h-24  border '>
										<h1 className='bg-gray-300  flex items-center justify-center h-full'>Menu Items</h1>
									</div>
									<div className='w-full p-4 h-24  border '>
										<h1 className='bg-gray-300  flex items-center justify-center h-full'>Menu Items</h1>
									</div>
									<div className='w-full p-4 h-24  border '>
										<h1 className='bg-gray-300  flex items-center justify-center h-full'>Menu Items</h1>
									</div>
								</div>
							</div>
						)}
						{/* Company - Dropdown Menu */}
						{isResourceShown && (
							<div id='mega-menu-full-dropdown' className='mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y '>
								<div className='grid grid-cols-4 w-full mx-auto text-gray-900'>
									{/* Grid Container */}

									<div className='w-full p-4 h-24 border '>
										<h1 className='bg-gray-300 flex items-center justify-center h-full'>Menu Items</h1>
									</div>
									<div className='w-full p-4 h-24  border '>
										<h1 className='bg-gray-300  flex items-center justify-center h-full'>Menu Items</h1>
									</div>
									<div className='w-full p-4 h-24  border '>
										<h1 className='bg-gray-300  flex items-center justify-center h-full'>Menu Items</h1>
									</div>
									<div className='w-full p-4 h-24  border '>
										<h1 className='bg-gray-300  flex items-center justify-center h-full'>Menu Items</h1>
									</div>
								</div>
							</div>
						)}
					</nav>
				</div>

				{sidebar && (
					<aside
						id='logo-sidebar'
						className={`fixed top-[4.4rem] left-0 z-40 w-64 h-screen transition-transform translate-x-0 ${
							sidebar ? 'xl:-translate-x-full' : ''
						} bg-white border-r border-gray-200  dark:bg-gray-800 dark:border-gray-700`}
						aria-label='Sidebar'
					>
						<div id='mega-menu-full-dropdown' className='mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y '>
							<div className='grid grid-cols-1 w-full mx-auto text-gray-900'>
								{/* Grid Container */}

								<div className='w-full p-4 h-24 border '>
									<h1 className='bg-gray-300 flex items-center justify-center h-full'>Menu Items</h1>
								</div>
								<div className='w-full p-4 h-24  border '>
									<h1 className='bg-gray-300  flex items-center justify-center h-full'>Menu Items</h1>
								</div>
								<div className='w-full p-4 h-24  border '>
									<h1 className='bg-gray-300  flex items-center justify-center h-full'>Menu Items</h1>
								</div>
								<div className='w-full p-4 h-24  border '>
									<h1 className='bg-gray-300  flex items-center justify-center h-full'>Menu Items</h1>
								</div>
							</div>
						</div>
					</aside>
				)}
			</section>
		</>
	);
};

export default Navbar;
