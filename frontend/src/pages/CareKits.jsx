// CareKits.jsx

import { useNavigate } from "react-router-dom";

function CareKits() {

  const navigate = useNavigate();

  const kits = [

    {
      id: "kit1",
      name: "Self Care Kit",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    },

    {
      id: "kit2",
      name: "Wellness Starter Box",
      price: 1599,
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
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
          Care Kits 🎀
        </h1>

        <button
          onClick={() => navigate("/cart")}
          className="bg-pink-500 px-6 py-3 rounded-full"
        >
          Go To Cart 🛒
        </button>

      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {kits.map((item) => (

          <div
            key={item.id}
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
          >

            <img
              src={item.image}
              alt={item.name}
              className="w-full h-80 object-cover"
            />

            <div className="p-6">

              <h2 className="text-3xl font-bold">
                {item.name}
              </h2>

              <p className="text-pink-400 text-3xl font-bold mt-4">
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

export default CareKits;