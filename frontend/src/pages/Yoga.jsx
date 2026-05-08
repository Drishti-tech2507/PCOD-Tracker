import { useState, useEffect } from "react";

function Yoga() {

  const poses = [

    {
      name: "Butterfly Pose",

      benefit: "Improves pelvic flexibility",

      img:
        "https://www.himalayanyogaashram.com/blog/wp-content/uploads/2020/04/Poorna-Titali-Asana-full-butterfly-1.jpg",

      demo:
        "https://www.shutterstock.com/shutterstock/videos/1073750186/preview/stock-footage-pregnant-woman-practice-yoga-in-butterfly-position-spbd-female-stretch-inner-thighs-for-flexibility.mp4",

      duration: 45,
    },

    {
      name: "Cobra Pose",

      benefit: "Reduces stress & fatigue",

      img:
        "https://images.unsplash.com/photo-1717821552922-61e18814a44a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      demo:
        "https://media.istockphoto.com/id/2178151688/video/young-asian-woman-doing-yoga-stretching-exercises-on-a-mat-in-a-living-room.mp4?s=mp4-640x640-is&k=20&c=TgLcgbVy61XRWyVqE7I66G9Ovo4UAyro8x7iUPhOljc=",

      duration: 45,
    },

    {
      name: "Child Pose",

      benefit: "Relaxes hormones naturally",

      img:
        "https://modernyogacle.com/wp-content/uploads/2023/11/2-1.png",

      demo:
        "https://media.istockphoto.com/id/2154873784/video/woman-stretching-and-yoga-on-floor-for-home-fitness-child-pose-and-wellness-position-in.mp4?s=mp4-640x640-is&k=20&c=yXPUtf0Qj2TFQXDmAMqfmg_GgOpR6FMUEPM_g4COEkk=",

      duration: 45,
    },

  ];

  const [selectedPose, setSelectedPose] = useState(null);

  const [started, setStarted] = useState(false);

  const [timeLeft, setTimeLeft] = useState(0);

  // TIMER
  useEffect(() => {

    let timer;

    if (started && timeLeft > 0) {

      timer = setInterval(() => {

        setTimeLeft((prev) => prev - 1);

      }, 1000);
    }

    if (timeLeft === 0 && started) {

      alert("Exercise Completed 🎉");

      setStarted(false);
    }

    return () => clearInterval(timer);

  }, [started, timeLeft]);

  const startExercise = (pose) => {

    setSelectedPose(pose);

    setStarted(false);

    setTimeLeft(pose.duration);
  };

  const beginNow = () => {

    setStarted(true);
  };

  return (

    <div className="min-h-screen bg-[#14142b] text-white p-10">

      <h1 className="text-5xl font-bold text-center mb-14 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
        Yoga Wellness 🧘‍♀️
      </h1>

      {/* POSES */}
      <div className="grid md:grid-cols-3 gap-8">

        {poses.map((item, index) => (

          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
          >

            <img
              src={item.img}
              alt={item.name}
              className="w-full h-72 object-cover"
            />

            <div className="p-6">

              <h2 className="text-3xl font-bold">
                {item.name}
              </h2>

              <p className="text-gray-400 mt-4">
                {item.benefit}
              </p>

              <button
                onClick={() => startExercise(item)}
                className="mt-6 bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-full"
              >
                Start Exercise
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* DEMO SECTION */}
      {selectedPose && (

        <div className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-10">

          <h2 className="text-4xl font-bold text-center">
            {selectedPose.name}
          </h2>

          <p className="text-center text-gray-400 mt-4">
            Watch the demo carefully before starting.
          </p>

          {/* VIDEO */}
          <div className="mt-10 flex justify-center">

            <video
              controls
              className="rounded-3xl w-full max-w-4xl"
            >

              <source
                src={selectedPose.demo}
                type="video/mp4"
              />

            </video>

          </div>

          {/* TIMER */}
          <div className="mt-10 text-center">

            <h3 className="text-4xl font-bold text-pink-400">

              ⏳ {timeLeft} sec

            </h3>

            {!started ? (

              <button
                onClick={beginNow}
                className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 px-10 py-4 rounded-full font-semibold hover:scale-105 transition"
              >
                Begin Exercise
              </button>

            ) : (

              <div className="mt-6 text-green-400 text-2xl font-semibold">

                Exercise In Progress 💪

              </div>
            )}

          </div>

        </div>
      )}

    </div>
  );
}

export default Yoga;