import Chat from "@/components/Chat";
import List from "@/components/List";
import Image from "next/image";


export default function Home() {
  return (
    <div className="m-4 mb-5 ">
      <div className="w-full h-screen border-2  flex flex-row">
        {/* bg-gradient-to-br from-white to-violet-800 */}
        <List/>
        <Chat/>
      </div>
    </div>
  );
}
