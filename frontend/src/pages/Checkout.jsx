import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import qr from "../assets/upi-qr.png";

function Checkout() {

  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [address, setAddress] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const cart =
    JSON.parse(
      localStorage.getItem(
        "lunessa_cart"
      )
    ) || [];

  const total = cart.reduce(

    (sum, item) =>

      sum +
      item.price * item.quantity,

    0
  );

  // 🌸 FAKE PAYMENT SUCCESS
  const handlePayment =
    async () => {

      if (
        !name ||
        !email ||
        !address
      ) {

        alert(
          "Please fill all details 🌸"
        );

        return;
      }

      try {

        setLoading(true);

        // 🌸 SAVE ORDER + SEND EMAIL
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

        // 🌸 SAVE ORDERS
        const previousOrders =
          JSON.parse(
            localStorage.getItem(
              "lunessa_orders"
            )
          ) || [];

        localStorage.setItem(

          "lunessa_orders",

          JSON.stringify([
            ...previousOrders,
            ...cart,
          ])
        );

        alert(
          "Payment Successful 💖"
        );

        localStorage.removeItem(
          "lunessa_cart"
        );

        navigate("/profile");

      } catch (error) {

        console.log(error);

        alert(
          "Payment Failed ❌"
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <div className="min-h-screen bg-[#14142b] text-white flex items-center justify-center p-10">

      <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 w-full max-w-3xl backdrop-blur-2xl shadow-2xl">

        <h1 className="text-5xl font-bold text-center mb-10 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">

          Secure Checkout 💳

        </h1>

        {/* INPUTS */}
        <div className="space-y-5">

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
            rows="4"
            placeholder="Delivery Address"
            value={address}
            onChange={(e) =>
              setAddress(e.target.value)
            }
            className="w-full bg-white/10 p-5 rounded-2xl outline-none"
          />

        </div>

        {/* TOTAL */}
        <div className="mt-10 text-center">

          <h2 className="text-4xl font-bold text-pink-300">

            Total: ₹{total}

          </h2>

        </div>

        {/* QR */}
        <div className="mt-10 text-center">

          <h2 className="text-3xl font-bold mb-6">

            Pay Using UPI 🌸

          </h2>

          <img
            src={qr}
            alt="UPI QR"
            className="w-72 mx-auto rounded-3xl border border-white/10 shadow-2xl"
          />

          <p className="mt-5 text-gray-300 text-lg">

            Scan using PhonePe, GPay or Paytm

          </p>

          <p className="text-pink-300 mt-3">

            UPI ID: lunessa@upi

          </p>

        </div>

        {/* BUTTONS */}
        <div className="grid grid-cols-3 gap-4 mt-10">

          <button className="bg-purple-500 py-4 rounded-2xl font-bold">
            PhonePe
          </button>

          <button className="bg-blue-500 py-4 rounded-2xl font-bold">
            GPay
          </button>

          <button className="bg-cyan-500 py-4 rounded-2xl font-bold">
            Paytm
          </button>

        </div>

        {/* PAYMENT DONE */}
        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full mt-10 bg-gradient-to-r from-pink-500 to-purple-500 py-5 rounded-2xl text-2xl font-bold hover:scale-105 transition"
        >

          {
            loading
            ? "Processing..."
            : "I Have Paid "
          }

        </button>

      </div>

    </div>
  );
}

export default Checkout;
