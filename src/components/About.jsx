import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-fixed bg-center bg-cover text-center px-6"
      style={{ backgroundImage: "url('https://files.porsche.com/filestore/image/multimedia/none/rd-2019-macan-g2-macan-modelimage-sideshot/model/7a9de13e-6b0a-11eb-80d8-005056bbdc38/porsche-model.png')" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-black bg-opacity-70 p-10 rounded-2xl"
      >
        <h2 className="text-4xl font-bold mb-4">About Porsche</h2>
        <p className="max-w-2xl text-gray-300">
          Porsche is a brand that combines luxury, innovation, and pure driving passion.
          Every model is engineered with precision and built to deliver an unforgettable experience.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
