// FULL UPDATED HOME.JSX
// PROFESSIONAL LUNESSA HOME WITH WORKING SAKHI CHATBOT + GEMINI AI 💖

import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "";

function Home() {

  const navigate = useNavigate();

  // 🌸 CHATBOT
  const [openChat, setOpenChat] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  // 🌸 SESSION ID — unique per browser session
  const [sessionId] = useState(() =>
    Math.random().toString(36).substring(2)
  );

  const [messages, setMessages] =
    useState([
      {
        sender: "sakhi",
        text:
          "Hello beautiful 🌸\nMain hoon Sakhi — tumhari wellness friend 💖\n\nAap mujhse PCOD, PCOS, periods, stress ya self-care ke baare mein kuch bhi pooch sakte ho 😊",
      },
    ]);

  // 🌸 SEND MESSAGE
  const sendMessage = async () => {

    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    const currentMessage = message;

    setMessage("");

    try {

      setLoading(true);

      const response =
        await axios.post(
          `${API_URL}/api/chat`,
          {
            message: currentMessage,
            sessionId: sessionId,
          }
        );

      setMessages((prev) => [
        ...prev,
        {
          sender: "sakhi",
          text: response.data.reply,
        },
      ]);

    } catch (error) {

      console.log(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "sakhi",
          text:
            "⚠ Sakhi is facing some technical issue right now.\n\nPlease try again later 💖\n\n📧 lunessa.support@gmail.com\n📱 +91 7856483799",
        },
      ]);

    } finally {

      setLoading(false);
    }
  };

  // 🌸 FEATURES
  const features = [
    {
      title: "Diet Plans",
      desc: "Healthy meal plans for hormonal balance",
      path: "/diet",
    },
    {
      title: "Exercise",
      desc: "Hormone-friendly workouts & yoga",
      path: "/exercise",
    },
    {
      title: "PCOD Care",
      desc: "Understand symptoms & management",
      path: "/pcod",
    },
    {
      title: "PCOS Care",
      desc: "Lifestyle solutions for better health",
      path: "/pcos",
    },
  ];

  // 🌸 PRODUCTS
  const products = [
    {
      name: "Pads",
      path: "/pads",
    },
    {
      name: "Supplements",
      path: "/supplements",
    },
    {
      name: "Care Kits",
      path: "/carekits",
    },
  ];

  return (

    <div className="relative min-h-screen overflow-hidden bg-[#14142b] text-white">

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-pink-500/20 blur-[120px] rounded-full" />

        <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-purple-500/20 blur-[120px] rounded-full" />

      </div>

      {/* 🌸 NAVBAR */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* 🎥 HERO */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source
            src="https://www.w3schools.com/howto/rain.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#0b0b1f]/40 to-[#0b0b1f]" />

        <div className="relative z-10 text-center px-6">

          <p className="text-pink-300 tracking-[6px] uppercase text-sm">
            Wellness • Balance • Self-Care
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-6 leading-tight">
            Take Control Of <br />
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Your Wellness Journey
            </span>
          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
            Personalized wellness support for PCOD,
            PCOS, hormonal balance, nutrition,
            fitness, and self-care.
          </p>

          {/* 🌸 BUTTONS */}
          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <button
              onClick={() => navigate("/premium-plans")}
              className="bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 rounded-full font-semibold hover:scale-105 transition shadow-2xl"
            >
              Explore Premium Plans ✨
            </button>

            <button
              onClick={() => navigate("/about")}
              className="border border-white/20 bg-white/10 backdrop-blur-lg px-8 py-4 rounded-full hover:bg-white/20 transition"
            >
              Learn About Lunessa 💖
            </button>

          </div>

        </div>

      </section>

      {/* 🌸 FEATURES */}
      <section className="relative z-10 px-8 md:px-16 pb-20">

        <h2 className="text-3xl font-bold mb-10">
          Wellness Features ✨
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-lg"
            >

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {item.desc}
              </p>

              <button
                onClick={() => navigate(item.path)}
                className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2 rounded-full hover:scale-105 transition"
              >
                Explore ✨
              </button>

            </div>

          ))}

        </div>

      </section>

      {/* 🌸 SHOP */}
      <section className="relative z-10 px-8 md:px-16 pb-20">

        <h2 className="text-3xl font-bold text-center mb-10">
          Wellness Essentials 🛍
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {products.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-lg text-center hover:scale-105 transition"
            >

              <h3 className="text-2xl font-semibold">
                {item.name}
              </h3>

              <button
                onClick={() => navigate(item.path)}
                className="mt-5 bg-pink-500 hover:bg-pink-600 px-5 py-2 rounded-full"
              >
                Buy Now
              </button>

            </div>

          ))}

        </div>

      </section>

      {/* 🌸 FLOATING CHATBOT */}
      <div className="fixed bottom-6 right-6 z-50">

        {/* 🌸 CHAT WINDOW */}
        {openChat && (

          <div className="w-[370px] h-[600px] bg-[#0b0b1f] border border-white/10 rounded-[35px] shadow-2xl overflow-hidden backdrop-blur-2xl flex flex-col mb-5">

            {/* 🌸 HEADER */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-5 flex items-center justify-between">

              <div className="flex items-center gap-3">

                <img
                  src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                  alt="sakhi"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />

                <div>
                  <h2 className="font-bold text-xl">
                    Sakhi 🌸
                  </h2>
                  <p className="text-sm text-pink-100">
                    Wellness Companion
                  </p>
                </div>

              </div>

              <button
                onClick={() => setOpenChat(false)}
                className="text-2xl"
              >
                ✕
              </button>

            </div>

            {/* 🌸 CHAT MESSAGES */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">

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
                    className={`max-w-[85%] px-4 py-3 rounded-3xl whitespace-pre-wrap text-sm leading-7 ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-pink-500 to-purple-500"
                        : "bg-white/10 border border-white/10"
                    }`}
                  >
                    {msg.text}
                  </div>

                </div>

              ))}

              {/* 🌸 TYPING INDICATOR */}
              {loading && (
                <div className="bg-white/10 border border-white/10 px-4 py-3 rounded-3xl w-fit text-pink-300 animate-pulse">
                  Sakhi is typing...
                </div>
              )}

            </div>

            {/* 🌸 INPUT */}
            <div className="p-4 border-t border-white/10 flex gap-3">

              <input
                type="text"
                placeholder="Talk to Sakhi 🌸"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
                className="flex-1 bg-white/10 border border-white/10 rounded-full px-4 py-3 outline-none text-sm"
              />

              <button
                onClick={sendMessage}
                disabled={loading}
                className="bg-gradient-to-r from-pink-500 to-purple-500 px-5 rounded-full hover:scale-110 transition flex items-center justify-center disabled:opacity-50"
              >
                ➤
              </button>

            </div>

            {/* 🌸 SUPPORT FOOTER */}
            <div className="text-center text-xs text-gray-400 py-3 border-t border-white/10">
              📧 lunessa.support@gmail.com <br />
              📱 +91 7856483799
            </div>

          </div>

        )}

        {/* 🌸 FLOAT BUTTON */}
        <button
          onClick={() => setOpenChat(!openChat)}
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-110 transition p-5 rounded-full shadow-[0_0_40px_rgba(255,105,180,0.6)] text-2xl"
        >
          💬
        </button>

      </div>

    </div>
  );
}

export default Home;
