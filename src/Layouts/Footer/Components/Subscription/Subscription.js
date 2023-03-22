import React from 'react';
import './Subscription.modules.css';

const Subscription = () => {
  return (
    <>
      {/* Subscription Container */}
      <div className='subscription-container w-10/12 mx-auto mt-20'>
        <div className='grid grid-cols-12 '>
          <div className='col-span-12 lg:col-span-4 mb-20 '>
            <footer className='footer'>
              <div className='space-y-2 text-base'>
                <span id='help' className='service text-3xl relative font-semibold mb-3 before:text-[3.5rem] before:-mt-5'>
                  Help
                </span>
                <a href='/' className='link link-hover'>
                  Contact Us
                </a>
                <a href='/' className='link link-hover'>
                  Privacy Policy
                </a>
                <a href='/' className='link link-hover'>
                  Sitemap
                </a>
                <a href='/' className='link link-hover'>
                  Global
                </a>
              </div>
            </footer>
          </div>
          <div className='col-span-12 lg:col-span-8'>
            <h1 id='subscribe' className='service text-3xl relative font-semibold mb-3 before:text-[3rem] md:before:text-[3.5rem] before:-mt-5'>
              Subscribe To Our Newsletter
            </h1>
            <p className='text-base font-normal mb-10'>Stay updated with latest technology trends and topics with us.</p>

            <form>
              {/* <label for='search' className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
								Search
							</label> */}
              <div className='relative w-full lg:w-[32rem]'>
                <input
                  type='text'
                  className='block w-full p-4 pl-6 text-sm text-white bg-[#1f1f1f] border border-[#cccccc] focus:ring-[#cccccc]  focus:border-[#cccccc]  '
                  placeholder='Email@company.com'
                  required
                />
                <button type='submit' className='text-white absolute right-2.5 bottom-2.5  bg-[#1f1f1f]  font-medium rounded-lg text-sm px-4 py-2'>
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
