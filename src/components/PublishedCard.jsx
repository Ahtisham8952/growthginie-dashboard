import React from 'react';

const PublishedCard = ({ date, content }) => (
  <div className="bg-white p-6 shadow-lg rounded-md mb-4 h-[400px] flex flex-col justify-between">
    <p className="text-sm text-gray-500">Published on {date}</p>
    <p className="mt-2 text-black font-bold">{content}</p>
<div>


    <div className="mt-4 flex justify-between gap-3 mb-4 flex-wrap">
      <div className="flex items-center gap-2">
        <div className="flex items-center space-x-[-10px] relative">
          <img
            alt="likeicon"
            src="https://cdn.enoch.app/starget-bucket/homeFeed-userProfile/Homefeed/purplelike.svg"
            className="w-6 h-6 -ml-2"
          />
          <img
            alt="likeicon"
            src="https://cdn.enoch.app/starget-bucket/homeFeed-userProfile/Homefeed/redheart.svg"
            className="w-6 h-6 -ml-4"
          />
          <img
            alt="likeicon"
            src="https://cdn.enoch.app/starget-bucket/homeFeed-userProfile/Homefeed/greenheart.svg"
            className="w-6 h-6 -ml-6"
          />
        </div>
        <span className="text-black">1877</span>
      </div>
      <span className="text-black">95 comments</span>
    </div>
   
    <button className="bg-blue-500 text-white rounded-xl w-full py-2 mt-2 hover:bg-blue-600 transition duration-300 ease-in-out">
      View in my LinkedIn profile
    </button>
    </div>
  </div>
);

export default PublishedCard;
