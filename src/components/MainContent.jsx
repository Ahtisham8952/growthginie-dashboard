import { useState } from 'react';
import PostCard from './PostCard';
import { format, addDays, subDays } from 'date-fns';
import ScheduledCard from './ScheduledCard';
import PublishedCard from './PublishedCard';
const scheduledPosts = [
  {
    day: 'Today',
    date: 'January 02',
    posts: [
      {
        time: "09:00 AM",
        content: "Curabitur vel velit, blandit bibendum sem.",
        date: "Last edited on: Jan 02, 2024, 10:25 AM",
        chars: "231"
      }
    ]
  },
  {
    day: 'Tomorrow',
    date: 'January 03',
    posts: [
      {
        time: "09:00 AM",
        content: "",
        date: "Last edited on: Jan 02, 2024, 09:21 AM",
        chars: "120"
      }
    ]
  },
  {
    day: 'Thursday',
    date: 'January 04',
    posts: [
      {
        time: "09:00 AM",
        content: "Nullam vitae felis at ligula tincidunt feugiat.",
        date: "Last edited on: Jan 01, 2024, 05:00 PM",
        chars: "200"
      }
    ]
  },
  {
    day: 'Friday',
    date: 'January 05',
    posts: [
      {
        time: "09:30 AM",
        content: "Pellentesque ut enim et erat suscipit varius.",
        date: "Last edited on: Dec 30, 2023, 03:15 PM",
        chars: "180"
      }
    ]
  }
];

const MainContent = ({ activeTab }) => {
  const [activeSubTab, setActiveSubTab] = useState('drafts');
  const [startDate, setStartDate] = useState(new Date('2024-01-02'));
  const renderMyPostsContent = () => {
    if (activeSubTab === 'drafts') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PostCard 
          title="Post 1" 
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." 
          date="Jan 2, 2024, 12:25 PM" 
          chars="987"
        />
        <PostCard 
          title="Post 2" 
         
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." 
          date="Jan 2, 2024, 12:21 PM" 
          chars="0"
        />
        {/* Add more PostCard components as needed */}
      </div>
      );
    } else if (activeSubTab === 'scheduled') {
      return (
        <div className='h-full'>
          <div className="flex justify-between items-center mb-4">
            <button className="px-4 py-2  rounded text-black">&lt;</button>
            <div className="text-center text-lg font-semibold text-black">January 02 - January 05, 2024</div>
            <button className="px-4 py-2  rounded text-black">&gt;</button>
          </div>
          <div className="text-center text-sm mb-4">Asia/Kolkata</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scheduledPosts.map((dayData, index) => (
              <div key={index} className="text-center">
                <div className="text-black font-bold mb-2 text-left">{dayData.day}</div>
                <ScheduledCard {...dayData.posts[0]} />
              </div>
            ))}
          </div>
        </div>
      );
    } else if (activeSubTab === 'published') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PublishedCard 
          
            content="Published content for the post..." 
            date="Dec 25, 2023, 09:00 AM" 
           
          />
          <PublishedCard 
        
            content="Another published post content..." 
            date="Dec 30, 2023, 08:00 AM" 
           
          />
        </div>
      );
    } else if (activeSubTab === 'insights') {
      return <div>Insights Content</div>;
    } else {
      return <div>Select a sub-tab to view content</div>;
    }
  };

  if (activeTab === 'createPost') {
    return <div>Create a Post Content</div>;
  } else if (activeTab === 'postGenerator') {
    return <div>Post Generator Content</div>;
  } else if (activeTab === 'myPosts') {
    return (

      <div className="flex-1 p-6 bg-[#ffffff] ">
        
        <div className="border-b border-rgba(246, 247, 249, 1) mb-6">
  <div className="flex space-x-4">
    <button onClick={() => setActiveSubTab('drafts')} className={`px-4 py-2  ${activeSubTab === 'drafts' ? 'font-semibold border-b-4 border-blue-500 text-black' : 'text-black'}`}>Drafts</button>
    <button onClick={() => setActiveSubTab('scheduled')} className={`px-4 py-2  ${activeSubTab === 'scheduled' ? 'font-semibold border-b-4 border-blue-500 text-black' : 'text-black'}`}>Scheduled</button>
    <button onClick={() => setActiveSubTab('published')} className={`px-4 py-2  ${activeSubTab === 'published' ? 'font-semibold border-b-4 border-blue-500 text-black' : 'text-black'}`}>Published</button>
    <button onClick={() => setActiveSubTab('insights')} className={`px-4 py-2  ${activeSubTab === 'insights' ? 'font-semibold border-b-4 border-blue-500 text-black' : 'text-black'}`}>Insights</button>
  </div>
</div>
        {renderMyPostsContent()}
      </div>
    );
  } else if (activeTab === 'contentInspiration') {
    return <div>Content Inspiration Content</div>;
  } else if (activeTab === 'upgrade') {
    return <div>Upgrade Content</div>;
  } else if (activeTab === 'help') {
    return <div>Help Content</div>;
  } else if (activeTab === 'settings') {
    return <div>Settings Content</div>;
  } else {
    return <div>Select a tab to view content</div>;
  }
};

export default MainContent;
