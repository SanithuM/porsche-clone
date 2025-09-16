import React from "react";
function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center py-20 bg-gray-950">
      <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
      <form className="w-full max-w-md space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none"
        />
        <textarea
          placeholder="Message"
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none"
          rows="5"
        />
        <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
