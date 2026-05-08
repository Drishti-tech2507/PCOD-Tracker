import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function OTPVerification() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerify = () => {
    if (otp.length < 4) return alert("Invalid OTP");

    alert("OTP Verified ✅");
    navigate("/reset-password");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl w-full max-w-md text-center"
      >
        <h1 className="text-3xl mb-4 text-pink-400">
          Verify OTP
        </h1>

        <p className="text-gray-400 mb-6">
          Enter the OTP sent to your email
        </p>

        <input
          type="text"
          maxLength="6"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full p-3 text-center text-xl tracking-widest bg-transparent border border-white/30 rounded-lg mb-6"
        />

        <button
          onClick={handleVerify}
          className="w-full bg-pink-500 py-3 rounded-lg"
        >
          Verify OTP
        </button>
      </motion.div>
    </div>
  );
}

export default OTPVerification;