"use client";
import { motion } from "framer-motion";

export default function ProjectFlow() {
  const myProjects = [
    { 
      title: "CaptionCast AI", 
      desc: "An automated podcast to video workflow. Transcribes audio, clips highlights, and generates styled captions for social media.",
      tag: "AI_Video",
      link: "https://github.com/pavithradyn/podcast-caption-generator" // Replace with your actual link
    },

     { 
    title: "Podcasting Website", 
    desc: "A modern podcast website that showcases episodes with interactive UI, smooth animations, and easy access to content.",
    tag: "A modern tech_stack",
    link: "https://github.com/pavithradyn/podcast-website"
  },

 { 
    title: "YellowBus Tracker", 
    desc: "STAY TUNED!",
    tag: "Full Stack_Maps",
    link: "https://github.com/pavithradyn"
  },

  ];
  
  

  return (
    <section id="projects" className="max-w-3xl mx-auto py-20 px-6">
      <h2 className="text-2xl font-bold text-center mb-12 text-purple-400 uppercase tracking-widest">
        Featured Project
      </h2>
      
      <div className="flex flex-col gap-8">
        {myProjects.map((project, i) => (
          // By wrapping the card in an <a> tag, the whole area becomes clickable
          <a 
            key={i} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, borderColor: "#a855f7" }} // Lifts and changes border color
className="p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-gray-800 transition-all duration-300 shadow-xl"            >
              <span className="text-purple-400 text-sm font-mono mb-2 block">{project.tag}</span>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">{project.desc}</p>
              
              <div className="mt-6">
                <span className="text-white border-b border-white group-hover:text-purple-400 group-hover:border-purple-400 transition">
                  View Project →
                </span>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
}
