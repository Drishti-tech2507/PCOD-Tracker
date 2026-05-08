// FULL UPDATED Blog.jsx
// ALL ARTICLES ARE NOW READABLE WITH MODAL POPUP

import Navbar from "../components/Navbar";
import { useState } from "react";

function Blog() {

  const [selectedBlog, setSelectedBlog] =
    useState(null);

  const blogs = [

    {
      title: "5 Daily Habits for Hormonal Balance",

      desc:
        "Simple routines that help improve hormonal wellness naturally.",

      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1974&auto=format&fit=crop",

      content:
        "Hormonal balance plays a major role in overall wellness. Small daily habits can naturally support better hormonal health. Start your morning with hydration and avoid skipping breakfast. Include movement like yoga, stretching, or walking in your routine. Prioritize quality sleep because hormonal repair happens during rest. Managing stress through meditation and journaling can also improve emotional wellness. Healthy meals rich in protein, fiber, and healthy fats help regulate insulin and hormone levels naturally.",
    },

    {
      title: "Best Foods for PCOS & PCOD",

      desc:
        "Nutrition tips to support energy, balance, and overall health.",

      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1974&auto=format&fit=crop",

      content:
        "PCOS and PCOD-friendly nutrition focuses on anti-inflammatory foods and balanced meals. Include leafy greens, berries, oats, quinoa, seeds, nuts, and protein-rich foods in your daily diet. Reduce processed sugar and highly refined foods. Healthy fats such as avocado and olive oil help support hormones. Drinking enough water and eating meals on time can also improve metabolism and energy levels naturally.",
    },

    {
      title: "How Stress Affects Your Cycle",

      desc:
        "Understand the connection between stress and menstrual health.",

      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1974&auto=format&fit=crop",

      content:
        "Stress directly affects hormone production inside the body. High cortisol levels may lead to irregular periods, fatigue, mood swings, and sleep issues. Practicing stress management daily through mindfulness, breathing exercises, journaling, and exercise can improve cycle health. Emotional wellness is equally important as physical wellness when it comes to hormonal balance.",
    },

    {
      title: "Yoga Poses for Better Wellness",

      desc:
        "Gentle movements that support relaxation and hormonal balance.",

      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1974&auto=format&fit=crop",

      content:
        "Yoga supports hormonal balance by reducing stress and improving blood circulation. Butterfly pose, cobra pose, child pose, and cat-cow stretches are especially beneficial for menstrual wellness. Practicing yoga regularly may improve flexibility, emotional balance, and energy levels while supporting relaxation naturally.",
    },

    {
      title: "Understanding Irregular Periods",

      desc:
        "Learn possible causes and healthy lifestyle adjustments.",

      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1974&auto=format&fit=crop",

      content:
        "Irregular periods may occur due to stress, hormonal imbalance, poor sleep, excessive exercise, or conditions such as PCOS and PCOD. Maintaining a balanced lifestyle with proper nutrition, hydration, movement, and stress management can help regulate cycles. Tracking your cycle and symptoms can also help you better understand your health patterns.",
    },

    {
      title: "Self-Care & Mental Wellness",

      desc:
        "Why emotional wellness matters in hormonal health journeys.",

      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop",

      content:
        "Mental wellness and emotional care are deeply connected to hormonal health. Prioritizing self-care activities such as reading, skincare, meditation, rest days, and journaling can improve mood and reduce stress hormones. A calm mind supports better sleep, healthier habits, and improved emotional resilience.",
    },

  ];

  return (

    <div className="relative min-h-screen bg-[#0b0b1f] text-white overflow-hidden">

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[150px] rounded-full top-[-120px] left-[-120px]" />

        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[150px] rounded-full bottom-[-100px] right-[-100px]" />

      </div>

      {/* NAVBAR */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* HERO */}
      <section className="relative z-10 text-center px-6 pt-20 pb-16">

        <p className="text-pink-400 tracking-widest text-sm">
          WELLNESS • INSIGHTS • SELF-CARE
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold mt-4">
          Wellness Blog 📝
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-lg">
          Explore articles about hormonal balance,
          menstrual wellness, nutrition, self-care,
          and healthy lifestyle habits.
        </p>

      </section>

      {/* BLOG CARDS */}
      <section className="relative z-10 px-8 md:px-16 pb-24">

        <h2 className="text-3xl font-bold mb-10">
          Latest Articles ✨
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl hover:scale-105 transition duration-300 shadow-xl"
            >

              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-semibold">
                  {blog.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  {blog.desc}
                </p>

                <button
                  onClick={() =>
                    setSelectedBlog(blog)
                  }
                  className="mt-6 text-pink-400 hover:text-pink-300 transition"
                >
                  Read Article →
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* 🌸 ARTICLE MODAL */}
      {selectedBlog && (

        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6">

          <div className="bg-[#14142b] border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">

            {/* IMAGE */}
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-80 object-cover rounded-t-3xl"
            />

            {/* CONTENT */}
            <div className="p-10">

              <h2 className="text-4xl font-bold">
                {selectedBlog.title}
              </h2>

              <p className="mt-8 text-gray-300 leading-9 text-lg">

                {selectedBlog.content}

              </p>

              <button
                onClick={() =>
                  setSelectedBlog(null)
                }
                className="mt-10 bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
              >

                Close Article ✨

              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Blog;