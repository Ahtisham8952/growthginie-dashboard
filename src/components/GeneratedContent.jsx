import React, { useState } from "react";
import ToneButton from "./ToneButton";

const GeneratedContent = () => {
  const [activeTab, setActiveTab] = useState("newOutput");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white p-4 md:p-8 rounded-md flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="w-full lg:w-[40%] md:pr-4">
        <h2 className="text-lg font-bold text-gray-800">
          What do you want to post about?
        </h2>
        <textarea
          className="border border-gray-300 p-2 mt-2 w-[70%] md:max-w-96 resize-none"
          placeholder="Enter your post content here..."
        />
        <h3 className="mt-4 text-lg font-bold text-black">
          Select your tone of voice
        </h3>
        <div className="mt-2 flex flex-wrap gap-2 max-w-[445px]">
          <ToneButton text="Excited" />
          <ToneButton text="Happy" />
          <ToneButton text="Sad" />
          <ToneButton text="Angry" />
          <ToneButton text="Formal" />
          <ToneButton text="Informal" />
          <ToneButton text="Professional" />
          <ToneButton text="Casual" />
          <ToneButton text="Friendly" />
          <ToneButton text="Serious" />
        </div>
        <h3 className="mt-4 text-lg font-bold text-black">
          Select post format
        </h3>
        <button className="border rounded-full px-4 py-2 flex gap-2 items-center mt-2 text-black">
          <span className="ml-2">+</span> Select a format
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[60%] md:pl-4">
        <h2 className="text-lg font-bold text-black">Output</h2>
        <p className="text-black">Here is the AI generated post.</p>

        {/* Tabs */}
        <div className="mt-4 flex md:border-b border-gray-300">
          <button
            onClick={() => handleTabChange("newOutput")}
            className={`px-4 py-2 mr-2 ${activeTab === "newOutput"
                ? "text-blue-500 border-blue-500 border-b-2"
                : "text-black"
              }`}
          >
            New Output
          </button>
          <button
            onClick={() => handleTabChange("history")}
            className={`px-4 py-2 ${activeTab === "history"
                ? "text-blue-500 border-blue-500 border-b-2"
                : "text-black"
              }`}
          >
            History
          </button>
        </div>

        {/* Content based on active tab */}
        {activeTab === "newOutput" && (
          <div className="border rounded p-4 mt-4">
            <div className="flex items-center justify-between">
              <div className="text-black">405 characters</div>
              <div className="flex gap-2">
                <button className="text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                    />
                  </svg>
                </button>
                <button className="text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 1 1 0 9h-1.294m3.782 6.75a2.25 2.25 0 0 1-2.25 2.25.75.75 0 0 1-.75-.75 7.5 7.5 0 0 1 7.5-7.5.75.75 0 0 1-.75.75 2.25 2.25 0 0 1-2.25 2.25Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <p className="mt-2 text-black">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more{" "}
            </p>
            <div className="flex mt-4">
              <button className="bg-blue-500 text-white rounded-full px-4 py-2 mr-2">
                Edit and Publish
              </button>
              <button className="bg-gray-300 text-black rounded-full px-4 py-2">
                Regenerate
              </button>
            </div>
          </div>
        )}

        {activeTab === "history" && (
          <div className="mt-4">
            <p className="text-black">History content goes here...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneratedContent;
