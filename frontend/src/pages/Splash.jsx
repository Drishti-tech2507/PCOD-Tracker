import { Link, useNavigate } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full text-white">

      {/* 🌄 BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556228724-4d0b0b0c1a06?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* 🌸 OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 🌙 NAVBAR */}
      <nav className="relative z-10 flex justify-between items-center px-10 py-6">

        <h1 className="text-3xl font-bold">Lunessa</h1>

        <ul className="flex gap-8 text-lg">
          {["Diet Plans", "Exercise", "PCOD", "PCOS", "Blog"].map((item, i) => (
            <li
              key={i}
              className="cursor-pointer hover:text-pink-400 transition"
            >
              {item}
            </li>
          ))}
        </ul>

        <button
          onClick={() => navigate("/login")}
          className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition"
        >
          Register / Login
        </button>

      </nav>

      {/* 🌟 HERO TEXT */}
      <div className="relative z-10 text-center mt-20 px-6">

        <p className="tracking-widest text-sm text-gray-300">
          CARE • BALANCE • WELLNESS
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold mt-4">
          Understand Your Body Better
        </h1>

        <p className="mt-6 text-gray-300 max-w-xl mx-auto">
          Personalized solutions for PCOD, PCOS & menstrual health —
          diet, exercise, and care in one place.
        </p>


      </div>

      {/* 💎 FEATURE CARDS */}
      <div className="relative z-10 grid md:grid-cols-3 gap-8 px-10 mt-20 pb-10">

        {/* CARD 1 */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h2 className="text-xl font-bold">Diet Plans</h2>
            <p className="text-gray-300 mt-2">
              Personalized nutrition for hormonal balance
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
          <img
            src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=800"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h2 className="text-xl font-bold">Exercise</h2>
            <p className="text-gray-300 mt-2">
              Workouts designed for PCOD & PCOS care
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
          <img
            src="https://images.unsplash.com/photo-1600959907703-125ba1374a12?q=80&w=800"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h2 className="text-xl font-bold">PCOD / PCOS</h2>
            <p className="text-gray-300 mt-2">
              Understand symptoms, solutions & care
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Splash;