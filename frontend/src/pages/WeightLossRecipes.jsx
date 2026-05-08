// WeightLossRecipes.jsx

function WeightLossRecipes() {

  const recipes = [

    {
      name: "Chia Pudding",
      image:
        "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?q=80&w=1974&auto=format&fit=crop",

      ingredients:
        "Chia seeds, almond milk, berries, honey",

      steps:
        "1. Mix chia seeds with almond milk.\n2. Refrigerate overnight.\n3. Add berries & honey before serving.",

      calories: "220 kcal",
    },

    {
      name: "Avocado Salad",

      image:
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1974&auto=format&fit=crop",

      ingredients:
        "Avocado, cucumber, tomato, olive oil",

      steps:
        "1. Chop vegetables.\n2. Add avocado.\n3. Drizzle olive oil & lemon.",

      calories: "250 kcal",
    },

    {
      name: "Protein Smoothie",

      image:
        "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=1974&auto=format&fit=crop",

      ingredients:
        "Banana, almond milk, protein powder",

      steps:
        "1. Blend everything.\n2. Serve chilled.\n3. Add nuts if desired.",

      calories: "180 kcal",
    },

    {
      name: "Greek Yogurt Bowl",

      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1974&auto=format&fit=crop",

      ingredients:
        "Greek yogurt, fruits, nuts, honey",

      steps:
        "1. Add yogurt in bowl.\n2. Add fruits.\n3. Top with nuts & honey.",

      calories: "200 kcal",
    },

    {
      name: "Vegetable Soup",

      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1974&auto=format&fit=crop",

      ingredients:
        "Carrot, broccoli, peas, garlic",

      steps:
        "1. Boil vegetables.\n2. Blend lightly.\n3. Add herbs & serve hot.",

      calories: "150 kcal",
    },

    {
      name: "Paneer Wrap",

      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1974&auto=format&fit=crop",

      ingredients:
        "Paneer, veggies, wheat wrap",

      steps:
        "1. Cook paneer.\n2. Add vegetables.\n3. Wrap & toast lightly.",

      calories: "280 kcal",
    },

    {
      name: "Detox Water",

      image:
        "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=1974&auto=format&fit=crop",

      ingredients:
        "Mint, cucumber, lemon",

      steps:
        "1. Slice ingredients.\n2. Add into water.\n3. Refrigerate for 2 hours.",

      calories: "20 kcal",
    },

    {
      name: "Brown Rice Bowl",

      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1974&auto=format&fit=crop",

      ingredients:
        "Brown rice, tofu, veggies",

      steps:
        "1. Cook brown rice.\n2. Stir fry veggies.\n3. Combine together.",

      calories: "300 kcal",
    },

    {
      name: "Fruit Oatmeal",

      image:
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1974&auto=format&fit=crop",

      ingredients:
        "Oats, berries, banana, honey",

      steps:
        "1. Cook oats.\n2. Add fruits.\n3. Top with honey.",

      calories: "240 kcal",
    },

    {
      name: "Healthy Sandwich",

      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1974&auto=format&fit=crop",

      ingredients:
        "Brown bread, paneer, lettuce, tomato",

      steps:
        "1. Toast bread.\n2. Add fillings.\n3. Grill & serve.",

      calories: "260 kcal",
    },

  ];

  return (

    <div className="min-h-screen bg-[#14142b] text-white p-10 overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-pink-500/20 blur-[150px] rounded-full" />

        <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-purple-500/20 blur-[150px] rounded-full" />

      </div>

      {/* HEADER */}
      <h1 className="text-6xl font-bold text-center mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">

        Weight Loss Wellness Meals 🥗

      </h1>

      <p className="text-center text-gray-400 max-w-4xl mx-auto text-lg leading-8 mb-20">

        Explore healthy recipes specially designed
        for wellness, hormonal balance, fat loss,
        glowing skin, and sustainable energy.

      </p>

      {/* RECIPES */}
      <div className="grid md:grid-cols-2 gap-10">

        {recipes.map((item, index) => (

          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:scale-105 transition duration-300 shadow-2xl"
          >

            <img
              src={item.image}
              alt={item.name}
              className="w-full h-80 object-cover"
            />

            <div className="p-8">

              <div className="flex justify-between items-center">

                <h2 className="text-3xl font-bold">
                  {item.name}
                </h2>

                <span className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm">
                  {item.calories}
                </span>

              </div>

              <div className="mt-6">

                <h3 className="text-xl font-semibold text-pink-300">
                  Ingredients 🥑
                </h3>

                <p className="mt-3 text-gray-300 leading-7">
                  {item.ingredients}
                </p>

              </div>

              <div className="mt-6">

                <h3 className="text-xl font-semibold text-pink-300">
                  Preparation 🍲
                </h3>

                <pre className="mt-3 whitespace-pre-wrap text-gray-300 leading-8 font-sans">
                  {item.steps}
                </pre>

              </div>

              <button className="mt-8 bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-3 rounded-full font-semibold hover:scale-105 transition">

                Add To Wellness Plan ✨

              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default WeightLossRecipes;