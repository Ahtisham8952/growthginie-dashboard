import React from 'react';

const TopBar = ({ onOpen, activeTab }) => {
  let title = '';

  // Determine the title based on activeTab
  switch (activeTab) {
    case 'myPosts':
      title = 'My Posts';
      break;
    case 'postGenerator':
      title = 'Post Generator';
      break;
    case 'contentInspiration':
      title = 'Content Inspiration';
      break;
    default:
      title = 'Dashboard'; // Default title
      break;
  }

  return (
    <div className="bg-[#ffffff] shadow p-4 flex justify-between items-start ">
      <button onClick={onOpen} className="md:hidden text-gray-700">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <div className='flex flex-col md:flex-row justify-between items-center w-full p-2 md:px-6'>
  <div className="mb-4 md:mb-0"> {/* mb-4 adds margin bottom */}
    <h1 className="text-3xl font-bold text-black">{title}</h1>
  </div>
  <div className="flex flex-wrap items-center border-t border-b border-gray-300 bg-gray-200 px-4 py-2 w-full sm:w-[446px]">
  {/* Left Section with Icon and Text */}
  <div className="flex items-center w-full sm:w-auto">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
      <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z" clipRule="evenodd" />
    </svg>
    <p className="ml-2 text-black">Your free trial ends in 6 days</p>
  </div>

  {/* Right Section with Upgrade Button */}
  <button className="flex items-center bg-black text-white px-4 py-2 m-auto rounded-full mt-2 sm:mt-0">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
    Upgrade Now
  </button>
</div>



</div>
     
    </div>
  );
};

export default TopBar;
