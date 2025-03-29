import React, { useState, useEffect } from "react";

function MessageList() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            const response = await fetch("https://your-api-url/messages");
            const data = await response.json();
            setMessages(data);
        };

        fetchMessages();
    }, []);

    return (
      <div className="p-4 bg-gray-100 rounded">
        <h2 className="text-xl font-bold mb-4">Messages</h2>
        {messages.map((msg) => (
          <div key={msg.messageId} className="p-2 mb-2 bg-white rounded shadow">
              <p><strong>Name:</strong> {msg.name}</p>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Message:</strong> {msg.message}</p>
              <p><strong>Timestamp:</strong> {msg.timestamp}</p>
          </div>
        ))}
      </div>
    );
}

export default MessageList;
