// FULL PROFESSIONAL PCOS.jsx
// ANIMATED + CLICKABLE LIFESTYLE SECTION

import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function PCOS() {

  const navigate = useNavigate();

  const healthyFoods = [
    {
      name: "Leafy Greens",
      emoji: "🥦",
      desc: "Rich in fiber and antioxidants for hormonal balance.",
    },

    {
      name: "Low Glycemic Fruits",
      emoji: "🍓",
      desc: "Help maintain stable blood sugar levels.",
    },

    {
      name: "Nuts & Seeds",
      emoji: "🥜",
      desc: "Provide healthy fats and omega-3 nutrients.",
    },

    {
      name: "Whole Grains",
      emoji: "🍚",
      desc: "Improve digestion and insulin sensitivity.",
    },

  ];

  const avoidFoods = [
    {
      name: "Sugary Desserts",
      emoji: "🍰",
      desc: "Can increase insulin spikes and inflammation.",
    },

    {
      name: "Soft Drinks",
      emoji: "🥤",
      desc: "High sugar content affects hormonal health.",
    },

    {
      name: "Processed Snacks",
      emoji: "🍟",
      desc: "Contain unhealthy fats and preservatives.",
    },

    {
      name: "Junk Food",
      emoji: "🍕",
      desc: "May worsen fatigue and weight imbalance.",
    },

  ];

  return (

    <div className="relative min-h-screen bg-[#0b0b1f] text-white overflow-hidden">

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[150px] rounded-full top-[-120px] left-[-120px] animate-pulse" />

        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[150px] rounded-full bottom-[-100px] right-[-100px] animate-pulse" />

      </div>

      {/* 🌙 NAVBAR */}
      <div className="relative z-20">

        <Navbar />

      </div>

      {/* 🌟 HERO */}
      <section className="relative z-10 text-center px-6 pt-20 pb-20">

        <p className="text-pink-400 tracking-[8px] text-sm">

          HORMONES • WELLNESS • SELF-CARE

        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold mt-6">

          Understanding PCOS 🌸

        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">

          PCOS (Polycystic Ovary Syndrome) is a hormonal condition
          affecting periods, metabolism, skin, energy levels,
          and emotional wellness. Healthy nutrition, movement,
          mindfulness, and consistent self-care can help improve symptoms naturally.

        </p>

      </section>

      {/* ⚠ SYMPTOMS */}
      <section className="relative z-10 px-8 md:px-16 pb-24">

        <h2 className="text-4xl font-bold mb-14 text-center">

          Common Symptoms ⚠

        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {[
            {
              title: "Irregular Cycles",
              emoji: "🌸",
            },

            {
              title: "Weight Gain",
              emoji: "⚖",
            },

            {
              title: "Hair Growth",
              emoji: "💇‍♀",
            },

            {
              title: "Fatigue",
              emoji: "😴",
            },

          ].map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-xl hover:scale-105 transition duration-300 shadow-2xl text-center"
            >

              <div className="text-6xl animate-bounce">

                {item.emoji}

              </div>

              <h3 className="text-2xl font-bold mt-6">

                {item.title}

              </h3>

              <p className="mt-4 text-gray-400 leading-7">

                Understand how hormonal imbalance
                affects wellness and energy.

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* 🥗 NUTRITION */}
      <section className="relative z-10 px-8 md:px-16 pb-24">

        <h2 className="text-4xl font-bold text-center mb-16">

          PCOS Nutrition Guide 🥗

        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* GOOD FOODS */}
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-400/20 rounded-[40px] p-10 backdrop-blur-2xl shadow-2xl">

            <h2 className="text-4xl font-bold text-green-400 text-center">

              Recommended Foods 💚

            </h2>

            <div className="mt-10 space-y-6">

              {healthyFoods.map((food, index) => (

                <div
                  key={index}
                  className="bg-white/5 rounded-3xl p-6 flex items-center gap-5 hover:bg-green-500/10 transition duration-300"
                >

                  <div className="text-5xl animate-pulse">

                    {food.emoji}

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">

                      {food.name}

                    </h3>

                    <p className="text-gray-300 mt-2">

                      {food.desc}

                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* BAD FOODS */}
          <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-400/20 rounded-[40px] p-10 backdrop-blur-2xl shadow-2xl">

            <h2 className="text-4xl font-bold text-red-400 text-center">

              Foods To Limit 🚫

            </h2>

            <div className="mt-10 space-y-6">

              {avoidFoods.map((food, index) => (

                <div
                  key={index}
                  className="bg-white/5 rounded-3xl p-6 flex items-center gap-5 hover:bg-red-500/10 transition duration-300"
                >

                  <div className="text-5xl animate-bounce">

                    {food.emoji}

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">

                      {food.name}

                    </h3>

                    <p className="text-gray-300 mt-2">

                      {food.desc}

                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* 🌿 LIFESTYLE */}
      <section className="relative z-10 px-8 md:px-16 pb-24">

        <h2 className="text-4xl font-bold mb-14 text-center">

          Exercise & Stress Management 🌿

        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Yoga & Stretching",
              emoji: "🧘‍♀",
              path: "/yoga",
              desc:
                "Supports flexibility and hormonal wellness.",
            },

            {
              title: "Cardio Workouts",
              emoji: "🏃‍♀",
              path: "/cardio",
              desc:
                "Improves metabolism and insulin sensitivity.",
            },

            {
              title: "Meditation",
              emoji: "🌸",
              path: "/meditation",
              desc:
                "Helps reduce stress and improve emotional balance.",
            },

          ].map((item, index) => (

            <div
              key={index}

              onClick={() =>
                navigate(item.path)
              }

              className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-xl hover:scale-105 hover:border-pink-400 transition duration-300 text-center shadow-2xl cursor-pointer group"
            >

              <div className="text-6xl animate-bounce group-hover:scale-125 transition duration-300">

                {item.emoji}

              </div>

              <h3 className="text-3xl font-bold mt-6 group-hover:text-pink-300 transition">

                {item.title}

              </h3>

              <p className="mt-5 text-gray-400 text-lg leading-8">

                {item.desc}

              </p>

              <button className="mt-8 bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-full font-semibold hover:scale-105 transition">

                Explore ✨

              </button>

            </div>

          ))}

        </div>

      </section>

      {/* 💖 WELLNESS */}
      <section className="relative z-10 px-8 md:px-16 pb-28">

        <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-white/10 rounded-[45px] p-14 text-center backdrop-blur-2xl shadow-2xl">

          <div className="text-7xl animate-pulse">

            

          </div>

          <h2 className="text-5xl font-bold mt-8">

            Wellness Reminder ✨

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-gray-300 text-xl leading-relaxed">

            Managing PCOS takes patience, consistency,
            movement, balanced nutrition, emotional wellness,
            and self-love. Small daily habits can create
            powerful long-term wellness improvements.

          </p>

        </div>

      </section>

    </div>
  );
}

export default PCOS;