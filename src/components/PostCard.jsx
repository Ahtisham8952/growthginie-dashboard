const PostCard = ({ title, content, date, chars }) => (
    <div className="bg-white p-6 shadow-lg rounded-md mb-4 h-[400px] flex flex-col justify-between">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-black mb-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>



      <p className="text-sm text-gray-500">Last edited {date} • {chars} characters</p>
      <p className="mt-2 text-black font-bold">{content}</p>
      <div className="mt-4 flex justify-between gap-3">
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
    </div>
  );
  
  export default PostCard;
  