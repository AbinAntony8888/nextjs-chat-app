"use client";

import { ChangeEvent, useEffect, useState } from "react";
import io from 'socket.io-client'; // Import `io` function

let socket: ReturnType<typeof io>;

export default function Login() {
  const [inputValue, setInputValue] = useState<string[]>([]);

  useEffect(() => {
    // Connect to the Socket.IO server
    socket = io('http://localhost:4000'); // Replace with your Socket.IO server URL

    // Listen for incoming messages
    // socket.on('message', (msg: string) => {
    //   setInputValue((prevMessages) => [...prevMessages, msg]);
    // });

    // Cleanup on component unmount
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue((prev) => [ e.target.value]); // Add the new value to the array
  };

  const handleSubmit=()=>{
    socket.emit('message', inputValue); // Send message to the server
    setInputValue([""]); // Clear input field after sending
  };
  return (
    <div
      className="relative w-full h-screen mb-4 bg-cover bg-center border border-black"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/blue-white-futuristic-technology-background-vector_53876-85333.jpg')",
      }}
    >
      {/* Overlay Div */}
      <div className="absolute top-1/2 left-1/2 w-1/3 h-2/3 ring-1 ring-gray-400 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-30 flex justify-center items-center">
        <div className="flex flex-col items-center justify-center gap-3">
          <img
            className="w-20"
            src="https://cdn-icons-png.freepik.com/256/9948/9948852.png?semt=ais_hybrid"
            alt=""
          />
          <h1 className="font-bold text-2xl font-serif text-gray-700">
            CHAT WITH YOUR FRIEND
          </h1>
          <h1 className="text-xl font-bold text-gray-600">Login</h1>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter Username "
            className="w-full p-1 outline-none bg-transparent border border-gray-400 placeholder-gray-600"
          />
          <button className="bg-blue-700 text-white font-bold px-4 py-1 mt-2 ring-2 ring-gray-400 " onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
