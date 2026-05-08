// FULL PROFESSIONAL Meditation.jsx

import Navbar from "../components/Navbar";

function Meditation() {

  return (

    <div className="relative min-h-screen bg-[#07071c] text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-pink-500/20 blur-[160px] rounded-full animate-pulse" />

        <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-purple-500/20 blur-[160px] rounded-full animate-pulse" />

      </div>

      {/* NAVBAR */}
      <div className="relative z-20">

        <Navbar />

      </div>

      {/* HERO */}
      <section className="relative z-10 text-center px-6 pt-24 pb-20">

        <p className="text-pink-400 tracking-[8px] text-sm">

          CALM • HEAL • BREATHE

        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold mt-6">

          Meditation & Mindfulness 🌸

        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-gray-300 text-lg leading-9">

          Meditation helps calm the nervous system,
          reduce stress hormones, improve emotional balance,
          and support hormonal wellness naturally.

        </p>

      </section>

      {/* BENEFITS */}
      <section className="relative z-10 px-8 md:px-16 pb-24">

        <h2 className="text-4xl font-bold text-center mb-16">

          Benefits Of Meditation ✨

        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              emoji: "🧠",
              title: "Mental Clarity",
              desc:
                "Improves focus and reduces overthinking.",
            },

            {
              emoji: "💖",
              title: "Stress Relief",
              desc:
                "Helps reduce anxiety and emotional stress.",
            },

            {
              emoji: "🌙",
              title: "Better Sleep",
              desc:
                "Supports deep relaxation and sleep quality.",
            },

          ].map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[35px] p-10 backdrop-blur-2xl text-center hover:scale-105 transition duration-300 shadow-2xl"
            >

              <div className="text-7xl animate-bounce">

                {item.emoji}

              </div>

              <h3 className="text-3xl font-bold mt-8">

                {item.title}

              </h3>

              <p className="mt-6 text-gray-400 text-lg leading-8">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* BREATHING */}
      <section className="relative z-10 px-8 md:px-16 pb-24">

        <div className="bg-white/5 border border-white/10 rounded-[45px] p-14 backdrop-blur-2xl text-center shadow-2xl">

          <div className="w-52 h-52 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse flex items-center justify-center text-4xl font-bold shadow-[0_0_80px_rgba(255,105,180,0.5)]">

            Breathe 🌸

          </div>

          <h2 className="text-5xl font-bold mt-12">

            Simple Breathing Exercise

          </h2>

          <p className="mt-8 text-gray-300 text-xl leading-9 max-w-3xl mx-auto">

            Inhale deeply for 4 seconds,
            hold for 4 seconds,
            and exhale slowly for 6 seconds.
            Repeat this cycle to calm your body and mind.

          </p>

        </div>

      </section>

      {/* QUOTE */}
      <section className="relative z-10 px-8 md:px-16 pb-28">

        <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-white/10 rounded-[45px] p-14 text-center backdrop-blur-2xl shadow-2xl">

          <div className="text-7xl animate-pulse">

            🌸

          </div>

          <h2 className="text-4xl font-bold mt-8 leading-relaxed">

            “Your mind deserves the same care
            and love that you give to others.” 💖

          </h2>

        </div>

      </section>

    </div>
  );
}

export default Meditation;