import { Link, useLocation } from "react-router-dom";

function Navbar() {

  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "Diet", path: "/diet" },
    { name: "Exercise", path: "/exercise" },
    { name: "PCOD", path: "/pcod" },
    { name: "PCOS", path: "/pcos" },
    { name: "Blog", path: "/blog" },
    { name: "Plan", path: "/plan" },
    { name: "Shop", path: "/shop" },
    { name: "Cart", path: "/cart" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <nav className="relative z-50 flex justify-between items-center px-8 py-6 backdrop-blur-xl bg-white/5 border-b border-white/10">

      {/* 🌙 LOGO */}
      <Link to="/home">

        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent cursor-pointer">

          Lunessa

        </h1>

      </Link>

      {/* 🌸 NAV LINKS */}
      <ul className="hidden lg:flex gap-8 items-center">

        {navItems.map((item, index) => (

          <Link key={index} to={item.path}>

            <li
              className={`relative text-sm font-medium transition duration-300 cursor-pointer group
              
              ${
                location.pathname === item.path
                  ? "text-pink-400"
                  : "text-white hover:text-pink-300"
              }`}
            >

              {item.name}

              {/* ✨ UNDERLINE */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-pink-400 transition-all duration-300
                ${
                  location.pathname === item.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />

            </li>

          </Link>

        ))}

      </ul>

      {/* 💖 ACTION BUTTONS */}
      <div className="flex items-center gap-4">

        {/* 🛍 CART */}
        <Link to="/cart">

          <button className="bg-white/10 hover:bg-white/20 transition px-4 py-2 rounded-full border border-white/10">

            🛍

          </button>

        </Link>

        {/* 👤 PROFILE */}
        <Link to="/profile">

          <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition px-6 py-2 rounded-full font-semibold shadow-lg">

            Profile

          </button>

        </Link>

      </div>

    </nav>
  );
}

export default Navbar;