import React from "react";
import { ArrowRight } from "lucide-react";

function Journey() {
  const cars = [
    {
      name: "911",
      type: "Petrol",
      desc: "The timeless icon: 2 doors, 2+2 seats.",
      img: "https://a.storyblok.com/f/338913/1280x1024/b7f3c2d593/911-desktop_5-4.jpg/m/1280x1024/filters:format(webp)",
    },
    {
      name: "Panamera",
      type: "Hybrid",
      desc: "Luxury meets performance: 4 doors, 4 seats.",
      img: "https://a.storyblok.com/f/338913/1280x1024/f8ad827507/718-desktop_5-4.jpg/m/1280x1024/filters:format(webp)",
    },
    {
      name: "Taycan",
      type: "Electric",
      desc: "Electric sports car: 4 doors, 4/5 seats.",
      img: "https://a.storyblok.com/f/338913/1280x1024/e178b7a186/taycan-desktop_5-4.jpg/m/1280x1024/filters:format(webp)",
    },
    {
      name: "Macan",
      type: "Petrol",
      desc: "Compact SUV with Porsche DNA.",
      img: "https://a.storyblok.com/f/338913/1280x1024/3debd00362/macan-desktop_5-4.jpg/m/1280x1024/filters:format(webp)",
    },
    {
      name: "Cayenne",
      type: "Hybrid",
      desc: "Sporty SUV with hybrid efficiency.",
      img: "https://a.storyblok.com/f/338913/1280x1024/e14fddb832/cayenne-desktop_5-4.jpg/m/1280x1024/filters:format(webp)",
    },
    {
      name: "718",
      type: "Petrol",
      desc: "Pure roadster spirit: 2 doors, 2 seats.",
      img: "https://a.storyblok.com/f/338913/1280x1024/f8ad827507/718-desktop_5-4.jpg/m/1280x1024/filters:format(webp)",
    },
  ];

  return (
    <section className="w-full py-20 bg-black text-white" 
    style={{ fontFamily: "'Porsche Next', 'Arial Narrow', Arial, 'Heiti SC', SimHei, sans-serif" }}>
      {/* Section Title */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl md:text-5xl font-bold">
          Your Porsche journey starts now.
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {cars.map((car, i) => (
          <div
            key={i}
            className="relative h-96 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={car.img}
              alt={car.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Texts */}
            <div className="absolute bottom-4 left-4 text-left">
              <span className="bg-gray-400 text-white text-sm px-2 py-0.5  rounded-md">
                {car.type}
              </span>
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p className="text-sm text-gray-300 max-w-xs">{car.desc}</p>
            </div>

            {/* Arrow Button */}
            <div className="absolute bottom-6 right-6">
              <button className="bg-white text-black rounded-full p-2 hover:bg-gray-200 transition">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Journey;
