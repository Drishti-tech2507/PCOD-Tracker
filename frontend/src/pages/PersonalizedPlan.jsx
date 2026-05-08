import { useState } from "react";
import Navbar from "../components/Navbar";

function PersonalizedPlan() {

  const [condition, setCondition] = useState("");
  const [diet, setDiet] = useState("");
  const [goal, setGoal] = useState("");

  const [plan, setPlan] = useState(null);

  const generatePlan = () => {

    if (!condition || !diet || !goal) {
      alert("Please fill all fields");
      return;
    }

    // TEMP LOGIC (REAL BACKEND LATER)

    setPlan({
      meals:
        "Include fruits, leafy vegetables, whole grains, and hydration.",
      workout:
        "30 mins yoga + light cardio + stretching daily.",
      wellness:
        "Sleep 7-8 hrs, reduce stress, maintain routine.",
    });
  };

  return (
    <div className="relative min-h-screen bg-[#0b0b1f] text-white overflow-hidden">

      {/* 🌈 GLOW BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[150px] rounded-full top-[-120px] left-[-120px]" />

        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[150px] rounded-full bottom-[-100px] right-[-100px]" />

      </div>

      {/* 🌙 NAVBAR */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* 🌟 HERO */}
      <section className="relative z-10 text-center px-6 pt-20 pb-16">

        <p className="text-pink-400 tracking-widest text-sm">
          CUSTOM • WELLNESS • CARE
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold mt-4">
          Personalized Wellness Plan 💖
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-lg">
          Get personalized diet, exercise, and wellness
          suggestions based on your symptoms and lifestyle.
        </p>

      </section>

      {/* 🧠 FORM SECTION */}
      <section className="relative z-10 px-8 md:px-16 pb-20">

        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl shadow-xl">

          <h2 className="text-3xl font-bold text-center mb-10">
            Tell Us About Yourself ✨
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {/* CONDITION */}
            <div>
              <label className="block mb-3 text-gray-300">
                Select Condition
              </label>

              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="w-full bg-white/10 border border-white/10 p-4 rounded-xl outline-none"
              >
                <option value="">Choose</option>
                <option>PCOD</option>
                <option>PCOS</option>
                <option>Irregular Periods</option>
              </select>
            </div>

            {/* DIET */}
            <div>
              <label className="block mb-3 text-gray-300">
                Diet Preference
              </label>

              <select
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
                className="w-full bg-white/10 border border-white/10 p-4 rounded-xl outline-none"
              >
                <option value="">Choose</option>
                <option>Vegan</option>
                <option>Vegetarian</option>
                <option>Non-Vegetarian</option>
              </select>
            </div>

            {/* GOAL */}
            <div className="md:col-span-2">
              <label className="block mb-3 text-gray-300">
                Wellness Goal
              </label>

              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full bg-white/10 border border-white/10 p-4 rounded-xl outline-none"
              >
                <option value="">Choose</option>
                <option>Weight Management</option>
                <option>Hormonal Balance</option>
                <option>Stress Relief</option>
                <option>Healthy Lifestyle</option>
              </select>
            </div>

          </div>

          {/* BUTTON */}
          <div className="text-center mt-10">

            <button
              onClick={generatePlan}
              className="bg-gradient-to-r from-pink-500 to-purple-500 px-10 py-4 rounded-full font-semibold hover:scale-105 transition shadow-lg"
            >
              Generate My Plan
            </button>

          </div>

        </div>

      </section>

      {/* 💖 GENERATED PLAN */}
      {plan && (
        <section className="relative z-10 px-8 md:px-16 pb-24">

          <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl shadow-xl">

            <h2 className="text-4xl font-bold text-center mb-10">
              Your Wellness Plan 🌸
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              {/* MEALS */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

                <h3 className="text-2xl font-semibold text-pink-400">
                  Diet Plan 🍓
                </h3>

                <p className="mt-4 text-gray-300">
                  {plan.meals}
                </p>

              </div>

              {/* WORKOUT */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

                <h3 className="text-2xl font-semibold text-pink-400">
                  Exercise 🧘‍♀️
                </h3>

                <p className="mt-4 text-gray-300">
                  {plan.workout}
                </p>

              </div>

              {/* WELLNESS */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

                <h3 className="text-2xl font-semibold text-pink-400">
                  Wellness 🌿
                </h3>

                <p className="mt-4 text-gray-300">
                  {plan.wellness}
                </p>

              </div>

            </div>

          </div>

        </section>
      )}

    </div>
  );
}

export default PersonalizedPlan;