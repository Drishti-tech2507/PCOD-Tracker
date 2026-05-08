// PCOSFood.jsx

function PCOSFood() {

  const recipes = [

    {
      name: "Protein Salad",

      image:
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1974&auto=format&fit=crop",

      ingredients:
        "Paneer, lettuce, cucumber, olive oil",

      steps:
        "1. Chop vegetables.\n2. Add paneer.\n3. Drizzle olive oil.",

      calories: "280 kcal",
    },

    {
      name: "Quinoa Bowl",

      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1974&auto=format&fit=crop",

      ingredients:
        "Quinoa, avocado, vegetables",

      steps:
        "1. Cook quinoa.\n2. Add vegetables.\n3. Mix with avocado.",

      calories: "320 kcal",
    },

    {
      name: "Greek Yogurt Mix",

      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1974&auto=format&fit=crop",

      ingredients:
        "Greek yogurt, berries, almonds",

      steps:
        "1. Add yogurt.\n2. Add berries.\n3. Top with almonds.",

      calories: "210 kcal",
    },

    {
      name: "Vegetable Soup",

      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1974&auto=format&fit=crop",

      ingredients:
        "Broccoli, peas, carrot, garlic",

      steps:
        "1. Boil vegetables.\n2. Blend slightly.\n3. Serve warm.",

      calories: "170 kcal",
    },

    {
      name: "Detox Smoothie",

      image:
        "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=1974&auto=format&fit=crop",

      ingredients:
        "Spinach, banana, almond milk",

      steps:
        "1. Blend ingredients.\n2. Add ice.\n3. Serve fresh.",

      calories: "180 kcal",
    },

    {
      name: "Brown Rice Bowl",

      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1974&auto=format&fit=crop",

      ingredients:
        "Brown rice, tofu, vegetables",

      steps:
        "1. Cook rice.\n2. Stir fry vegetables.\n3. Mix together.",

      calories: "310 kcal",
    },

    {
      name: "Fruit Oatmeal",

      image:
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1974&auto=format&fit=crop",

      ingredients:
        "Oats, berries, banana",

      steps:
        "1. Cook oats.\n2. Add fruits.\n3. Top with honey.",

      calories: "240 kcal",
    },

    {
      name: "Paneer Wrap",

      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1974&auto=format&fit=crop",

      ingredients:
        "Paneer, veggies, wheat wrap",

      steps:
        "1. Cook paneer.\n2. Add veggies.\n3. Wrap & toast.",

      calories: "290 kcal",
    },

    {
      name: "Detox Water",

      image:
        "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=1974&auto=format&fit=crop",

      ingredients:
        "Mint, cucumber, lemon",

      steps:
        "1. Add ingredients into water.\n2. Refrigerate.\n3. Drink chilled.",

      calories: "20 kcal",
    },

    {
      name: "Healthy Sandwich",

      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1974&auto=format&fit=crop",

      ingredients:
        "Brown bread, paneer, lettuce",

      steps:
        "1. Toast bread.\n2. Add fillings.\n3. Grill lightly.",

      calories: "250 kcal",
    },

  ];

  return (

    <div className="min-h-screen bg-[#14142b] text-white p-10 overflow-hidden relative">

      <h1 className="text-6xl font-bold text-center mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">

        PCOS Wellness Nutrition 💜

      </h1>

      <p className="text-center text-gray-400 max-w-4xl mx-auto text-lg leading-8 mb-20">

        PCOS wellness foods focus on improving metabolism,
        balancing hormones, reducing inflammation, and boosting energy ✨

      </p>

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

export default PCOSFood;