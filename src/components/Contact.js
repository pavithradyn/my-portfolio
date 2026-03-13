"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-2xl mx-auto text-center border-t border-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-white">Let's Connect</h2>
      <p className="text-gray-400 mb-8">
        Always open to discussing new projects or creative opportunities.
      </p>
      <div className="flex justify-center gap-6">
        <a href="mailto:pavithradyn@gmail.com" className="text-purple-400 hover:text-white transition">
          Email
        </a>
        <a href="https://github.com/pavithradyn" className="text-purple-400 hover:text-white transition">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/pavithradyn/" className="text-purple-400 hover:text-white transition">
          LinkedIn
        </a>
      </div>
    </section>
  );
}