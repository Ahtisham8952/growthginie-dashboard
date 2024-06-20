import React from 'react';

const Sidebar = ({ setActiveTab, isOpen, onClose, activeTab }) => (
  <div className={`fixed md:relative inset-0 bg-gray-800 bg-opacity-75 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none md:pointer-events-auto md:opacity-100'} z-50`}>
    <div className={`absolute md:relative left-0 top-0 w-64 bg-[#F6F7F9] shadow-lg h-full md:h-full overflow-y-auto transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-800 md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
      </button>
      <div className="mb-4 p-8">
        <img src="/growthlogo.svg" alt="GrowthGenie Logo" className="w-32 h-auto mx-auto md:mx-0" />
      </div>
      <nav>
        <ul className=''>
          <li className="mb-8 py-4 px-8">
            <button className="flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded-md w-full md:w-auto">
              <span className="mr-2">+</span> Create a Post
            </button>
          </li>
          <li className={`mb-4 ${activeTab === 'postGenerator' ? 'bg-[#c5dcf8] text-black' : 'text-black'} flex justify-center`}>
            <button onClick={() => { setActiveTab('postGenerator'); onClose(); }} className="font-bold flex items-center py-4 px-4 rounded-md w-full">
              <img src="/blocks-4.svg" alt="Post Generator Icon" className="w-6 h-6 mr-4" /> Post Generator
            </button>
          </li>
          <li className={`mb-4 ${activeTab === 'myPosts' ? 'bg-[#c5dcf8] text-black' : 'text-black'}`}>
            <button onClick={() => { setActiveTab('myPosts'); onClose(); }} className="font-bold flex items-center py-4 px-4 rounded-md w-full">
              <img src="/blocks-4.svg" alt="My Posts Icon" className="w-6 h-6 mr-4" /> My Posts
            </button>
          </li>
          <li className={`mb-4 ${activeTab === 'contentInspiration' ? 'bg-[#c5dcf8] text-black' : 'text-black'}`}>
            <button onClick={() => { setActiveTab('contentInspiration'); onClose(); }} className="font-bold flex items-center py-4 px-4 rounded-md w-full">
              <img src="/blocks-4.svg" alt="Content Inspiration Icon" className="w-6 h-6 mr-4" /> Content Inspiration
            </button>
          </li>
          <div className="hidden sm:block">
            <div style={{ height: '50px' }}></div>
          </div>
          <li className={`mb-4 ${activeTab === 'upgrade' ? 'bg-[#c5dcf8] text-black' : 'text-black'}`}>
            <button onClick={() => { setActiveTab('upgrade'); onClose(); }} className="font-bold flex items-center py-4 px-4 rounded-md w-full">
              <img src="/growth.svg" alt="Upgrade Icon" className="w-6 h-6 mr-4" /> Upgrade
            </button>
          </li>
          <li className={`mb-4 ${activeTab === 'help' ? 'bg-[#c5dcf8] text-black' : 'text-black'}`}>
            <button onClick={() => { setActiveTab('help'); onClose(); }} className="font-bold flex items-center py-4 px-4 rounded-md w-full">
              <img src="/helpicon.svg" alt="Help Icon" className="w-6 h-6 mr-4" /> Help
            </button>
          </li>
          <li className={`mb-4 ${activeTab === 'settings' ? 'bg-[#c5dcf8] text-black' : 'text-black'}`}>
            <button onClick={() => { setActiveTab('settings'); onClose(); }} className="font-bold flex items-center py-4 px-4 rounded-md w-full">
              <img src="/settingsicon.svg" alt="Settings Icon" className="w-6 h-6 mr-4" /> Settings
            </button>
          </li>
        </ul>
      </nav>
      <div className="p-4 mx-auto border border-gray-400 rounded-lg max-w-[188px] mb-8">
        <img className='mb-2' src="/generatedwords.svg" alt="Generated Words"/>
        <p className="text-[#101010] font-bold mb-2">Words Generated</p>
        <p className="text-gray-500 mb-2">0k/10k</p>
        <input type="range" className="range-slider"/>
        <p className="text-gray-500">You are on a free trial which ends on DD/MM/YY</p>
      </div>
      <div className="mb-4 flex items-center w-full px-8">
        <img src="/jhondoe.svg" alt="Profile" className="w-10 h-10 rounded-full mr-2"/>
        <div>
          <p className="text-[#101010] font-bold">John Doe</p>
          <p className="text-gray-500 mb-2">johndoe@email.com</p>
        </div>
      </div>
    </div>
  </div>
);

export default Sidebar;
