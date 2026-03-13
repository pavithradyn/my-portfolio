"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/ProjectFlow"; 
import Contact from "@/components/Contact";

export default function Home() {
  return (
<main className="min-h-screen text-white scroll-smooth">      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}