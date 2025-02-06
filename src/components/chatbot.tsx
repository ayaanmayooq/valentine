"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

export function DateIdeasChatbot() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "system", content: "You are a creative and romantic assistant helping to generate unique and personalized date ideas. The user will provide their preferences, and your job is to generate a **short and unique creative date ideas (limit ideas to one or two)** that match their input.### **User Input Details**:- **Date Type:** {option chosen, e.g., Adventurous, Romantic, Budget-Friendly, etc.}- **Additional Notes (if any):** {users extra input, e.g., must include a sunset view, something cozy}### **Formatting Rules**:- **Each idea should be no longer than 2 sentences.**- **Make them unique**, avoiding generic ideas like go to a movie or have dinner at a restaurant.- **Incorporate interesting, unexpected elements** (e.g., interactive experiences, challenges, themes).- **Add a fun title for each idea** (e.g., Midnight Stargazing & Hot Cocoa instead of just Stargazing).- **Ensure variety** – at least one indoor, one outdoor, and one experience-based date." },
  ]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.body) throw new Error("No response stream");

      const reader = response.body.getReader();
      let assistantResponse = "";
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]); // Add empty assistant message

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = new TextDecoder().decode(value);
        assistantResponse += chunk;

        setMessages((prev) => [
          ...prev.slice(0, -1), // Remove old assistant message
          { role: "assistant", content: assistantResponse }, // Update with new text
        ]);
      }
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [...prev, { role: "assistant", content: "I'm sorry, I couldn't process your request. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow p-4 overflow-auto bg-spotify-bottom rounded-lg shadow-md">
        {messages.slice(1).map((message, index) => (
          <div key={index} className={`mb-2 ${message.role === "user" ? "text-right" : "text-left"}`}>
            <div className={`inline-block px-4 py-2 rounded-lg ${message.role === "user" ? "bg-valentine-rose text-white" : "bg-gray-200 text-black"}`}>
              <ReactMarkdown components={{ p: "span" }}>{message.content}</ReactMarkdown> 
            </div>
          </div>
        ))}
        {loading && <p className="text-gray-500">...</p>}
      </div>

      {/* User Input */}
      <div className="mt-2 flex gap-2 justify-center">
        <input
          type="text"
          className="p-2 border rounded-lg w-full text-black"
          placeholder="Enter your date idea preference..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage} className="p-2 bg-valentine-rose text-white rounded-lg hover:bg-valentine-rose-dark">
          Send
        </button>
      </div>
    </div>
  );
}
