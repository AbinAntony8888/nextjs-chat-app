export default function Chat() {
  return (
    <div className="w-full bg-gray-300 h-full flex flex-col justify-between">
      <div className="w-full h-1/6 bg-gray-50 p-6 flex flex-row">
        <div className="flex flex-row gap-6 items-center ">
          <img
            src="https://www.wallpaperflare.com/static/179/390/467/cristiano-ronaldo-wallpaper-preview.jpg"
            alt="profile"
            className="rounded-full w-10 h-10"
          />
          <div className="flex flex-col">
            <h1 className=" text-lg font-bold">Aaron Watts</h1>
            <h5 className="text-gray-500 text-xs">active 2 min ago</h5>
          </div>
        </div>
        <div className="flex justify-end ml-auto">
          <div className="flex gap-6  mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* messaging part */}
      <div className="p-6 overflow-y-scroll">
        {/* 1 */}
        <div className="flex ">
          <img
            src="https://www.wallpaperflare.com/static/179/390/467/cristiano-ronaldo-wallpaper-preview.jpg"
            alt=""
            className="size-8 rounded-full"
          />
          <div>
            <p className="ml-4 w-2/3 bg-gray-400 p-4 rounded-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              fugit numquam modi cumque ad doloribus consequatur adipisci minus
              quod. Vero veritatis eaque impedit blanditiis quasi accusantium
              nemo dolorem velit enim!
            </p>
            <span className="ml-4 pt-2 text-xs ">1 min ago</span>
          </div>
        </div>
        <div>
        <div className="flex justify-end ml-auto">
          <p className="ml-4 w-2/3 bg-green-50 p-4 rounded-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            fugit numquam modi cumque ad doloribus consequatur adipisci minus
            quod. Vero veritatis eaque impedit blanditiis quasi accusantium nemo
            dolorem velit enim!
          </p>
        </div>
        <span className=" pt-2 text-xs flex justify-end ml-auto">1 min ago</span>
        </div>

{/* 2 */}
<div className="flex ">
          <img
            src="https://www.wallpaperflare.com/static/179/390/467/cristiano-ronaldo-wallpaper-preview.jpg"
            alt=""
            className="size-8 rounded-full"
          />
          <div>
            <p className="ml-4 w-2/3 bg-gray-400 p-4 rounded-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              fugit numquam modi cumque ad doloribus consequatur adipisci minus
              quod. Vero veritatis eaque impedit blanditiis quasi accusantium
              nemo dolorem velit enim!
            </p>
            <span className="ml-4 pt-2 text-xs ">1 min ago</span>
          </div>
        </div>
        <div>
        <div className="flex justify-end ml-auto">
          <p className="ml-4 w-2/3 bg-green-50 p-4 rounded-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            fugit numquam modi cumque ad doloribus consequatur adipisci minus
            quod. Vero veritatis eaque impedit blanditiis quasi accusantium nemo
            dolorem velit enim!
          </p>
        </div>
        <span className=" pt-2 text-xs flex justify-end ml-auto">1 min ago</span>
        </div>

        {/* 3 */}
        <div className="flex ">
          <img
            src="https://www.wallpaperflare.com/static/179/390/467/cristiano-ronaldo-wallpaper-preview.jpg"
            alt=""
            className="size-8 rounded-full"
          />
          <div>
            <p className="ml-4 w-2/3 bg-gray-400 p-4 rounded-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              fugit numquam modi cumque ad doloribus consequatur adipisci minus
              quod. Vero veritatis eaque impedit blanditiis quasi accusantium
              nemo dolorem velit enim!
            </p>
            <span className="ml-4 pt-2 text-xs ">1 min ago</span>
          </div>
        </div>
        <div>
        <div className="flex justify-end ml-auto">
          <p className="ml-4 w-2/3 bg-green-50 p-4 rounded-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            fugit numquam modi cumque ad doloribus consequatur adipisci minus
            quod. Vero veritatis eaque impedit blanditiis quasi accusantium nemo
            dolorem velit enim!
          </p>
        </div>
        <span className=" pt-2 text-xs flex justify-end ml-auto">1 min ago</span>
        </div>

      </div>
      {/* input message */}

      <div className="flex bg-gray-100 pl-6 gap-3 items-center my-5 mx-5 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
          />
        </svg>
        <input
          type="text"
          className="bg-gray-100 p-1 w-full outline-none rounded-md px-6"
          placeholder="Type a message....."
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
          />
        </svg>

        <button className="bg-blue-600 px-2 py-1 rounded-md text-white font-bold text-sm">
          Send
        </button>
      </div>
    </div>
  );
}
