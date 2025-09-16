import React from "react";
function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-200 object-cover"
        src="src/assets/porsche-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-12 md:px-24 text-white"
      style={{ fontFamily: "'Porsche Next', 'Arial Narrow', Arial, 'Heiti SC', SimHei, sans-serif" }}>
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide">
          Porsche 911
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl">
          The timeless icon. Performance, precision, and passion redefined for
          the road.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-300 transition">
          Explore Models
        </button>
      </div>
    </section>
  );
}

export default Hero;