import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Models from "./components/Models";
import Journey from "./components/Journey";

function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Models />
      <Journey />
      <Models />
      <Footer />
    </div>
    
  );
}

export default Home;
