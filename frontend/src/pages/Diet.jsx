// UPDATED Diet.jsx
// ONLY RECIPE CATEGORIES — REMOVED CUSTOM DIET PLAN SECTION

import { useNavigate } from "react-router-dom";

function Diet() {

  const navigate = useNavigate();

  // 🌸 CATEGORY DATA
  const categories = [

    {
      title: "Weight Loss Meals",

      desc:
        "Healthy meals for hormonal balance, glowing skin & sustainable fat loss.",

      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1974&auto=format&fit=crop",

      path: "/weight-loss-recipes",
    },

    {
      title: "PCOD Friendly Diet",

      desc:
        "Nutrition plans specially designed to reduce inflammation & improve hormones.",

      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1974&auto=format&fit=crop",

      path: "/pcod-food",
    },

    {
      title: "PCOS Wellness Meals",

      desc:
        "Foods that naturally support hormonal balance and reproductive health.",

      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1974&auto=format&fit=crop",

      path: "/pcos-food",
    },

  ];

  return (

    <div className="min-h-screen bg-[#14142b] text-white p-10 overflow-hidden relative">

      {/* 🌈 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-pink-500/20 blur-[150px] rounded-full" />

        <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full" />

      </div>

      {/* 🌸 HEADER */}
      <div className="text-center">

        <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-8">

          Wellness Nutrition 🍓

        </h1>

        <p className="text-gray-400 max-w-4xl mx-auto text-lg leading-8 mb-20">

          Discover hormone-friendly meals, healing recipes,
          detox drinks, smoothies, balanced nutrition,
          and wellness foods specially designed for PCOD,
          PCOS, hormonal balance, glowing skin,
          energy, and healthy living ✨

        </p>

      </div>

      {/* 🌸 CATEGORY CARDS */}
      <div className="grid md:grid-cols-3 gap-10">

        {categories.map((item, index) => (

          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:scale-105 hover:shadow-pink-500/20 transition duration-300 shadow-2xl"
          >

            {/* IMAGE */}
            <div className="overflow-hidden">

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover hover:scale-110 transition duration-500"
              />

            </div>

            {/* CONTENT */}
            <div className="p-8">

              <h2 className="text-3xl font-bold">

                {item.title}

              </h2>

              <p className="mt-5 text-gray-400 leading-8 text-lg">

                {item.desc}

              </p>

              {/* FEATURES */}
              <div className="mt-6 flex flex-wrap gap-3">

                <span className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm">
                  Healthy Recipes
                </span>

                <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                  Hormonal Wellness
                </span>

                <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
                  Easy Cooking
                </span>

              </div>

              {/* BUTTON */}
              <button
                onClick={() =>
                  navigate(item.path)
                }
                className="mt-8 w-full bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition shadow-xl"
              >

                Explore Recipes ✨

              </button>

            </div>

          </div>
        ))}

      </div>

      {/* 🌸 EXTRA WELLNESS SECTION */}
      <div className="mt-28 bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-xl shadow-2xl">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* TEXT */}
          <div>

            <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">

              Food Is Your Wellness Power 💖

            </h2>

            <p className="mt-8 text-gray-300 leading-9 text-lg">

              A balanced wellness diet can help improve
              hormonal health, support metabolism,
              reduce inflammation, boost energy,
              improve mood, and promote healthy skin.

            </p>

            <p className="mt-6 text-gray-400 leading-8">

              Explore carefully curated recipes specially
              designed for women’s wellness, PCOD,
              PCOS, weight management,
              gut health, and self-care ✨

            </p>

            <button
              onClick={() =>
                navigate("/weight-loss-recipes")
              }
              className="mt-10 bg-gradient-to-r from-pink-500 to-purple-500 px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition shadow-xl"
            >

              Start Wellness Journey 🌸

            </button>

          </div>

          {/* IMAGE */}
          <div>

            <img
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1974&auto=format&fit=crop"
              alt="Wellness Food"
              className="rounded-3xl shadow-2xl h-[500px] w-full object-cover"
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Diet;