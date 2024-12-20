import Chat from "@/components/Chat";
// import ChatComponent from "@/components/ChatComponent";
import List from "@/components/List";
import Login from "@/components/Login";
import Image from "next/image";


export default function Home() {
  return (
    <div className="m-4 mb-5">
      <Login/>
      <div className="w-full h-screen border-2 border-gray-400 flex flex-row p-1 bg-gray-300">
        {/* bg-gradient-to-br from-white to-violet-800 */}
        <List/>
        <Chat/>
      </div>
      {/* <ChatComponent/> */}
    </div>
  );
}
