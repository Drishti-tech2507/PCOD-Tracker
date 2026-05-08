import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Exercise() {

  const navigate = useNavigate();

  const [condition, setCondition] = useState("");
  const [goal, setGoal] = useState("");

  const [generatedPlan, setGeneratedPlan] = useState("");

  const generateWorkout = () => {

    if (!condition || !goal) {

      alert("Please select condition and goal 💖");
      return;
    }

    if (condition === "PCOD" && goal === "Weight Loss") {

      setGeneratedPlan(`
🌸 PCOD Weight Loss Routine

• 20 mins Yoga
• 30 mins Brisk Walking
• Hydration Goal: 3L Water
• Avoid processed sugar
• Meditation before sleep
      `);
    }

    else if (condition === "PCOS" && goal === "Hormonal Balance") {

      setGeneratedPlan(`
🌸 PCOS Hormonal Balance Routine

• 15 mins Breathing Exercise
• 25 mins Cardio
• Protein-rich diet
• Sleep before 11PM
• Stress management yoga
      `);
    }

    else {

      setGeneratedPlan(`
🌸 Personalized Wellness Workout

• Morning Stretching
• 30 mins Movement
• Daily Meditation
• Balanced Nutrition
• Evening Walk
      `);
    }
  };

  return (

    <div className="relative min-h-screen bg-[#0b0b1f] text-white overflow-hidden">

      {/* 🌈 BACKGROUND GLOW */}
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
          FITNESS • WELLNESS • BALANCE
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold mt-4">
          Exercise & Movement 🧘‍♀️
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-lg">
          Gentle workouts and hormone-friendly routines designed
          for PCOD, PCOS, and menstrual wellness.
        </p>

      </section>

      {/* 💎 EXERCISE TYPES */}
      <section className="relative z-10 px-8 md:px-16 pb-20">

        <h2 className="text-3xl font-bold mb-10">
          Workout Categories ✨
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Yoga",
              desc: "Improve flexibility, reduce stress & regulate hormones.",
              img: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
              path: "/Yoga",
            },
            {
              title: "Cardio",
              desc: "Boost energy, heart health & metabolism naturally.",
              img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
              path: "/Cardio",
            },
            {
              title: "Strength Training",
              desc: "Build strength & support hormonal balance.",
              img: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712",
              path: "/Strength",
            },
          ].map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl hover:scale-105 transition duration-300 shadow-xl"
            >

              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-400">
                  {item.desc}
                </p>

                <button
                  onClick={() => navigate(item.path)}
                  className="mt-5 bg-pink-500 hover:bg-pink-600 transition px-5 py-2 rounded-full"
                >
                  Explore
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* 🌸 DAILY ROUTINE */}
      <section className="relative z-10 px-8 md:px-16 pb-20">

        <h2 className="text-3xl font-bold mb-10">
          Daily Wellness Routine 🌿
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            "Morning Stretching",
            "Breathing Exercises",
            "Evening Walk",
            "Meditation",
          ].map((routine, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:bg-white/10 transition"
            >

              <h3 className="text-xl font-semibold">
                {routine}
              </h3>

              <p className="mt-3 text-gray-400">
                Build a healthy and calming routine daily.
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* 🧠 PERSONALIZED WORKOUT */}
      <section className="relative z-10 px-8 md:px-16 pb-24">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl shadow-xl">

          <h2 className="text-4xl font-bold text-center">
            Personalized Exercise Plan
          </h2>

          <p className="text-center text-gray-400 mt-4">
            Choose your condition and receive workout recommendations.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <select
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              className="bg-white/10 border border-white/10 p-3 rounded-lg outline-none"
            >
              <option value="">Select Condition</option>
              <option>PCOD</option>
              <option>PCOS</option>
              <option>Irregular Periods</option>
            </select>

            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="bg-white/10 border border-white/10 p-3 rounded-lg outline-none"
            >
              <option value="">Fitness Goal</option>
              <option>Weight Loss</option>
              <option>Hormonal Balance</option>
              <option>Stress Relief</option>
            </select>

            <button
              onClick={generateWorkout}
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition px-8 py-3 rounded-full font-semibold shadow-lg"
            >
              Generate Workout
            </button>

          </div>

          {/* 🌸 GENERATED PLAN */}
          {generatedPlan && (

            <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-8">

              <h3 className="text-2xl font-bold mb-5 text-pink-400">
                Your Wellness Plan 💖
              </h3>

              <pre className="whitespace-pre-wrap text-gray-300 leading-8">
                {generatedPlan}
              </pre>

            </div>
          )}

        </div>

      </section>

    </div>
  );
}

export default Exercise;