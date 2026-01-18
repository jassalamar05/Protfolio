import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function ChatBox() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "👋 Hi! How can I help you?", sender: "bot" },
  ]);

  const handleSend = () => {
    if (input.trim() === "") return;

    // User message
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Bot reply (auto)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Thanks! For Contacting , I will help you 😊", sender: "bot" },
      ]);
    }, 800);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-3 z-50 bg-violet-600 hover:bg-violet-500 text-white p-4 rounded-full shadow-lg"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-20 left-3 w-80 bg-white rounded-xl shadow-2xl border z-40 flex flex-col">

          {/* Header */}
          <div className="bg-[#050530] text-white px-4 py-3 rounded-t-xl font-semibold">
            Chat Support
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg w-fit max-w-[80%]
                  ${
                    msg.sender === "user"
                      ? "bg-violet-400 ml-auto text-black"
                      : "bg-gray-200 text-black"
                  }
                `}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 p-3 border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-violet-500 hover:bg-violet-600 px-4 py-2 rounded-lg text-white text-sm font-semibold"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
