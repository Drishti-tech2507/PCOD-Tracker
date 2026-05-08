import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function Checkout() {

  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [address, setAddress] =
    useState("");

  const cart =
    JSON.parse(
      localStorage.getItem("lunessa_cart")
    ) || [];

  const total = cart.reduce(

    (sum, item) =>

      sum +
      item.price * item.quantity,

    0
  );

  // 🌸 PAYMENT
  const handlePayment = async () => {

    if (
      !name ||
      !email ||
      !address
    ) {

      alert(
        "Please fill all details "
      );

      return;
    }

    try {

      await axios.post(

        "http://localhost:8080/api/checkout/pay",

        {
          name,
          email,
          address,
          total,
          cart,
        }
      );

      alert(
        "Payment Successful 💖 Receipt Sent To Email"
      );

      localStorage.removeItem(
        "lunessa_cart"
      );

      navigate("/shop");

    } catch (error) {

      console.log(error);

      alert(
        "Payment Failed"
      );
    }
  };

  return (

    <div className="min-h-screen bg-[#14142b] text-white flex items-center justify-center p-10">

      <div className="bg-white/5 border border-white/10 rounded-3xl p-10 w-full max-w-2xl backdrop-blur-xl shadow-2xl">

        <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">

          Checkout 💳

        </h1>

        {/* INPUTS */}
        <div className="space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full bg-white/10 p-5 rounded-2xl outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full bg-white/10 p-5 rounded-2xl outline-none"
          />

          <textarea
            placeholder="Delivery Address"
            value={address}
            onChange={(e) =>
              setAddress(e.target.value)
            }
            rows="4"
            className="w-full bg-white/10 p-5 rounded-2xl outline-none"
          />

        </div>

        {/* TOTAL */}
        <div className="mt-10 text-center">

          <h2 className="text-4xl font-bold text-pink-300">

            Total: ₹{total}

          </h2>

        </div>

        {/* PAY BUTTON */}
        <button
          onClick={handlePayment}
          className="w-full mt-10 bg-gradient-to-r from-pink-500 to-purple-500 py-5 rounded-2xl text-2xl font-bold hover:scale-105 transition"
        >

          Pay Now 

        </button>

      </div>

    </div>
  );
}

export default Checkout;