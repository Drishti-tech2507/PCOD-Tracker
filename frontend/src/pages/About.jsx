// About.jsx
// PROFESSIONAL ABOUT PAGE

import Navbar from "../components/Navbar";

function About() {

  return (

    <div className="min-h-screen bg-[#0b0b1f] text-white overflow-hidden relative">

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-pink-500/20 blur-[150px] rounded-full" />

        <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-purple-500/20 blur-[150px] rounded-full" />

      </div>

      <Navbar />

      {/* HERO */}
      <div className="text-center pt-24 px-6">

        <p className="text-pink-400 tracking-[8px] text-sm">

          ABOUT • WELLNESS • LIFESTYLE

        </p>

        <h1 className="text-7xl font-bold mt-6">

          About Lunessa 

        </h1>

        <p className="max-w-4xl mx-auto mt-8 text-gray-300 text-xl leading-10">

          Lunessa is a modern wellness platform specially designed
          for women’s hormonal health, PCOD/PCOS care,
          personalized nutrition, self-care, wellness shopping,
          and emotional wellbeing.

        </p>

      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto mt-24 px-8 grid md:grid-cols-2 gap-10">

        {/* WHAT IS LUNESSA */}
        <div className="bg-white/5 border border-white/10 rounded-[35px] p-10 backdrop-blur-2xl shadow-xl">

          <h2 className="text-4xl font-bold text-pink-300">

            🌸 What is Lunessa?

          </h2>

          <p className="mt-8 text-gray-300 leading-9 text-lg">

            Lunessa is a wellness ecosystem that combines
            AI-powered health support, personalized diet plans,
            hormone-friendly workouts, wellness tracking,
            emotional care, and curated self-care shopping
            into one beautiful platform.

            <br /><br />

            The platform helps users better understand
            hormonal imbalances, menstrual wellness,
            PCOD/PCOS management, nutrition habits,
            and self-care routines.

          </p>

        </div>

        {/* WHY DIFFERENT */}
        <div className="bg-white/5 border border-white/10 rounded-[35px] p-10 backdrop-blur-2xl shadow-xl">

          <h2 className="text-4xl font-bold text-pink-300">

            ✨ Why is Lunessa Different?

          </h2>

          <p className="mt-8 text-gray-300 leading-9 text-lg">

            Unlike traditional wellness websites,
            Lunessa combines technology, beauty,
            emotional wellness, AI recommendations,
            cycle wellness, fitness, and nutrition
            into one immersive experience.

            <br /><br />

            Features include:

            <br /><br />

            💖 Personalized wellness plans

            <br />

            🍓 PCOD & PCOS friendly recipes

            <br />

            🧘 Wellness exercises & yoga

            <br />

            🛍 Real shopping & cart system

            <br />

            📊 Wellness tracking dashboard

            <br />

            🤖 AI wellness assistance

            <br />

            🚚 Premium fast-delivery wellness plans

          </p>

        </div>

      </div>

      {/* PREMIUM */}
      <div className="max-w-7xl mx-auto mt-16 px-8">

        <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-white/10 rounded-[40px] p-12 backdrop-blur-2xl shadow-xl">

          <h2 className="text-5xl font-bold text-center">

            Premium Wellness Experience ✨

          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div className="bg-white/10 rounded-3xl p-8">

              <h3 className="text-3xl font-bold text-pink-300">

                🚚 Fast Delivery

              </h3>

              <p className="mt-5 text-gray-300 leading-8">

                Get wellness products, care kits,
                and supplements delivered faster
                with priority shipping.

              </p>

            </div>

            <div className="bg-white/10 rounded-3xl p-8">

              <h3 className="text-3xl font-bold text-pink-300">

                📊 Advanced Predictions

              </h3>

              <p className="mt-5 text-gray-300 leading-8">

                Access smarter wellness insights,
                personalized recommendations,
                and hormonal wellness predictions.

              </p>

            </div>

            <div className="bg-white/10 rounded-3xl p-8">

              <h3 className="text-3xl font-bold text-pink-300">

                🌸 Exclusive Care

              </h3>

              <p className="mt-5 text-gray-300 leading-8">

                Unlock premium wellness routines,
                exclusive recipes, emotional support,
                and customized self-care journeys.

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* FOUNDERS */}
      <div className="max-w-5xl mx-auto mt-24 mb-24 px-8">

        <div className="bg-white/5 border border-white/10 rounded-[40px] p-12 backdrop-blur-2xl text-center shadow-xl">

          <h2 className="text-5xl font-bold text-pink-300">

            Created by

          </h2>

          <p className="mt-8 text-2xl text-gray-300 leading-10">

            Lunessa was designed and developed with passion
            to empower wellness, confidence, and self-care
            for modern women.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-8">

            <div className="bg-white/10 px-10 py-6 rounded-3xl text-2xl font-semibold">

              👩‍💻 Drishti Chopra

            </div>

            <div className="bg-white/10 px-10 py-6 rounded-3xl text-2xl font-semibold">

              👨‍💻 Sparsh Kapoor

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default About;