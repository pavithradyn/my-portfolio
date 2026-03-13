"use client";
import { useState } from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
<a href="#hero" className="text-white font-bold text-xl hover:text-purple-400 transition cursor-pointer">
  Pavithra.dev
</a>        <div className="flex gap-6 text-gray-400">
          <a href="#hero" className="hover:text-purple-400 transition">Home</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
          
        </div>
      </div>
    </nav>
  );
}