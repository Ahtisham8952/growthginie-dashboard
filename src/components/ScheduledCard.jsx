import React from 'react';

const ScheduledCard = ({ time, content, date, chars }) => {
  // Check if content is empty
  const isEmpty = !content || content.trim() === '';

  return (
    <div className="p-4 bg-gray-200 border-dashed border-2 border-gray-300 rounded-lg shadow ">
      <div className="text-sm text-black mb-2 text-left">{time}</div>
      <div className='h-[300px]'>
      {!isEmpty && (
        <div className="text-sm text-black mb-4">
          <div className='text-left '>{date}</div>
          <div className='text-left'>{chars} chars</div>
        </div>
      )}
<div className='flex justify-center align-middle h-[100px]'>
<p className="text-xl mt-2 text-black text-left">{content}</p>
</div>

{isEmpty && (
  <div className='flex justify-center'>

  
  <p className="text-3xl text-gray-400 mt-2">Empty...</p>
  </div>
)}
</div>
    
{isEmpty && (
  <div className="flex justify-end space-x-2 mt-2">
          <button className="bg-gray-100 rounded-xl w-1/2 flex items-center justify-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="color-[#adb5c2]" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
</svg>

</button>
        <button className="bg-gray-100 rounded-xl w-1/2 flex items-center justify-center p-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="color-[#adb5c2]" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>


        </button>
      </div>
)}
{!isEmpty && (
  <div className="flex justify-end space-x-2 mt-2">
           <button className="bg-gray-100 rounded-xl w-1/2 flex items-center justify-center p-4">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="color-[#adb5c2]" className="w-5 h-5">
    <path d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z" />
  </svg>
</button>
        <button className="bg-gray-100 rounded-xl w-1/2 flex items-center justify-center p-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="color-[#adb5c2]" class="size-5">
  <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clip-rule="evenodd" />
</svg>

        </button>
      </div>
)}
  
      
    </div>
  );
};

export default ScheduledCard;
