// Pads.jsx

import { useNavigate } from "react-router-dom";

function Pads() {

  const navigate = useNavigate();

  const pads = [

    {
      id: "pad1",
      name: "Whisper Choice Wings",
      price: 90,
      image:
        "https://images.apollo247.in/pub/media/catalog/product/4/9/4987176319180__1_.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%20400w",
    },

     {
      id: "pad2",
      name: "Whisper Ultra",
      price: 100,
      image:
        "https://m.media-amazon.com/images/I/71NyaTGqVIL._AC_UF1000,1000_QL80_.jpg",
    },

    {
      id: "pad3",
      name: "Whisper Night",
      price: 120,
      image:
        "https://m.media-amazon.com/images/I/71tQcmULteL._AC_UF1000,1000_QL80_.jpg",
    },

    {
      id: "pad4",
      name: "Sofy XL (7 Pads)",
      price: 70,
      image:
        "https://www.meenakshiherbals.com/wpcore/wp-content/uploads/2025/09/SOFY-ANTIBACTERIA-SLIM-SANITARY-PADS-7-Pieces.jpg",
    },
        
    {
      id: "pad5",
      name: "Sofy XL+",
      price: 150,
      image:
        "https://images.apollo247.in/pub/media/catalog/product/a/b/ab-xl_48p_veena-front.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%20400w",
    },

    {
      id: "pad6",
      name: "Sofy Night",
      price: 200,
      image:
        "https://images.apollo247.in/pub/media/catalog/product/o/n/on-ab-xxl-20p-front.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%20400w",
    },


    {
      id: "pad7",
      name: "Nua Night Pad",
      price: 129,
      image:
        "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/6ad71fd681be426dad9da300309f7503.jpg",
    },

    {
      id: "pad8",
      name: "Nua Ultra Safe Pads",
      price: 299,
      image:
        "https://images.apollo247.in/pub/media/catalog/product/n/u/nua0033_1_.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%20400w",
    },

  ];

  const addToCart = (product) => {

    let cart =
      JSON.parse(localStorage.getItem("lunessa_cart")) || [];

    const existingItem = cart.find(
      (item) => item.id === product.id
    );

    if (existingItem) {

      existingItem.quantity =
        Number(existingItem.quantity || 1) + 1;

    } else {

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

    alert(`${product.name} added to cart 🛒`);
  };

  return (

    <div className="min-h-screen bg-[#14142b] text-white p-10">

      <div className="flex justify-between items-center mb-12">

        <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Wellness Pads 🌸
        </h1>

        <button
          onClick={() => navigate("/cart")}
          className="bg-pink-500 px-6 py-3 rounded-full"
        >
          Go To Cart 🛒
        </button>

      </div>

      <div className="grid md:grid-cols-4 gap-8">

        {pads.map((item) => (

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
                className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-500 py-3 rounded-full font-semibold"
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

export default Pads;