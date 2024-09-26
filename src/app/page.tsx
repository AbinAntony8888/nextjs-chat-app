import Chat from "@/components/Chat";
import List from "@/components/List";
import Image from "next/image";


export default function Home() {
  return (
    <div className="m-10 ">
      <div className="w-full h-screen p-20 bg-gradient-to-br from-white to-violet-800 flex flex-row ">
        <List/>
        <Chat/>
      </div>
    </div>
  );
}
