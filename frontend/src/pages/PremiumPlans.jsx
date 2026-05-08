import Navbar from "../components/Navbar";

function PremiumPlans() {

  const premiumFeatures = [

    {
      title: "Fast Delivery 🚚",
      desc:
        "Get wellness essentials and self-care products delivered faster with priority shipping.",
    },

    {
      title: "AI Wellness Predictions 📊",
      desc:
        "Advanced AI-based hormonal insights, cycle tracking, and personalized wellness suggestions.",
    },

    {
      title: "Exclusive Premium Care 🌸",
      desc:
        "Access premium wellness plans, self-care guidance, and exclusive lifestyle content.",
    },

  ];

  return (

    <div className="min-h-screen bg-[#14142b] text-white overflow-hidden relative">

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-pink-500/20 blur-[150px] rounded-full" />

        <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full" />

      </div>

      {/* 🌸 NAVBAR */}
      <Navbar />

      {/* 🌸 HERO */}
      <div className="text-center pt-24 px-6">

        <p className="text-pink-400 tracking-[6px] text-sm">

          PREMIUM • WELLNESS • AI

        </p>

        <h1 className="text-6xl md:text-7xl font-extrabold mt-6">

          Lunessa Premium ✨

        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-gray-300 text-lg leading-8">

          Unlock advanced wellness experiences,
          AI-powered health insights, faster product delivery,
          personalized hormonal analysis, and premium self-care support.

        </p>

      </div>

      {/* 🌸 FEATURES */}
      <div className="max-w-6xl mx-auto px-8 py-20 grid md:grid-cols-3 gap-8">

        {premiumFeatures.map((item, index) => (

          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-[35px] p-10 backdrop-blur-xl hover:scale-105 transition duration-300 shadow-2xl"
          >

            <h2 className="text-3xl font-bold text-pink-300">

              {item.title}

            </h2>

            <p className="mt-6 text-gray-300 leading-8">

              {item.desc}

            </p>

          </div>

        ))}

      </div>

      {/* 🌸 PREMIUM CARD */}
      <div className="max-w-4xl mx-auto px-8 pb-24">

        <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-white/10 rounded-[40px] p-12 text-center backdrop-blur-2xl shadow-2xl">

          <h2 className="text-5xl font-bold">

            Upgrade Your Wellness 💖

          </h2>

          <p className="mt-6 text-gray-300 text-lg leading-8">

            Enjoy exclusive wellness plans,
            premium support, emotional AI guidance,
            and priority access to Lunessa features.

          </p>

          <button
            className="mt-10 bg-gradient-to-r from-pink-500 to-purple-500 px-12 py-5 rounded-full text-2xl font-bold hover:scale-105 transition shadow-2xl"
          >

            Get Premium ✨

          </button>

        </div>

      </div>

    </div>
  );
}

export default PremiumPlans;