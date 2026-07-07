import { useEffect, useState } from "react";

import axios from "axios";

import Navbar from "../components/Navbar";

import { useNavigate } from "react-router-dom";

function Profile() {

  const [profile, setProfile] =
    useState(null);

  const [selectedAvatar, setSelectedAvatar] =
    useState("");

  const navigate =
    useNavigate();

  // =====================================================
  // 🌸 AVATARS
  // =====================================================

  const avatars = [

    "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",

    "https://cdn-icons-png.flaticon.com/512/6997/6997662.png",

    "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",

  ];

  // =====================================================
  // 🌸 FETCH PROFILE
  // =====================================================

  useEffect(() => {

    fetchProfile();

  }, []);

  const fetchProfile = async () => {

    try {

      // 🌸 GET EMAIL
      const email =
        localStorage.getItem(
          "lunessa_email"
        );

      // 🌸 NOT LOGGED IN
      if (!email) {

        alert(
          "Please login first 💖"
        );

        navigate("/login");

        return;
      }

      // =====================================================
      // 🌸 FETCH FROM BACKEND
      // =====================================================

      const response =
        await axios.get(

          `/api/profile/${email}`

        );

      // =====================================================
      // 🌸 AUTO NAME FROM EMAIL
      // =====================================================

      const firstName =
        email
          .split("@")[0]
          .split(/[0-9._-]/)[0];

      const formattedName =

        firstName.charAt(0)
          .toUpperCase()

        +

        firstName.slice(1);

      // =====================================================
      // 🌸 FORMAT SAVED PLANS
      // =====================================================

      const savedPlans =

        response.data.savedPlans

          ? response.data.savedPlans
              .split(",")
              .filter(plan => plan !== "")

          : [];

      // =====================================================
      // 🌸 FORMAT RECENT ORDERS
      // =====================================================

      const recentOrders =

        response.data.recentOrders

          ? response.data.recentOrders
              .split(",")
              .filter(order => order !== "")

          : [];

      // =====================================================
      // 🌸 SET PROFILE
      // =====================================================

      setProfile({

        ...response.data,

        name:
          formattedName,

        savedPlans,

        recentOrders,

      });

      // =====================================================
      // 🌸 AVATAR
      // =====================================================

      const savedAvatar =

        localStorage.getItem(
          "lunessa_avatar"
        );

      if (savedAvatar) {

        setSelectedAvatar(
          savedAvatar
        );

      }

      else {

        setSelectedAvatar(
          avatars[0]
        );
      }

    }

    catch (error) {

      console.log(error);

      alert(
        "Failed to load profile"
      );
    }
  };

  // =====================================================
  // 🌸 CHANGE AVATAR
  // =====================================================

  const chooseAvatar = (avatar) => {

    setSelectedAvatar(
      avatar
    );

    localStorage.setItem(
      "lunessa_avatar",
      avatar
    );
  };

  // =====================================================
  // 🌸 LOADING
  // =====================================================

  if (!profile) {

    return (

      <div className="min-h-screen bg-[#07071c] flex items-center justify-center text-white text-5xl font-bold">

        Loading Profile...

      </div>
    );
  }

  // =====================================================
  // 🌸 UI
  // =====================================================

  return (

    <div className="min-h-screen bg-[#07071c] text-white overflow-hidden relative">

      {/* ===================================================== */}
      {/* 🌈 BACKGROUND */}
      {/* ===================================================== */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-pink-500/20 blur-[150px] rounded-full animate-pulse" />

        <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-purple-500/20 blur-[150px] rounded-full animate-pulse" />

      </div>

      {/* ===================================================== */}
      {/* 🌸 NAVBAR */}
      {/* ===================================================== */}

      <Navbar />

      {/* ===================================================== */}
      {/* 🌸 HERO */}
      {/* ===================================================== */}

      <div className="text-center pt-20">

        <p className="text-pink-400 tracking-[8px] text-sm">

          PROFILE • WELLNESS • JOURNEY

        </p>

        <h1 className="text-6xl md:text-7xl font-bold mt-6">

          Your Wellness Profile ✨

        </h1>

        <p className="text-gray-400 mt-6 text-xl">

          Personalized wellness dashboard crafted beautifully for you 

        </p>

      </div>

      {/* ===================================================== */}
      {/* 🌸 PROFILE CARD */}
      {/* ===================================================== */}

      <div className="max-w-7xl mx-auto mt-20 px-8">

        <div className="bg-white/5 border border-white/10 rounded-[45px] p-12 backdrop-blur-2xl flex flex-col md:flex-row items-center gap-10 shadow-[0_0_60px_rgba(255,105,180,0.15)]">

          {/* 🌸 IMAGE */}

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-pink-500 blur-2xl opacity-40 animate-pulse" />

            <img
              src={selectedAvatar}
              alt="Avatar"
              className="relative w-44 h-44 rounded-full object-cover border-4 border-pink-500 shadow-2xl"
            />

          </div>

          {/* 🌸 INFO */}

          <div className="flex-1">

            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">

              {profile.name} ✨

            </h2>

            <p className="text-gray-400 text-2xl mt-5">

              {profile.email}

            </p>

            {/* TAGS */}

            <div className="flex flex-wrap gap-4 mt-8">

              <div className="bg-white/10 px-6 py-3 rounded-full">

                🌸 Wellness

              </div>

              <div className="bg-white/10 px-6 py-3 rounded-full">

                🧘 Self-Care

              </div>

              <div className="bg-white/10 px-6 py-3 rounded-full">

                🍓 Healthy Lifestyle

              </div>

            </div>

            {/* 🌸 AVATARS */}

            <div className="mt-10">

              <h3 className="text-2xl font-semibold text-pink-300 mb-5">

                Choose Your Wellness Avatar 💖

              </h3>

              <div className="flex gap-6 flex-wrap">

                {avatars.map((avatar, index) => (

                  <img
                    key={index}
                    src={avatar}
                    alt="avatar"
                    onClick={() =>
                      chooseAvatar(
                        avatar
                      )
                    }
                    className={`w-24 h-24 rounded-full cursor-pointer border-4 transition duration-300 hover:scale-110 ${
                      selectedAvatar === avatar
                        ? "border-pink-500 scale-110"
                        : "border-transparent"
                    }`}
                  />

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ===================================================== */}
      {/* 🌸 STATS */}
      {/* ===================================================== */}

      <div className="max-w-7xl mx-auto mt-20 px-8 grid md:grid-cols-4 gap-8">

        {[
          {
            title: "Saved Plans",
            value:
              profile.savedPlans.length,
          },

          {
            title: "Orders",
            value:
              profile.totalOrders,
          },

          {
            title: "Wellness Score",
            value:
              profile.wellnessScore + "%",
          },

          {
            title: "Self-Care Days",
            value:
              profile.loginCount,
          },

        ].map((item, index) => (

          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-[35px] p-10 text-center backdrop-blur-2xl hover:scale-105 transition duration-300 shadow-xl"
          >

            <h2 className="text-6xl font-bold text-pink-400">

              {item.value}

            </h2>

            <p className="mt-5 text-gray-300 text-xl">

              {item.title}

            </p>

          </div>

        ))}

      </div>

      {/* ===================================================== */}
      {/* 🌸 SAVED PLANS + ORDERS */}
      {/* ===================================================== */}

      <div className="max-w-7xl mx-auto mt-20 px-8 grid md:grid-cols-2 gap-8">

        {/* ===================================================== */}
        {/* 🌸 SAVED PLANS */}
        {/* ===================================================== */}

        <div className="bg-white/5 border border-white/10 rounded-[35px] p-10 backdrop-blur-2xl shadow-xl">

          <h2 className="text-4xl font-bold text-pink-300 mb-8">

            Saved Wellness Plans 

          </h2>

          <div className="space-y-5">

            {
              profile.savedPlans.length === 0

              ? (

                <p className="text-gray-400">

                  No saved plans yet 

                </p>
              )

              : (

                profile.savedPlans.map(
                  (
                    plan,
                    index
                  ) => (

                    <div
                      key={index}
                      className="bg-white/10 p-5 rounded-2xl text-lg"
                    >

                      ✨ {plan}

                    </div>
                  )
                )
              )
            }

          </div>

        </div>

        {/* ===================================================== */}
        {/* 🌸 RECENT ORDERS */}
        {/* ===================================================== */}

        <div className="bg-white/5 border border-white/10 rounded-[35px] p-10 backdrop-blur-2xl shadow-xl">

          <h2 className="text-4xl font-bold text-pink-300 mb-8">

            Recent Orders 🛍

          </h2>

          <div className="space-y-5">

            {
              profile.recentOrders.length === 0

              ? (

                <p className="text-gray-400">

                  No recent orders yet 

                </p>
              )

              : (

                profile.recentOrders.map(
                  (
                    order,
                    index
                  ) => (

                    <div
                      key={index}
                      className="bg-white/10 p-5 rounded-2xl text-lg"
                    >

                      🛒 {order}

                    </div>
                  )
                )
              )
            }

          </div>

        </div>

      </div>

      {/* ===================================================== */}
      {/* 🌸 QUOTE */}
      {/* ===================================================== */}

      <div className="max-w-5xl mx-auto mt-24 mb-20 px-8">

        <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-white/10 rounded-[40px] p-12 text-center backdrop-blur-2xl">

          <h2 className="text-4xl font-bold leading-relaxed">

            “Your wellness journey is not about perfection,
            it's about loving yourself a little more every day.” 

          </h2>

        </div>

      </div>

    </div>
  );
}

export default Profile;