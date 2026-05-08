// FULL UPDATED WORKING Cart.jsx
// PROCEED TO CHECKOUT WORKING

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {

  const [cart, setCart] = useState([]);

  const navigate = useNavigate();

  // 🌸 LOAD CART
  useEffect(() => {

    const storedCart =
      JSON.parse(
        localStorage.getItem("lunessa_cart")
      ) || [];

    setCart(storedCart);

  }, []);

  // 🌸 UPDATE CART
  const updateCart = (updatedCart) => {

    setCart(updatedCart);

    localStorage.setItem(
      "lunessa_cart",
      JSON.stringify(updatedCart)
    );
  };

  // ➕ INCREASE QUANTITY
  const increaseQty = (id) => {

    const updatedCart = cart.map((item) => {

      if (item.id === id) {

        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    updateCart(updatedCart);
  };

  // ➖ DECREASE QUANTITY
  const decreaseQty = (id) => {

    const updatedCart = cart.map((item) => {

      if (
        item.id === id &&
        item.quantity > 1
      ) {

        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }

      return item;
    });

    updateCart(updatedCart);
  };

  // ❌ REMOVE ITEM
  const removeItem = (id) => {

    const updatedCart =
      cart.filter((item) => item.id !== id);

    updateCart(updatedCart);
  };

  // 💰 TOTAL
  const total = cart.reduce(

    (sum, item) =>

      sum +
      item.price * item.quantity,

    0
  );

  return (

    <div className="min-h-screen bg-[#14142b] text-white p-10 overflow-hidden relative">

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-pink-500/20 blur-[150px] rounded-full" />

        <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full" />

      </div>

      {/* 🌸 TITLE */}
      <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">

        Your Cart 🛒

      </h1>

      {/* EMPTY CART */}
      {cart.length === 0 ? (

        <div className="text-center mt-32">

          <h2 className="text-4xl font-bold">

            Your cart is empty 💔

          </h2>

          <button
            onClick={() => navigate("/shop")}
            className="mt-10 bg-gradient-to-r from-pink-500 to-purple-500 px-10 py-4 rounded-full text-xl font-semibold hover:scale-105 transition"
          >

            Continue Shopping ✨

          </button>

        </div>

      ) : (

        <div className="space-y-8">

          {/* 🌸 CART ITEMS */}
          {cart.map((item) => (

            <div
              key={item.id}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col md:flex-row justify-between items-center gap-8 backdrop-blur-xl shadow-2xl"
            >

              {/* LEFT */}
              <div className="flex items-center gap-6">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-3xl"
                />

                <div>

                  <h2 className="text-3xl font-bold">

                    {item.name}

                  </h2>

                  <p className="text-pink-400 text-2xl mt-3 font-bold">

                    ₹{item.price}

                  </p>

                </div>

              </div>

              {/* RIGHT */}
              <div className="flex flex-col items-end gap-5">

                {/* QUANTITY */}
                <div className="flex items-center gap-4">

                  <button
                    onClick={() =>
                      decreaseQty(item.id)
                    }
                    className="bg-white/10 hover:bg-white/20 transition w-12 h-12 rounded-full text-2xl"
                  >

                    -

                  </button>

                  <span className="text-2xl font-bold">

                    {item.quantity}

                  </span>

                  <button
                    onClick={() =>
                      increaseQty(item.id)
                    }
                    className="bg-white/10 hover:bg-white/20 transition w-12 h-12 rounded-full text-2xl"
                  >

                    +

                  </button>

                </div>

                {/* REMOVE */}
                <button
                  onClick={() =>
                    removeItem(item.id)
                  }
                  className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full transition"
                >

                  Remove

                </button>

              </div>

            </div>
          ))}

          {/* 🌸 TOTAL */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-right backdrop-blur-xl shadow-2xl">

            <h2 className="text-5xl font-bold text-pink-300">

              Total: ₹{total}

            </h2>

            <p className="mt-4 text-gray-400 text-lg">

              Taxes and delivery included ✨

            </p>

            {/* 🌸 CHECKOUT BUTTON */}
            <button
              onClick={() =>
                navigate("/checkout")
              }
              className="mt-10 bg-gradient-to-r from-pink-500 to-purple-500 px-12 py-5 rounded-full text-2xl font-bold hover:scale-105 transition shadow-2xl"
            >

              Proceed To Checkout 💳

            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default Cart;