import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const navigate = useNavigate();

  const handleReset = () => {
    if (password !== confirm) {
      alert("Passwords do not match ❌");
      return;
    }

    alert("Password updated successfully 🎉");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-black text-white">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-xl w-full max-w-md"
      >
        <h1 className="text-3xl text-center text-pink-400 mb-6">
          Reset Password
        </h1>

        <input
          type="password"
          placeholder="New Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 bg-transparent border border-white/30 rounded-lg"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirm(e.target.value)}
          className="w-full p-3 mb-6 bg-transparent border border-white/30 rounded-lg"
        />

        <button
          onClick={handleReset}
          className="w-full bg-pink-500 py-3 rounded-lg"
        >
          Reset Password
        </button>
      </motion.div>
    </div>
  );
}

export default ResetPassword;