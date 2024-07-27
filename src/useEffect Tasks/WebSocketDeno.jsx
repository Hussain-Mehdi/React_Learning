import React, { useState, useEffect } from 'react';

export default function WebSocketDemo() {
  const [ws, setWs] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Create WebSocket connection
    const socket = new WebSocket('wss://echo.websocket.org');

    // Connection opened
    socket.onopen = () => {
      console.log('WebSocket Connected');
    };

    // Listen for messages
    socket.onmessage = (event) => {
      console.log('Message received:', event.data);
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    // Handle connection close
    socket.onclose = (event) => {
      if (event.wasClean) {
        console.log(`WebSocket closed cleanly, code=${event.code}, reason=${event.reason}`);
      } else {
        console.error('WebSocket connection closed unexpectedly');
      }
    };

    // Handle errors
    socket.onerror = (error) => {
      console.error(`WebSocket error: ${error.message}`);
    };

    // Set WebSocket instance to state
    setWs(socket);

    // Cleanup function
    return () => {
      console.log('Cleaning up WebSocket connection');
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(message);
      setMessage('');
    }
  };

  return (
    <div style={{margin:"auto"}}>
      <h1>WebSocket Demo</h1>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <h2>Messages:</h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}
