"use client"; // This ensures that this component is rendered on the client side

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client'; // Import `io` function

let socket: ReturnType<typeof io>;

const ChatComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);

  // useEffect(() => {
  //   // Connect to the Socket.IO server
  //   socket = io('http://localhost:4000'); // Replace with your Socket.IO server URL

  //   // Listen for incoming messages
  //   socket.on('message', (msg: string) => {
  //     setMessages((prevMessages) => [...prevMessages, msg]);
  //   });

  //   // Cleanup on component unmount
  //   return () => {
  //     if (socket) {
  //       socket.disconnect();
  //     }
  //   };
  // }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    // socket.emit('message', inputValue); // Send message to the server
    // setInputValue(''); // Clear input field after sending
  };

  return (
    <div>
      <h1>Socket.IO Chat</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type a message"
      />
      <button onClick={handleButtonClick}>Send</button>

      <div>
        <h2>Messages:</h2>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  );
};

export default ChatComponent;
