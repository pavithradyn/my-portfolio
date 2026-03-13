"use client";

export default function Navbar() {
  const links = ["Home", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-purple-500/10 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
       {/* Logo */}
<a
  href="#hero"
  className="flex items-center text-xl font-bold tracking-tight hover:scale-105 transition-transform"
>
  <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
    Pavithra
  </span>

  <span className="text-purple-500 mx-1 animate-pulse">_</span>

  <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
    developer
  </span>
</a>

        {/* Navigation Links */}
        <div className="flex gap-10">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative text-sm uppercase tracking-widest text-purple-300 hover:text-white transition duration-300 group"
            >
              {link}

              {/* animated underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-400 to-indigo-400 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>

              {/* glow on hover */}
              <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 blur-md bg-purple-500/20 transition"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}