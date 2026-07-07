// FULL UPDATED SakhiChatbot.jsx
// PROFESSIONAL LUNESSA AI CHATBOT WITH GEMINI AI 🌸

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const API_URL = import.meta.env.VITE_API_URL || "";

function SakhiChatbot() {

  const [message, setMessage] =
    useState("");

  const [messages, setMessages] =
    useState([
      {
        sender: "sakhi",
        text:
          "Hello beautiful 🌸\nMain hoon Sakhi — tumhari caring wellness friend.\nAaj kaisa feel kar rahi ho? 💖",
      },
    ]);

  const [loading, setLoading] =
    useState(false);

  // 🌸 UNIQUE SESSION ID — keeps conversation memory alive
  const [sessionId] = useState(() =>
    Math.random().toString(36).substring(2)
  );

  const messagesEndRef = useRef(null);

  // 🌸 AUTO SCROLL TO BOTTOM
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  // 🌸 SEND MESSAGE TO GEMINI VIA BACKEND
  const sendMessage = async () => {

    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentMessage = message;
    setMessage("");

    try {

      setLoading(true);

      const response = await axios.post(
        `${API_URL}/api/chat`,
        {
          message: currentMessage,
          sessionId: sessionId,
        }
      );

      const botMessage = {
        sender: "sakhi",
        text: response.data.reply,
      };

      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {

      console.log(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "sakhi",
          text:
            "Oops 🌸\nSakhi is feeling a little tired right now.\nPlease try again after some time 💖",
        },
      ]);

    } finally {

      setLoading(false);
    }
  };

  // 🌸 ENTER KEY SUPPORT
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !loading) {
      sendMessage();
    }
  };

  return (

    <div className="min-h-screen bg-[#07071c] text-white overflow-hidden relative">

      {/* 🌈 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-pink-500/20 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-purple-500/20 blur-[150px] rounded-full animate-pulse" />
      </div>

      {/* 🌸 NAVBAR */}
      <Navbar />

      {/* 🌸 PAGE HEADER */}
      <div className="text-center pt-16 px-6">

        <p className="text-pink-400 tracking-[8px] text-sm">
          AI • WELLNESS • SUPPORT
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-6 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
          Sakhi 🌸
        </h1>

        <p className="mt-6 text-gray-400 text-xl">
          Your Caring Wellness Companion 💖
        </p>

      </div>

      {/* 🌸 CHAT CONTAINER */}
      <div className="max-w-5xl mx-auto mt-12 px-6 pb-10">

        <div className="bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-2xl shadow-[0_0_60px_rgba(255,105,180,0.15)] overflow-hidden">

          {/* 🌸 CHAT MESSAGES AREA */}
          <div className="h-[600px] overflow-y-auto p-8 space-y-6">

            {messages.map((msg, index) => (

              <div
                key={index}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`max-w-[80%] px-6 py-5 rounded-[30px] whitespace-pre-wrap leading-8 text-lg shadow-xl ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-pink-500 to-purple-500"
                      : "bg-white/10 border border-white/10"
                  }`}
                >

                  {/* 🌸 SENDER LABEL */}
                  <div className="flex items-center gap-3 mb-3">

                    {msg.sender === "sakhi" ? (
                      <>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                          alt="sakhi"
                          className="w-10 h-10 rounded-full border border-pink-400"
                        />
                        <span className="font-bold text-pink-300">
                          Sakhi 🌸
                        </span>
                      </>
                    ) : (
                      <>
                        <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-lg font-bold">
                          💖
                        </div>
                        <span className="font-bold">
                          You
                        </span>
                      </>
                    )}

                  </div>

                  {msg.text}

                </div>

              </div>

            ))}

            {/* 🌸 TYPING INDICATOR */}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/10 border border-white/10 px-6 py-5 rounded-[30px]">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                      alt="sakhi"
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="text-pink-300 font-bold animate-pulse">
                      Sakhi is typing...
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />

          </div>

          {/* 🌸 INPUT BAR */}
          <div className="border-t border-white/10 p-6 bg-black/20">
            <div className="flex gap-4">

              <input
                type="text"
                placeholder="Talk to Sakhi about wellness, periods, PCOD or self-care 🌸"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-white/10 border border-white/10 rounded-full px-6 py-5 outline-none text-lg placeholder-gray-400 focus:border-pink-400 transition"
              />

              <button
                onClick={sendMessage}
                disabled={loading}
                className="bg-gradient-to-r from-pink-500 to-purple-500 px-10 rounded-full font-bold text-xl hover:scale-105 transition disabled:opacity-50 shadow-2xl"
              >
                Send 💖
              </button>

            </div>
          </div>

        </div>

      </div>

      {/* 🌸 SUPPORT SECTION */}
      <div className="max-w-4xl mx-auto px-6 pb-20">

        <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl shadow-2xl text-center">

          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
            Need Help? 💖
          </h2>

          <p className="mt-5 text-gray-300 text-lg leading-8">
            If you face any technical issue,
            payment issue, login problem,
            chatbot error, or website issue,
            our Lunessa support team is here for you 🌸
          </p>

          <div className="mt-8 space-y-5">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-pink-300 text-xl font-semibold">
                📧 Customer Support Email
              </p>
              <p className="mt-2 text-gray-300 text-lg">
                lunessa.support@gmail.com
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-pink-300 text-xl font-semibold">
                📱 Support Contact Number
              </p>
              <p className="mt-2 text-gray-300 text-lg">
                +91 7856483799
              </p>
            </div>

          </div>

          <p className="mt-8 text-gray-400">
            Our support team usually replies within 24 hours ✨
          </p>

        </div>

      </div>

    </div>
  );
}

export default SakhiChatbot;
