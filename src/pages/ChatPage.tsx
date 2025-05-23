
import React, { useState } from "react";
import { Send, Smile, X } from "lucide-react";
import Header from "@/components/Header";
import "./ChatPage.css";

interface ChatMessage {
  id: number;
  username: string;
  message: string;
  isVIP?: boolean;
  mentions?: string[];
  highlighted?: boolean;
}

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [activeChat, setActiveChat] = useState("stake-sports");
  
  const chatMessages: ChatMessage[] = [
    { 
      id: 1, 
      username: "Xoniii69", 
      message: "any albo here 🇦🇱🇦🇱",
      highlighted: true
    },
    { 
      id: 2, 
      username: "copiouscoolant", 
      message: "@Unclebarneyart sheesh unc🔥 nice odds",
      isVIP: true,
      mentions: ["Unclebarneyart"]
    },
    { 
      id: 3, 
      username: "ConsciousnessT", 
      message: "@Xoniii69 im albino? Does that count",
      isVIP: true,
      mentions: ["Xoniii69"]
    },
    { 
      id: 4, 
      username: "mugsie99", 
      message: "Sport: #380,060,079",
      isVIP: true,
    },
    { 
      id: 5, 
      username: "ConsciousnessT", 
      message: "@Unclebarneyart 🔥 🔥 🔥 🔥 nice hit gang so happy for you, drinks on you",
      isVIP: true,
      mentions: ["Unclebarneyart"]
    },
    { 
      id: 6, 
      username: "Xoniii69", 
      message: "@ConsciousnessT no offense never heard of albino",
      mentions: ["ConsciousnessT"]
    },
    { 
      id: 7, 
      username: "ConsciousnessT", 
      message: ":(",
      isVIP: true,
    },
    { 
      id: 8, 
      username: "Xoniii69", 
      message: "where's that",
      highlighted: true
    },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, would send the message to a backend
    console.log("Sending message:", message);
    setMessage("");
  };

  return (
    <div className="chat-page">
      <div className="page-content">
        <div className="chat-header">
          <div className="chat-title">
            <div className="chat-icon">⚽</div>
            <h2>Stake: Sports</h2>
            <span className="chat-dropdown">▼</span>
          </div>
          <div className="chat-close">
            <X size={24} />
          </div>
        </div>

        <div className="chat-messages">
          {chatMessages.map((msg) => (
            <div 
              key={msg.id} 
              className={`chat-message ${msg.highlighted ? 'highlighted' : ''}`}
            >
              <div className="message-content">
                {msg.isVIP && <span className="vip-badge">⭐</span>}
                <span className="username">{msg.username}:</span>
                <span className="message">
                  {msg.message.split(' ').map((word, i) => {
                    if (word.startsWith('@')) {
                      return <span key={i} className="mention">{word} </span>;
                    } else if (word.includes('#')) {
                      return <span key={i} className="bet-id">{word} </span>;
                    } else {
                      return word + ' ';
                    }
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="chat-input-container">
          <div className="online-users">
            <span className="online-indicator">●</span>
            <span className="online-count">Online: 152,620</span>
          </div>
          <div className="chat-input-wrapper">
            <form onSubmit={handleSendMessage} className="chat-form">
              <input
                type="text"
                placeholder="Type your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="chat-input"
              />
              <button type="button" className="emoji-button">
                <Smile size={20} />
              </button>
              <button type="submit" className="send-button">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
