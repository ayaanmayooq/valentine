// src/components/DateIdeasChatbot.tsx

"use client";

import React, { useState } from "react";
import axios from "axios";

export function DateIdeasChatbot() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "system", content: "You are a romantic date idea assistant. Suggest fun, creative, or unique date ideas based on user input." },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async (category: string) => {
    // Add user message based on category clicked
    const userMessage = { role: "user", content: `Suggest some ${category} date ideas.` };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    setInput(""); // Clear input after sending

    try {
      // Send the message to the API route
      const response = await axios.post("/api/chat", {
        messages: updatedMessages,
      });
      const assistantMessage = {
        role: "assistant",
        content: response.data.content,
      };
      setMessages([...updatedMessages, assistantMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      const errorMessage = {
        role: "assistant",
        content: "I'm sorry, I couldn't process your request. Please try again.",
      };
      setMessages([...updatedMessages, errorMessage]);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow p-4 overflow-auto bg-spotify-bottom rounded-lg shadow-md">
        {messages.slice(1).map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${message.role === "user" ? "text-right" : "text-left"}`}
          >
            <p
              className={`inline-block px-4 py-2 rounded-lg ${
                message.role === "user" ? "bg-valentine-rose text-white" : "bg-gray-200 text-black"
              }`}
            >
              {message.content}
            </p>
          </div>
        ))}
      </div>

      {/* Category Buttons */}
      <div className="mt-2 flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => sendMessage("dinner")}
          className="p-2 bg-valentine-rose text-white rounded-lg hover:bg-valentine-rose-dark"
        >
          Dinner
        </button>
        <button
          onClick={() => sendMessage("outdoor activities")}
          className="p-2 bg-valentine-rose text-white rounded-lg hover:bg-valentine-rose-dark"
        >
          Outdoor Activities
        </button>
        <button
          onClick={() => sendMessage("indoor activities")}
          className="p-2 bg-valentine-rose text-white rounded-lg hover:bg-valentine-rose-dark"
        >
          Indoor Activities
        </button>
        <button
          onClick={() => sendMessage("adventurous activities")}
          className="p-2 bg-valentine-rose text-white rounded-lg hover:bg-valentine-rose-dark"
        >
          Adventurous Activities
        </button>
        {/* Add more buttons for other categories */}
      </div>
    </div>
  );
}
