// FULL WORKING Login.jsx
// SIMPLE REAL LOGIN WITHOUT JWT ISSUES

import React, { useState } from "react";

import axios from "axios";

import { signInWithPopup } from "firebase/auth";

import { auth, provider } from "../firebase";

import { useNavigate, Link } from "react-router-dom";

function Login() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const navigate =
    useNavigate();

  // 🌸 LOGIN
  const handleLogin = async () => {

    try {

      const response =
        await axios.post(

          "http://localhost:8080/api/auth/login",

          {
            email,
            password,
          }
        );

      console.log(
        response.data
      );

      // 🌸 SAVE USER DATA
      localStorage.setItem(
        "lunessa_email",
        response.data.email
      );

      localStorage.setItem(
        "lunessa_name",
        response.data.name
      );

      alert(
        response.data.message
      );

      navigate("/home");

    } catch (error) {

      console.log(error);

      alert(
        "Login Failed ❌"
      );
    }
  };

  // 🌸 GOOGLE LOGIN
  const googleLogin = async () => {

    try {

      const result =
        await signInWithPopup(
          auth,
          provider
        );

      localStorage.setItem(
        "lunessa_name",
        result.user.displayName
      );

      localStorage.setItem(
        "lunessa_email",
        result.user.email
      );

      localStorage.setItem(
        "lunessa_image",
        result.user.photoURL
      );

      navigate("/home");

    } catch (error) {

      console.log(error);

      alert(
        "Google Login Failed ❌"
      );
    }
  };

  return (

    <div className="relative min-h-screen overflow-hidden bg-[#0b0b1f] flex items-center justify-center px-6">

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-pink-500/20 blur-[140px] rounded-full" />

        <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-purple-500/20 blur-[140px] rounded-full" />

      </div>

      {/* 🌸 CARD */}
      <div className="relative z-10 w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 shadow-2xl">

        <h1 className="text-6xl font-extrabold text-center leading-tight">

          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">

            Welcome

          </span>

          <br />

          <span className="text-white">

            Back

          </span>

        </h1>

        <p className="text-center text-gray-400 mt-4">

          Continue your wellness journey 

        </p>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full mt-10 bg-white/10 border border-white/10 text-white placeholder-gray-400 p-5 rounded-2xl outline-none focus:border-pink-500 transition"
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full mt-5 bg-white/10 border border-white/10 text-white placeholder-gray-400 p-5 rounded-2xl outline-none focus:border-pink-500 transition"
        />

        {/* FORGOT */}
        <div className="text-right mt-4">

          <Link
            to="/forgotpassword"
            className="text-pink-400 hover:text-pink-300 font-semibold"
          >

            Forgot Password?

          </Link>

        </div>

        {/* LOGIN */}
        <button
          onClick={handleLogin}
          className="w-full mt-8 bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-[1.02] transition py-5 rounded-2xl font-bold text-xl shadow-xl"
        >

          Login

        </button>

        {/* GOOGLE */}
        <button
          onClick={googleLogin}
          className="w-full mt-5 border border-white/10 bg-white/5 hover:bg-white/10 transition py-5 rounded-2xl text-white text-lg font-medium"
        >

          Continue with Google

        </button>

        {/* SIGNUP */}
        <p className="text-center text-gray-400 mt-8 text-lg">

          Don’t have an account?{" "}

          <Link
            to="/signup"
            className="text-pink-400 font-bold hover:text-pink-300"
          >

            Signup

          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;