// FULL PROFESSIONAL ForgotPassword.jsx
// PLACE INSIDE:
// src/pages/ForgotPassword.jsx

import React, { useState } from "react";

import axios from "axios";

import {
  useNavigate,
  Link,
} from "react-router-dom";

function ForgotPassword() {

  const navigate =
    useNavigate();

  const [step, setStep] =
    useState(1);

  const [email, setEmail] =
    useState("");

  const [otp, setOtp] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  // 🌸 SEND OTP
  const sendOtp = async () => {

    try {

      setLoading(true);

      const response =
        await axios.post(

          "http://localhost:8080/api/password/send-otp",

          { email }
        );

      alert(
        response.data.message
      );

      setStep(2);

    } catch (error) {

      alert(
        error.response?.data?.message
      );

    } finally {

      setLoading(false);
    }
  };

  // 🌸 VERIFY OTP
  const verifyOtp = async () => {

    try {

      setLoading(true);

      const response =
        await axios.post(

          "http://localhost:8080/api/password/verify-otp",

          {
            email,
            otp,
          }
        );

      alert(
        response.data.message
      );

      setStep(3);

    } catch (error) {

      alert(
        error.response?.data?.message
      );

    } finally {

      setLoading(false);
    }
  };

  // 🌸 RESET PASSWORD
  const resetPassword =
    async () => {

      try {

        setLoading(true);

        const response =
          await axios.post(

            "http://localhost:8080/api/password/reset",

            {
              email,
              password,
            }
          );

        alert(
          response.data.message
        );

        navigate("/login");

      } catch (error) {

        alert(
          error.response?.data?.message
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <div className="min-h-screen bg-[#07071c] flex items-center justify-center px-6 text-white">

      {/* 🌈 BG */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-pink-500/20 blur-[150px] rounded-full animate-pulse" />

        <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-purple-500/20 blur-[150px] rounded-full animate-pulse" />

      </div>

      {/* 🌸 CARD */}
      <div className="relative z-10 w-full max-w-md bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-2xl shadow-2xl">

        <h1 className="text-5xl font-bold text-center">

          Reset Password 

        </h1>

        <p className="text-center text-gray-400 mt-4">

          Secure your Lunessa account 

        </p>

        {/* STEP 1 */}
        {step === 1 && (

          <div className="mt-10">

            <input
              type="email"
              placeholder="Enter Registered Email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              className="w-full bg-white/10 border border-white/10 rounded-2xl p-5 outline-none"
            />

            <button
              onClick={sendOtp}
              disabled={loading}
              className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-500 py-4 rounded-2xl font-bold"
            >

              {
                loading
                  ? "Sending OTP..."
                  : "Send OTP "
              }

            </button>

          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (

          <div className="mt-10">

            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) =>
                setOtp(
                  e.target.value
                )
              }
              className="w-full bg-white/10 border border-white/10 rounded-2xl p-5 outline-none"
            />

            <button
              onClick={verifyOtp}
              disabled={loading}
              className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-500 py-4 rounded-2xl font-bold"
            >

              {
                loading
                  ? "Verifying..."
                  : "Verify OTP "
              }

            </button>

          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (

          <div className="mt-10">

            <input
              type="password"
              placeholder="Enter New Password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              className="w-full bg-white/10 border border-white/10 rounded-2xl p-5 outline-none"
            />

            <button
              onClick={resetPassword}
              disabled={loading}
              className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-500 py-4 rounded-2xl font-bold"
            >

              {
                loading
                  ? "Updating..."
                  : "Reset Password "
              }

            </button>

          </div>
        )}

        {/* BACK */}
        <p className="text-center mt-8 text-gray-400">

          <Link
            to="/login"
            className="text-pink-400 font-bold"
          >

            Back To Login

          </Link>

        </p>

      </div>

    </div>
  );
}

export default ForgotPassword;