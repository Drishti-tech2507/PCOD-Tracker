// Supplements.jsx

import { useNavigate } from "react-router-dom";

function Supplements() {

  const navigate = useNavigate();

  const supplements = [

    {
      id: "supp1",
      name: "Iron Boost Capsules",
      price: 699,
      image:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88",
    },

    {
      id: "supp2",
      name: "Hormonal Balance Gummies",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1584017911766-d451b3d0e843",
    },

    {
      id: "supp3",
      name: "Vitamin Wellness Pack",
      price: 1199,
      image:
        "https://images.unsplash.com/photo-1577174881658-0f30ed549adc",
    },

  ];

  const addToCart = (product) => {

    let cart =
      JSON.parse(localStorage.getItem("lunessa_cart")) || [];

    const existingItem = cart.find(
      (item) => item.id === product.id
    );

    if (existingItem) {

      existingItem.quantity++;

    } else {

      cart.push({
        ...product,
        quantity: 1,
      });
    }

    localStorage.setItem(
      "lunessa_cart",
      JSON.stringify(cart)
    );

    alert(`${product.name} added to cart 🛒`);
  };

  return (

    <div className="min-h-screen bg-[#14142b] text-white p-10">

      <div className="flex justify-between items-center mb-12">

        <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Supplements 💊
        </h1>

        <button
          onClick={() => navigate("/cart")}
          className="bg-pink-500 px-6 py-3 rounded-full"
        >
          Go To Cart 🛒
        </button>

      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {supplements.map((item) => (

          <div
            key={item.id}
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
          >

            <img
              src={item.image}
              alt={item.name}
              className="w-full h-72 object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold">
                {item.name}
              </h2>

              <p className="text-pink-400 text-2xl font-bold mt-4">
                ₹{item.price}
              </p>

              <button
                onClick={() => addToCart(item)}
                className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-500 py-3 rounded-full"
              >
                Add To Cart
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Supplements;