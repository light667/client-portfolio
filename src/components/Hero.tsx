"use client";

import React from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";
import { ChevronRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const { t } = useI18n();

  return (
    <section className="relative flex flex-col items-center justify-center text-center pt-20">
      {/* Decorative Constellation (Simplified) */}
      <div className="absolute -z-10 w-full h-full max-w-4xl opacity-20">
        <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="300" r="2" fill="#22D3EE" />
          <circle cx="200" cy="150" r="1.5" fill="#A855F7" />
          <circle cx="600" cy="450" r="1.5" fill="#22D3EE" />
          <path d="M400 300L200 150M400 300L600 450" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <div className="inline-block px-4 py-1.5 glass rounded-full text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-4">
          Data Scientist | AI Engineer | Data Analyst
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
          <span className="block text-white">IN DATA</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-white to-amethyst-500 bg-clip-text text-transparent text-glow-cyan animate-pulse">
            WE TRUST
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-white/70 font-light leading-relaxed px-4">
          {t("hero.bio")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-amethyst-600 rounded-full font-bold text-white flex items-center space-x-2 shadow-lg shadow-cyan-500/20"
          >
            <span>{t("nav.projects")}</span>
            <ChevronRight size={18} />
          </motion.button>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="p-3 glass rounded-full hover:text-cyan-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="p-3 glass rounded-full hover:text-amethyst-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:yaofreemansegue@gmail.com" className="p-3 glass rounded-full hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Hero Image / Illustration Placeholder */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-16 w-64 h-64 relative rounded-full p-1 bg-gradient-to-br from-cyan-500 to-amethyst-500 overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.3)]"
      >
        <div className="w-full h-full rounded-full bg-indigo-950 overflow-hidden flex items-center justify-center relative">
           <img 
            src="/freeman.jpeg" 
            alt="Freeman Yao SEGUE" 
            className="w-full h-full object-cover"
           />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
