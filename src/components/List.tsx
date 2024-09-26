export default function List() {
  return (
    <div className=" bg-gray-800 p-6 h-full w-1/4 flex flex-col gap-6 overflow-y-scroll">
      <div className="flex items-center bg-gray-700 p-2 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-white mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <input
          type="text"
          placeholder="search people... "
          className="bg-transparent text-white w-full outline-none"
        />
      </div>

      <div>
        <h4 className="text-gray-500 text-sm font-mono font-bold">
          TODAY'S ACTIVE CHATS
        </h4>
      </div>
      {/* first img */}
      <div className="flex flex-row gap-6 items-center">
        <img
          src="https://www.wallpaperflare.com/static/179/390/467/cristiano-ronaldo-wallpaper-preview.jpg"
          alt="profile"
          className="rounded-full w-10 h-10"
        />
        <div className="flex flex-col">
          <h1 className="text-white text-sm font-bold">Aaron Watts</h1>
          <h5 className="text-gray-400 text-xs">active 2 min ago</h5>
        </div>
      </div>
      {/* second img */}
      <div className="flex flex-row gap-6 items-center">
        <img
          src="https://www.wallpaperflare.com/static/179/390/467/cristiano-ronaldo-wallpaper-preview.jpg"
          alt="profile"
          className="rounded-full w-10 h-10"
        />
        <div className="flex flex-col">
          <h1 className="text-white text-sm font-bold">Aaron Watts</h1>
          <h5 className="text-gray-400 text-xs">active 2 min ago</h5>
        </div>
      </div>
      {/* third img */}
      <div className="flex flex-row gap-6 items-center">
        <img
          src="https://www.wallpaperflare.com/static/179/390/467/cristiano-ronaldo-wallpaper-preview.jpg"
          alt="profile"
          className="rounded-full w-10 h-10"
        />
        <div className="flex flex-col">
          <h1 className="text-white text-sm font-bold">Aaron Watts</h1>
          <h5 className="text-gray-400 text-xs">active 2 min ago</h5>
        </div>
      </div>
       {/* third img */}
       <div className="flex flex-row gap-6 items-center">
        <img
          src="https://www.wallpaperflare.com/static/179/390/467/cristiano-ronaldo-wallpaper-preview.jpg"
          alt="profile"
          className="rounded-full w-10 h-10"
        />
        <div className="flex flex-col">
          <h1 className="text-white text-sm font-bold">Aaron Watts</h1>
          <h5 className="text-gray-400 text-xs">active 2 min ago</h5>
        </div>
      </div>
       {/* third img */}
       <div className="flex flex-row gap-6 items-center">
        <img
          src="https://www.wallpaperflare.com/static/179/390/467/cristiano-ronaldo-wallpaper-preview.jpg"
          alt="profile"
          className="rounded-full w-10 h-10"
        />
        <div className="flex flex-col">
          <h1 className="text-white text-sm font-bold">Aaron Watts</h1>
          <h5 className="text-gray-400 text-xs">active 2 min ago</h5>
        </div>
      </div>
       {/* third img */}
       <div className="flex flex-row gap-6 items-center">
        <img
          src="https://www.wallpaperflare.com/static/179/390/467/cristiano-ronaldo-wallpaper-preview.jpg"
          alt="profile"
          className="rounded-full w-10 h-10"
        />
        <div className="flex flex-col">
          <h1 className="text-white text-sm font-bold">Aaron Watts</h1>
          <h5 className="text-gray-400 text-xs">active 2 min ago</h5>
        </div>
      </div>
       {/* third img */}
       <div className="flex flex-row gap-6 items-center">
        <img
          src="https://www.wallpaperflare.com/static/179/390/467/cristiano-ronaldo-wallpaper-preview.jpg"
          alt="profile"
          className="rounded-full w-10 h-10"
        />
        <div className="flex flex-col">
          <h1 className="text-white text-sm font-bold">Aaron Watts</h1>
          <h5 className="text-gray-400 text-xs">active 2 min ago</h5>
        </div>
      </div>
       {/* third img */}
       <div className="flex flex-row gap-6 items-center">
        <img
          src="https://www.wallpaperflare.com/static/179/390/467/cristiano-ronaldo-wallpaper-preview.jpg"
          alt="profile"
          className="rounded-full w-10 h-10"
        />
        <div className="flex flex-col">
          <h1 className="text-white text-sm font-bold">Aaron Watts</h1>
          <h5 className="text-gray-400 text-xs">active 2 min ago</h5>
        </div>
      </div>
    </div>
  );
}
