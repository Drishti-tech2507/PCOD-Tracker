// PREMIUM PROFESSIONAL SIGNUP.JSX
// MODERN LUXURY LUNESSA UI 💖

import React, { useState } from "react";

import axios from "axios";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  signInWithPopup
} from "firebase/auth";

import {
  auth,
  provider
} from "../firebase";

function Signup() {

  const navigate =
    useNavigate();

  // 🌸 STATES
  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  // 🌸 SIGNUP
  const handleSignup =
    async () => {

      if (
        !name ||
        !email ||
        !password
      ) {

        alert(
          "Please fill all details 💖"
        );

        return;
      }

      try {

        setLoading(true);

        const response =
          await axios.post(

            "http://localhost:8080/api/auth/signup",

            {
              name,
              email,
              password,
            }
          );

        // 🌸 STORE DATA
        localStorage.setItem(
          "lunessa_token",
          response.data.token
        );

        localStorage.setItem(
          "lunessa_email",
          response.data.email
        );

        localStorage.setItem(
          "lunessa_name",
          response.data.name
        );

        alert(
          "Welcome to Lunessa 💖"
        );

        navigate("/home");

      } catch (error) {

        console.log(error);

        if (
          error.response?.data?.message
        ) {

          alert(
            error.response.data.message
          );

        } else {

          alert(
            "Signup Failed"
          );
        }

      } finally {

        setLoading(false);
      }
    };

  // 🌸 GOOGLE SIGNUP
  const googleSignup =
    async () => {

      try {

        const result =
          await signInWithPopup(
            auth,
            provider
          );

        localStorage.setItem(
          "lunessa_email",
          result.user.email
        );

        localStorage.setItem(
          "lunessa_name",
          result.user.displayName
        );

        navigate("/home");

      } catch (error) {

        alert(
          "Google Signup Failed"
        );
      }
    };

  return (

    <div className="relative min-h-screen overflow-hidden bg-[#07071c] flex items-center justify-center px-6 py-16">

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-180px] left-[-150px] w-[500px] h-[500px] bg-pink-500/20 blur-[180px] rounded-full animate-pulse" />

        <div className="absolute bottom-[-180px] right-[-150px] w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full animate-pulse" />

      </div>

      {/* 🌸 MAIN CARD */}
      <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 bg-white/5 border border-white/10 backdrop-blur-3xl rounded-[45px] overflow-hidden shadow-[0_0_80px_rgba(255,105,180,0.18)]">

        {/* 🌸 LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center px-14 py-16 relative overflow-hidden bg-gradient-to-br from-pink-500/10 to-purple-500/10">

          {/* GLOW */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-pink-500/20 blur-[80px] rounded-full" />

          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/20 blur-[80px] rounded-full" />

          {/* CONTENT */}
          <div className="relative z-10">

            <p className="text-pink-300 tracking-[6px] uppercase text-sm">

              Wellness • Beauty • Self-Care

            </p>

            <h1 className="text-6xl font-extrabold leading-tight mt-8">

              Begin Your <br />

              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">

                Wellness Journey

              </span>

            </h1>

            <p className="text-gray-300 text-lg mt-8 leading-relaxed max-w-lg">

              Personalized wellness support for PCOD, PCOS,
              hormonal balance, nutrition, self-care,
              mindfulness, and healthy living —
              beautifully designed for modern women.

            </p>

            {/* FEATURES */}
            <div className="space-y-5 mt-12">

              {[
                " Personalized Wellness Plans",
                " AI Wellness Companion",
                " Premium Self-Care Products",
                " PCOD & PCOS Support",
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 px-5 py-4 rounded-2xl backdrop-blur-lg"
                >

                  <div className="w-3 h-3 rounded-full bg-pink-400" />

                  <p className="text-gray-200">

                    {item}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* 🌸 RIGHT SIDE */}
        <div className="px-8 md:px-14 py-14">

          {/* MOBILE TITLE */}
          <div className="lg:hidden text-center mb-10">

            <h1 className="text-5xl font-extrabold">

              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">

                Lunessa

              </span>

            </h1>

            <p className="text-gray-400 mt-3">

              Your wellness journey starts here 

            </p>

          </div>

          {/* TITLE */}
          <div>

            <p className="text-pink-300 uppercase tracking-[5px] text-sm">

              Create Account

            </p>

            <h2 className="text-5xl font-bold mt-4 leading-tight">

              Join Lunessa 

            </h2>

            <p className="text-gray-400 mt-5 text-lg">

              Build your personalized wellness experience.

            </p>

          </div>

          {/* INPUTS */}
          <div className="mt-10 space-y-5">

            {/* NAME */}
            <div>

              <label className="text-gray-300 text-sm">

                Full Name

              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="w-full mt-2 bg-white/5 border border-white/10 rounded-2xl px-5 py-5 outline-none focus:border-pink-500 transition text-white placeholder-gray-500"
              />

            </div>

            {/* EMAIL */}
            <div>

              <label className="text-gray-300 text-sm">

                Email Address

              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full mt-2 bg-white/5 border border-white/10 rounded-2xl px-5 py-5 outline-none focus:border-pink-500 transition text-white placeholder-gray-500"
              />

            </div>

            {/* PASSWORD */}
            <div>

              <label className="text-gray-300 text-sm">

                Password

              </label>

              <input
                type="password"
                placeholder="Create a secure password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full mt-2 bg-white/5 border border-white/10 rounded-2xl px-5 py-5 outline-none focus:border-pink-500 transition text-white placeholder-gray-500"
              />

            </div>

          </div>

          {/* BUTTON */}
          <button
            onClick={handleSignup}
            disabled={loading}
            className="w-full mt-8 bg-gradient-to-r from-pink-500 to-purple-500 py-5 rounded-2xl font-bold text-lg hover:scale-[1.01] transition shadow-[0_0_30px_rgba(255,105,180,0.35)] disabled:opacity-60"
          >

            {
              loading
                ? "Creating Account..."
                : "Create Account "
            }

          </button>

          {/* DIVIDER */}
          <div className="flex items-center gap-4 my-8">

            <div className="flex-1 h-[1px] bg-white/10" />

            <p className="text-gray-400 text-sm">

              OR

            </p>

            <div className="flex-1 h-[1px] bg-white/10" />

          </div>

          {/* GOOGLE */}
          <button
            onClick={googleSignup}
            className="w-full bg-white/5 border border-white/10 hover:bg-white/10 transition py-5 rounded-2xl text-white font-medium text-lg"
          >

            Continue with Google 

          </button>

          {/* LOGIN */}
          <p className="text-center text-gray-400 mt-10">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-pink-400 font-semibold hover:text-pink-300"
            >

              Login

            </Link>

          </p>

          {/* SUPPORT */}
          <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-5 text-center">

            <p className="text-pink-300 font-semibold">

              Customer Support 🌸

            </p>

            <p className="text-gray-400 mt-3 text-sm">

              📧 lunessa.support@gmail.com

            </p>

            <p className="text-gray-400 text-sm mt-1">

              📱 +91 7856483799

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Signup;