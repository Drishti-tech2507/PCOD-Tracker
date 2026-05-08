// UPDATED FULL WORKING Shop.jsx
// REAL ADD TO CART WORKING + PROPER PRODUCT IDS + REAL BUTTON CONNECTION

import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Shop() {

  const navigate = useNavigate();

  // 🛒 ADD TO CART
  const addToCart = (product) => {

    let cart =
      JSON.parse(
        localStorage.getItem("lunessa_cart")
      ) || [];

    const existingItem = cart.find(
      (item) => item.id === product.id
    );

    if (existingItem) {

      existingItem.quantity =
        Number(existingItem.quantity || 1) + 1;

    }

    else {

      cart.push({
        id: product.id,
        name: product.name,
        price: Number(product.price),
        image: product.image,
        quantity: 1,
      });
    }

    localStorage.setItem(
      "lunessa_cart",
      JSON.stringify(cart)
    );

    alert(
      `${product.name} added to cart 🛒`
    );
  };

  // 🌸 PRODUCTS
  const products = [

    {
      id: 1,

      name: "Organic Cotton Pads",

      price: 299,

      rating: "4.8",

      image:
        "https://images.unsplash.com/photo-1583947582886-f40ec95dd752?q=80&w=1974&auto=format&fit=crop",

      category: "Pads",
    },

    {
      id: 2,

      name: "Hormonal Balance Tea",

      price: 239,

      rating: "4.7",

      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1974&auto=format&fit=crop",

      category: "Wellness",
    },

    {
      id: 3,

      name: "Wellness Care Kit",

      price: 650,

      rating: "4.9",

      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1974&auto=format&fit=crop",

      category: "Care Kit",
    },

    {
      id: 4,

      name: "Omega-3 Supplements",

      price: 99,

      rating: "4.6",

      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1974&auto=format&fit=crop",

      category: "Supplements",
    },

    {
      id: 5,

      name: "Heating Pad",

      price: 599,

      rating: "4.8",

      image:
        "https://ultracarepro.in/cdn/shop/files/1_1_1.jpg?v=1772090663&width=1080",

      category: "Comfort",
    },

    {
      id: 6,

      name: "Self-Care Journal",

      price: 199,

      rating: "4.9",

      image:
        "https://m.media-amazon.com/images/I/81sgUfO-dtL._AC_UF1000,1000_QL80_.jpg",

      category: "Lifestyle",
    },

  ];

  return (

    <div className="relative min-h-screen bg-[#0b0b1f] text-white overflow-hidden">

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[150px] rounded-full top-[-120px] left-[-120px]" />

        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[150px] rounded-full bottom-[-100px] right-[-100px]" />

      </div>

      {/* 🌙 NAVBAR */}
      <div className="relative z-20">

        <Navbar />

      </div>

      {/* 🌟 HERO */}
      <section className="relative z-10 text-center px-6 pt-20 pb-16">

        <p className="text-pink-400 tracking-widest text-sm">

          WELLNESS • SELF-CARE • ESSENTIALS

        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold mt-4">

          Lunessa Shop 

        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-lg leading-8">

          Discover wellness essentials,
          menstrual care products,
          hormone-friendly supplements,
          self-care kits, and healthy lifestyle products 

        </p>


      </section>

      {/* 🛍 PRODUCTS */}
      <section className="relative z-10 px-8 md:px-16 pb-24">

        <h2 className="text-4xl font-bold mb-12">

          Featured Products 

        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:scale-105 transition duration-300 shadow-2xl"
            >

              {/* 🌸 PRODUCT IMAGE */}
              <div className="overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover hover:scale-110 transition duration-500"
                />

              </div>

              {/* 🌸 PRODUCT INFO */}
              <div className="p-6">

                {/* CATEGORY */}
                <p className="text-pink-400 text-sm tracking-widest">

                  {product.category}

                </p>

                {/* NAME */}
                <h3 className="text-2xl font-semibold mt-3">

                  {product.name}

                </h3>

                {/* ⭐ RATING */}
                <div className="mt-4 flex items-center gap-2">

                  <span className="text-yellow-400 text-xl">

                    ⭐

                  </span>

                  <span className="text-gray-300">

                    {product.rating}

                  </span>

                </div>

                {/* 💰 PRICE */}
                <p className="mt-5 text-3xl font-bold text-pink-300">

                  ₹{product.price}

                </p>

                {/* 🌸 BUTTONS */}
                <div className="mt-8 flex gap-3">

                  {/* ADD TO CART */}
                  <button
                    onClick={() =>
                      addToCart(product)
                    }
                    className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 py-3 rounded-full font-semibold hover:scale-105 transition shadow-lg"
                  >

                    Add to Cart 🛒

                  </button>

                  {/* BUY NOW */}
                  <button
                    onClick={() => {

                      addToCart(product);

                      navigate("/checkout");
                    }}
                    className="px-5 py-3 border border-white/10 rounded-full hover:bg-white/10 transition"
                  >

                    Buy

                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Shop;