import { Routes, Route } from "react-router-dom";

import Splash from "./pages/Splash";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Diet from "./pages/Diet";
import Exercise from "./pages/Exercise";
import PCOD from "./pages/PCOD";
import PCOS from "./pages/PCOS";
import Blog from "./pages/Blog";
import Plan from "./pages/Plan";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Pads from "./pages/Pads";
import Supplements from "./pages/Supplements";
import CareKits from "./pages/CareKits";
import Checkout from "./pages/Checkout";
import Yoga from "./pages/Yoga";
import Cardio from "./pages/Cardio";
import Strength from "./pages/Strength";
import PCODFood from "./pages/PCODFood";
import PCOSFood from "./pages/PCOSFood";
import WeightLossRecipes from "./pages/WeightLossRecipes";
import About from "./pages/About";
import PremiumPlans from "./pages/PremiumPlans";
import Meditation from "./pages/Meditation";
import SakhiChatbot from "./pages/SakhiChatbot";

function App() {
  return (
    <Routes>

      {/* 🌙 MAIN */}
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />

      {/* 🔐 AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path ="/ForgotPassword" element={<ForgotPassword/>} />
      {/* 🌸 FEATURES */}
      <Route path="/diet" element={<Diet />} />
      <Route path="/exercise" element={<Exercise />} />
      <Route path="/pcod" element={<PCOD />} />
      <Route path="/pcos" element={<PCOS />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/plan" element={<Plan />} />
      <Route path="/pads" element={<Pads />} />
      <Route path="/supplements" element={<Supplements />} />
      <Route path="/carekits" element={<CareKits />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/yoga" element={<Yoga />} />
      <Route path="/cardio" element={<Cardio />} />
      <Route path="/strength" element={<Strength />} />
      <Route path="/pcod-food" element={<PCODFood />} />
      <Route path="/pcos-food" element={<PCOSFood />} />
      <Route path="/weight-loss-recipes"element={<WeightLossRecipes />}/>
      <Route path="/about"element={<About />} />
      <Route path="/premium-plans"element={<PremiumPlans />}/>
      <Route path="/meditation"element={<Meditation />}/>
      <Route path="/sakhichatbot"element={<SakhiChatbot />}/>
      {/* 🛍 SHOP */}
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />

      {/* 👤 PROFILE */}
      <Route path="/profile" element={<Profile />} />

    </Routes>
  );
}

export default App;