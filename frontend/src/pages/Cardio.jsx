import { useState, useEffect } from "react";

function Cardio() {

  const workouts = [

    {
      name: "Walking",

      benefit: "Improves metabolism & supports weight management",

      img:
        "https://images.unsplash.com/photo-1502224562085-639556652f33?q=80&w=1974&auto=format&fit=crop",

      duration: 60,
    },

    {
      name: "Cycling",

      benefit: "Supports hormonal balance & heart health",

      img:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1974&auto=format&fit=crop",

      duration: 50,
    },

    {
      name: "Dance Cardio",

      benefit: "Boosts stamina, energy & mood naturally",

      img:
        "https://www.hustleflowstudio.com/wp-content/uploads/2024/06/Dance-Portland-Maine-West-End-Hustle-and-Flow-c-1080x675.webp",

      duration: 75,
    },

  ];

  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const [started, setStarted] = useState(false);

  const [timeLeft, setTimeLeft] = useState(0);

  // ⏳ TIMER
  useEffect(() => {

    let timer;

    if (started && timeLeft > 0) {

      timer = setInterval(() => {

        setTimeLeft((prev) => prev - 1);

      }, 1000);
    }

    if (timeLeft === 0 && started) {

      alert("Workout Completed 🎉");

      setStarted(false);
    }

    return () => clearInterval(timer);

  }, [started, timeLeft]);

  // 🌸 START WORKOUT
  const startWorkout = (workout) => {

    setSelectedWorkout(workout);

    setStarted(false);

    setTimeLeft(workout.duration);
  };

  // 💖 BEGIN TIMER
  const beginNow = () => {

    setStarted(true);
  };

  return (

    <div className="min-h-screen bg-[#14142b] text-white p-10 overflow-hidden relative">

      {/* 🌈 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-pink-500/20 blur-[150px] rounded-full" />

        <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-purple-500/20 blur-[150px] rounded-full" />

      </div>

      {/* 🌸 HEADER */}
      <h1 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
        Cardio Wellness ❤️
      </h1>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 text-lg leading-8">
        Enjoy peaceful movement, wellness energy,
        and calming cardio sessions ✨
      </p>

      {/* 💎 WORKOUT CARDS */}
      <div className="grid md:grid-cols-3 gap-8">

        {workouts.map((item, index) => (

          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:scale-105 transition duration-300 shadow-2xl"
          >

            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-72 object-cover"
            />

            {/* CONTENT */}
            <div className="p-6">

              <h2 className="text-3xl font-bold">
                {item.name}
              </h2>

              <p className="text-gray-400 mt-4 leading-7">
                {item.benefit}
              </p>

              <button
                onClick={() => startWorkout(item)}
                className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition px-6 py-3 rounded-full font-semibold shadow-lg"
              >
                Start Workout 💖
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* 🌸 WORKOUT SECTION */}
      {selectedWorkout && (

        <div className="mt-20 bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl shadow-2xl">

          {/* TITLE */}
          <h2 className="text-4xl font-bold text-center">
            {selectedWorkout.name}
          </h2>

          <p className="text-center text-gray-400 mt-4 text-lg">
            Focus on your movement and wellness journey 🌿
          </p>

          {/* LARGE IMAGE */}
          <div className="mt-10 flex justify-center">

            <img
              src={selectedWorkout.img}
              alt={selectedWorkout.name}
              className="w-full max-w-4xl h-[450px] object-cover rounded-3xl"
            />

          </div>

{/* 🎵 MUSIC SECTION */}
<div className="mt-10 max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8">

  <p className="text-center text-pink-300 text-3xl mb-6">
    Wellness Music 🎵
  </p>

  <iframe
    width="100%"
    height="315"
    className="rounded-2xl"
    src={
      selectedWorkout.name === "Walking"
        ? "https://www.youtube.com/embed/jfKfPfyJRdk"
        : selectedWorkout.name === "Cycling"
        ? "https://www.youtube.com/embed/5qap5aO4i9A"
        : "https://www.youtube.com/embed/ZbZSe6N_BXs"
    }
    title="Workout Music"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>

</div>

          {/* ⏳ TIMER */}
          <div className="mt-14 text-center">

            <h3 className="text-6xl font-bold text-pink-400">

              ⏳ {timeLeft} sec

            </h3>

            {!started ? (

              <button
                onClick={beginNow}
                className="mt-8 bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition px-12 py-5 rounded-full text-2xl font-bold shadow-2xl"
              >
                Begin Workout 💪
              </button>

            ) : (

              <div className="mt-8 text-green-400 text-3xl font-semibold">

                Workout In Progress ✨

              </div>
            )}

          </div>

        </div>
      )}

    </div>
  );
}

export default Cardio;