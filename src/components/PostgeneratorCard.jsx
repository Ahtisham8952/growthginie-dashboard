import React from 'react';

const PostgeneratorCard = ({ title, content, main, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); // Call the onClick function passed from props
    }
  };

  return (
    <div className="border-gray-300 border bg-white shadow-lg rounded-md mb-4 flex flex-col cursor-pointer" onClick={handleClick}>
      <div className="bg-[#ECEDF0] p-[44px]">
        <p className="mt-2 text-black font-bold text-3xl text-center">{main}</p>
      </div>
      <div className="p-8">
        <p className="mt-2 text-black font-bold">{title}</p>
        <p className="mt-2 text-black">{content}</p>
      </div>
    </div>
  );
};

export default PostgeneratorCard;
