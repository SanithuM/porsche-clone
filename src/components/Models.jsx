import React from "react";
import { ArrowRight } from "lucide-react";

function Models() {
  const cars = [
    {
      name: "Macan Electric",
      img: "https://a.storyblok.com/f/338913/3840x2880/dc7656bd89/02-macan-electric.jpg/m/600x450/filters:format(webp):quality(100)",
    },
    {
      name: "Taycan",
      img: "https://a.storyblok.com/f/338913/2048x1536/900347f748/kw38-992-ii-top-s.jpg/m/600x450/filters:format(webp):quality(100)",
    },
    {
      name: "Cayenne",
      img: "https://a.storyblok.com/f/338913/3840x2880/583e5849ea/01-e3-ii-coupe-phev.jpg/m/600x450/filters:format(webp):quality(100)",
    },
  ];

  return (
    <section className="w-full py-20 bg-white flex justify-center"
    style={{ fontFamily: "'Porsche Next', 'Arial Narrow', Arial, 'Heiti SC', SimHei, sans-serif" }}>
      <div className="flex flex-col md:flex-row gap-8 max-w-4xl px-6">
        {cars.map((car, i) => (
          <div
            key={i}
            className="relative flex-1 h-70 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
          >
            {/* Background image */}
            <img
              src={car.img}
              alt={car.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Text + Arrow */}
            <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
              <h2 className="text-2xl font-semibold drop-shadow-md">{car.name}</h2>
              <ArrowRight size={28} className="group-hover:translate-x-1 transition" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Models;
