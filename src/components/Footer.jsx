import React from "react";
import { Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white pt-12"
    style={{ fontFamily: "'Porsche Next', 'Arial Narrow', Arial, 'Heiti SC', SimHei, sans-serif" }}>

      {/* Contacts & Social Media */}
      <div className="max-w-6xl mx-auto px-6 mt-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0">
        
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <button className="bg-white text-black px-20 py-2 rounded-md font-medium hover:bg-gray-300 transition">
            Get in Touch
          </button>
        </div>

      {/* Contact */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">Newsletter</h3>
          <button className="bg-white text-black px-20 py-2 rounded-md font-medium hover:bg-gray-300 transition">
            Subscribe
          </button>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="p-2 rounded-md bg-white text-black hover:bg-gray-300 transition">
              <Facebook size={20} />
            </button>
            <button className="p-2 rounded-md bg-white text-black hover:bg-gray-300 transition">
              <Instagram size={20} />
            </button>
            <button className="p-2 rounded-md bg-white text-black hover:bg-gray-300 transition">
              <Twitter size={20} />
            </button>
            <button className="p-2 rounded-md bg-white text-black hover:bg-gray-300 transition">
              <Youtube size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="max-w-6xl mx-auto px-10 mt-10 grid grid-cols-1 md:grid-cols-3 gap-70">
        <div>
          <h4 className="text-lg font-semibold  mb-4">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Models</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Consultation</a></li>
            <li><a href="#" className="hover:underline">Book Test Drive</a></li>
            <li><a href="#" className="hover:underline">Events</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Customer Service</a></li>
            <li><a href="#" className="hover:underline">Warranty</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto px-6 mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Porsche. All rights reserved.
      </div>

      {/* Porsche Text */}
      <div className="mt-4 text-center text-white text-xl font-bold tracking-widest uppercase"
      style={{ fontFamily: "'911 Porscha', sans-serif" }}>
        PORSCHE
      </div>
      <br />
    </footer>
  );
}

export default Footer;

