import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";

function Plan() {

  const [condition, setCondition] =
    useState("");

  const [diet, setDiet] =
    useState("");

  const [goal, setGoal] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [generatedPlan, setGeneratedPlan] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  // 🌸 GENERATE PLAN
  const generatePlan = async () => {

    if (
      !condition ||
      !diet ||
      !goal ||
      !email
    ) {

      alert(
        "Please fill all wellness details 💖"
      );

      return;
    }

    setLoading(true);

    try {

      const response = await axios.post(

        "http://localhost:8080/api/diet/generate",

        {
          conditionType: condition,
          dietType: diet,
          goal: goal,
          email: email,
        }
      );

      setGeneratedPlan(
        response.data.generatedPlan
      );

      alert(
        "✨ Your wellness plan has been generated and sent to your email successfully 💖"
      );

    } catch (error) {

      alert(
        "Failed to generate wellness plan"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen bg-[#0b0b1f] text-white overflow-hidden relative">

      {/* 🌈 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-pink-500/20 blur-[150px] rounded-full" />

        <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-purple-500/20 blur-[150px] rounded-full" />

      </div>

      {/* 🌙 NAVBAR */}
      <Navbar />

      {/* 🌸 HERO */}
      <div className="flex flex-col items-center justify-center px-6 pt-24 text-center">

        <p className="text-pink-400 tracking-[5px] text-sm">
          WELLNESS • NUTRITION • SELF CARE
        </p>

        <h1 className="text-6xl font-extrabold mt-5 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">

          Personalized Wellness Plan ✨

        </h1>

        <p className="mt-8 text-gray-400 max-w-3xl text-lg leading-8">

          Receive a customized wellness journey designed
          specially for your hormonal health, nutrition,
          exercise routines, hydration goals, emotional
          wellness, and self-care balance 💖

        </p>

        {/* 🌸 FORM */}
        <div className="mt-16 w-full max-w-5xl grid md:grid-cols-2 gap-6">

          {/* EMAIL */}
          <input
          type="email"
          placeholder="Enter Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-800/50 border border-white/10 px-6 py-5 rounded-2xl backdrop-blur-lg outline-none focus:border-pink-400 transition text-white"
          />

          {/* CONDITION */}
          <select
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="bg-gray-800/50 border border-white/10 px-6 py-5 rounded-2xl backdrop-blur-lg outline-none focus:border-pink-400 transition text-white"
          >
            <option value="" className="bg-gray-800 text-white">Select Condition</option>
            <option className="bg-gray-800 text-white">PCOD</option>
            <option className="bg-gray-800 text-white">PCOS</option>
            <option className="bg-gray-800 text-white">Irregular Periods</option>
          </select>

          {/* DIET */}
          <select
            value={diet}
            onChange={(e) => setDiet(e.target.value)}
            className="bg-gray-800/50 border border-white/10 px-6 py-5 rounded-2xl backdrop-blur-lg outline-none focus:border-pink-400 transition text-white"
          >
            <option value="" className="bg-gray-800 text-white">Diet Preference</option>
            <option className="bg-gray-800 text-white">Vegetarian</option>
            <option className="bg-gray-800 text-white">Vegan</option>
            <option className="bg-gray-800 text-white">Non-Vegetarian</option>
          </select>

`         {/* GOAL */}
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="bg-gray-800/50 border border-white/10 px-6 py-5 rounded-2xl backdrop-blur-lg outline-none focus:border-pink-400 transition text-white"
          >
            <option value="" className="bg-gray-800 text-white">Select Goal</option>
            <option className="bg-gray-800 text-white">Weight Loss</option>
            <option className="bg-gray-800 text-white">Hormonal Balance</option>
            <option className="bg-gray-800 text-white">Stress Relief</option>
            <option className="bg-gray-800 text-white">Healthy Lifestyle</option>
          </select>`

        </div>

        {/* 🌸 BUTTON */}
        <button
          onClick={generatePlan}
          disabled={loading}
          className="mt-12 bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition px-12 py-5 rounded-full text-2xl font-bold shadow-2xl disabled:opacity-60"
        >

          {
            loading
              ? "Generating Plan..."
              : "Generate Wellness Plan 💖"
          }

        </button>

      </div>

      {/* 🌸 GENERATED PLAN */}
      {

        generatedPlan && (

          <div className="px-8 md:px-20 py-20">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl shadow-2xl">

              <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                <div>

                  <h2 className="text-5xl font-bold text-pink-300">

                    Your Wellness Journey 🌿

                  </h2>

                  <p className="mt-4 text-gray-400 text-lg">

                    Your personalized wellness routine
                    has also been delivered to your email ✨

                  </p>

                </div>

                <div className="bg-pink-500/20 text-pink-300 px-6 py-3 rounded-full border border-pink-400/20">

                  Wellness Plan Ready 💖

                </div>

              </div>

              {/* PLAN CONTENT */}
              <div className="mt-12 bg-black/20 rounded-3xl p-8 border border-white/10">

                <pre className="whitespace-pre-wrap text-gray-300 leading-10 text-lg font-sans">

                  {generatedPlan}

                </pre>

              </div>

              {/* WELLNESS NOTES */}
              <div className="mt-10 grid md:grid-cols-3 gap-6">

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

                  <h3 className="text-xl font-semibold text-pink-300">
                    Hydration 💧
                  </h3>

                  <p className="mt-3 text-gray-400 leading-7">
                    Drink 2–3L water daily to support
                    metabolism and hormonal wellness.
                  </p>

                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

                  <h3 className="text-xl font-semibold text-pink-300">
                    Sleep 🌙
                  </h3>

                  <p className="mt-3 text-gray-400 leading-7">
                    Aim for 7–8 hours of quality sleep
                    for recovery and emotional balance.
                  </p>

                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

                  <h3 className="text-xl font-semibold text-pink-300">
                    Self Care ✨
                  </h3>

                  <p className="mt-3 text-gray-400 leading-7">
                    Practice mindfulness, relaxation,
                    and stress management daily.
                  </p>

                </div>

              </div>

            </div>

          </div>
        )
      }

    </div>
  );
}

export default Plan;