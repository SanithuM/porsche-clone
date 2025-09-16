import React from 'react';
import { Menu, User } from "lucide-react";

function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 flex items-center justify-between px-6 py-4 bg-black text-white z-50">
      {/* Left - Menu */}
      <div className="flex items-center gap-2 cursor-pointer"
      style={{ fontFamily: "'Porsche Next', 'Arial Narrow', Arial, 'Heiti SC', SimHei, sans-serif" }}>
        <Menu size={24} />
        <span className="text-sm uppercase tracking-wide">Menu</span>
      </div>

      {/* Center - Porsche Logo Text */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <h1
          className="text-2xl tracking-[0.3em] font-bold"
          style={{ fontFamily: "'911 Porscha', sans-serif" }}
        >
          PORSCHE
        </h1>
      </div>

      {/* Right - User Icon */}
      <div className="cursor-pointer">
        <User size={24} />
      </div>
    </nav>
  );
}

export default Navbar;

