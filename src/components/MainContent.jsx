import React, { useState } from "react";
import PostgeneratorCard from "./PostgeneratorCard";
import PostCard from "./PostCard";
import ScheduledCard from "./ScheduledCard";
import PublishedCard from "./PublishedCard";
import { scheduledPosts } from "./constants/constant"; // Assuming you have exported scheduledPosts from a separate file
import { format } from "date-fns";
import GeneratedContent from "./GeneratedContent";

const MainContent = ({ activeTab }) => {
  const [activeSubTab, setActiveSubTab] = useState("drafts");
  const [showGeneratedContent, setShowGeneratedContent] = useState(false);

  const handleCardClick = () => {
    setShowGeneratedContent(true); // Set showGeneratedContent to true when any PostgeneratorCard is clicked
  };

  const renderMyPostsContent = () => {
    if (activeSubTab === "drafts") {
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
    } else if (activeSubTab === "scheduled") {
      return (
        <div className="h-full">
          <div className="flex justify-between items-center mb-4">
            <button className="px-4 py-2 rounded text-black">&lt;</button>
            <div className="text-center text-lg font-semibold text-black">
              January 02 - January 05, 2024
            </div>
            <button className="px-4 py-2 rounded text-black">&gt;</button>
          </div>
          <div className="text-center text-sm mb-4">Asia/Kolkata</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scheduledPosts.map((dayData, index) => (
              <div key={index} className="text-center">
                <div className="text-black font-bold mb-2 text-left">
                  {dayData.day}
                </div>
                <ScheduledCard {...dayData.posts[0]} />
              </div>
            ))}
          </div>
        </div>
      );
    } else if (activeSubTab === "published") {
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
    } else if (activeSubTab === "insights") {
      return <div>Insights Content</div>;
    } else {
      return <div>Select a sub-tab to view content</div>;
    }
  };

  const renderPostGeneratorContent = () => {
    if (showGeneratedContent) {
      return <GeneratedContent />;
    } else {
      return (
        <div className="bg-white mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
          <PostgeneratorCard
            main="Start From Scratch"
            title="Generate post from scratch"
            content="Use power of AI to generate high quality Linkedin posts"
            onClick={handleCardClick} // Pass handleCardClick function to trigger when clicked
          />
          <PostgeneratorCard
            main="Idea Generator"
            title="Generate an Idea"
            content="Use power of AI to generate high quality Linkedin posts"
            onClick={handleCardClick} // Pass handleCardClick function to trigger when clicked
          />
          <PostgeneratorCard
            main="Article to Post"
            title="Convert article to post"
            content="Use power of AI to generate high quality Linkedin posts"
            onClick={handleCardClick} // Pass handleCardClick function to trigger when clicked
          />
        </div>
      );
    }
  };

  // Render content based on activeTab
  if (activeTab === "createPost") {
    return <div>Create a Post Content</div>;
  } else if (activeTab === "postGenerator") {
    return renderPostGeneratorContent();
  } else if (activeTab === "myPosts") {
    return (
      <div className="flex-1 p-4 md:p-6 bg-[#ffffff]">
        <div className="border-b border-rgba(246, 247, 249, 1) mb-4 md:mb-6">
          <div className="flex flex-wrap space-x-2 md:space-x-4">
            <button
              onClick={() => setActiveSubTab("drafts")}
              className={`px-2 py-1 md:px-4 md:py-2 ${
                activeSubTab === "drafts"
                  ? "font-semibold border-b-4 border-blue-500 text-black"
                  : "text-black"
              }`}
            >
              Drafts
            </button>
            <button
              onClick={() => setActiveSubTab("scheduled")}
              className={`px-2 py-1 md:px-4 md:py-2 ${
                activeSubTab === "scheduled"
                  ? "font-semibold border-b-4 border-blue-500 text-black"
                  : "text-black"
              }`}
            >
              Scheduled
            </button>
            <button
              onClick={() => setActiveSubTab("published")}
              className={`px-2 py-1 md:px-4 md:py-2 ${
                activeSubTab === "published"
                  ? "font-semibold border-b-4 border-blue-500 text-black"
                  : "text-black"
              }`}
            >
              Published
            </button>
            <button
              onClick={() => setActiveSubTab("insights")}
              className={`px-2 py-1 md:px-4 md:py-2 ${
                activeSubTab === "insights"
                  ? "font-semibold border-b-4 border-blue-500 text-black"
                  : "text-black"
              }`}
            >
              Insights
            </button>
          </div>
        </div>
        {renderMyPostsContent()}
      </div>
    );
  } else if (activeTab === "contentInspiration") {
    return <div>Content Inspiration Content</div>;
  } else if (activeTab === "upgrade") {
    return <div>Upgrade Content</div>;
  } else if (activeTab === "help") {
    return <div>Help Content</div>;
  } else if (activeTab === "settings") {
    return <div>Settings Content</div>;
  } else {
    return <div>Select a tab to view content</div>;
  }
};

export default MainContent;
