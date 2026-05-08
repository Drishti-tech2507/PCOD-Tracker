// FULL PROFESSIONAL PCOD.jsx

import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function PCOD() {

  const navigate = useNavigate();

  const foodsToEat = [
    {
      name: "Avocados",
      emoji: "🥑",
      desc: "Rich in healthy fats that support hormonal balance.",
    },
    {
      name: "Green Vegetables",
      emoji: "🥦",
      desc: "Help reduce inflammation and improve metabolism.",
    },
    {
      name: "Berries",
      emoji: "🍓",
      desc: "Packed with antioxidants for better hormonal health.",
    },
    {
      name: "Nuts & Seeds",
      emoji: "🥜",
      desc: "Provide omega-3 and essential nutrients.",
    },
  ];

  const foodsToAvoid = [
    {
      name: "Sugary Drinks",
      emoji: "🥤",
      desc: "Can spike insulin and worsen PCOD symptoms.",
    },
    {
      name: "Fast Food",
      emoji: "🍕",
      desc: "High unhealthy fats may increase inflammation.",
    },
    {
      name: "Processed Food",
      emoji: "🍟",
      desc: "Contains preservatives and refined ingredients.",
    },
    {
      name: "Excess Sugar",
      emoji: "🍰",
      desc: "May lead to weight gain and hormonal imbalance.",
    },
  ];

  return (

    <div className="relative min-h-screen bg-[#0b0b1f] text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[150px] rounded-full top-[-120px] left-[-120px] animate-pulse" />

        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[150px] rounded-full bottom-[-100px] right-[-100px] animate-pulse" />

      </div>

      {/* NAVBAR */}
      <div className="relative z-20">

        <Navbar />

      </div>

      {/* HERO */}
      <section className="relative z-10 text-center px-6 pt-20 pb-20">

        <p className="text-pink-400 tracking-[8px] text-sm">

          AWARENESS • CARE • BALANCE

        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold mt-6">

          Understanding PCOD 🌸

        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">

          PCOD (Polycystic Ovarian Disease) is a hormonal condition
          affecting metabolism, periods, skin health, and emotional wellness.
          Healthy routines, nutrition, exercise, and stress management can help
          improve symptoms naturally.

        </p>

      </section>

      {/* SYMPTOMS */}
      <section className="relative z-10 px-8 md:px-16 pb-24">

        <h2 className="text-4xl font-bold mb-12 text-center">

          Common Symptoms ⚠

        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {[
            {
              title: "Irregular Periods",
              emoji: "🌸",
            },
            {
              title: "Weight Gain",
              emoji: "⚖",
            },
            {
              title: "Acne & Hair Fall",
              emoji: "💇‍♀",
            },
            {
              title: "Mood Swings",
              emoji: "😔",
            },
          ].map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition duration-300 shadow-xl text-center"
            >

              <div className="text-6xl animate-bounce">

                {item.emoji}

              </div>

              <h3 className="text-2xl font-bold mt-5">

                {item.title}

              </h3>

              <p className="mt-4 text-gray-400">

                Hormonal imbalance can affect both physical
                and emotional wellness.

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* FOOD SECTION */}
      <section className="relative z-10 px-8 md:px-16 pb-24">

        <h2 className="text-4xl font-bold text-center mb-16">

          PCOD Nutrition Guide 🥗

        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* GOOD FOODS */}
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-400/20 rounded-[40px] p-10 backdrop-blur-2xl shadow-2xl">

            <h2 className="text-4xl font-bold text-green-400 text-center">

              Foods To Eat 💚

            </h2>

            <div className="mt-10 space-y-6">

              {foodsToEat.map((food, index) => (

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

              Foods To Avoid 🚫

            </h2>

            <div className="mt-10 space-y-6">

              {foodsToAvoid.map((food, index) => (

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

      {/* LIFESTYLE */}
      <section className="relative z-10 px-8 md:px-16 pb-24">

        <h2 className="text-4xl font-bold mb-14 text-center">

          Lifestyle & Exercise 🌿

        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Yoga",
              emoji: "🧘‍♀",
              path: "/yoga",
              desc:
                "Reduces stress and improves hormonal wellness naturally.",
            },

            {
              title: "Daily Walks",
              emoji: "🚶‍♀",
              path: "/cardio",
              desc:
                "Supports weight balance and metabolism.",
            },

            {
              title: "Meditation",
              emoji: "🌸",
              path: "/meditation",
              desc:
                "Helps calm the mind and improve emotional health.",
            },

          ].map((item, index) => (

            <div
              key={index}

              onClick={() =>
                navigate(item.path)
              }

              className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-xl hover:scale-105 hover:border-pink-400 transition duration-300 text-center shadow-xl cursor-pointer group"
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

      {/* REMINDER */}
      <section className="relative z-10 px-8 md:px-16 pb-28">

        <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-white/10 rounded-[45px] p-14 text-center backdrop-blur-2xl shadow-2xl">

          <div className="text-7xl mb-8 animate-pulse">


          </div>

          <h2 className="text-5xl font-bold">

            Wellness Reminder

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-gray-300 text-xl leading-relaxed">

            Healing takes consistency, patience, and self-love.
            Small healthy habits every day can create
            positive changes in managing PCOD naturally.

          </p>

        </div>

      </section>

    </div>
  );
}

export default PCOD;