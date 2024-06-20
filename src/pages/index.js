import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import MainContent from '../components/MainContent';

export default function Home() {
  const [activeTab, setActiveTab] = useState('myPosts');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarClose = () => setIsSidebarOpen(false);
  const handleSidebarOpen = () => setIsSidebarOpen(true);

  return (
    <div className="flex bg-white  ">
      <Sidebar
        setActiveTab={setActiveTab}
        isOpen={isSidebarOpen}
        onClose={handleSidebarClose}
        activeTab={activeTab}
      />
      <div className="flex flex-col bg-whit  w-full ">
        <TopBar onOpen={handleSidebarOpen} activeTab={activeTab} />
        <MainContent activeTab={activeTab}  />
      </div>
    </div>
  );
}
