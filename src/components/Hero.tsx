"use client";

import React from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";
import { ChevronRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const { t } = useI18n();

  return (
    <section className="relative flex flex-col items-center justify-center text-center pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <div className="inline-block px-4 py-1 border border-white/10 rounded-sm text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400 mb-4">
          Data Scientist | AI Engineer | Data Analyst
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
          <span className="block text-white opacity-40">IN DATA</span>
          <span className="block text-white">WE TRUST.</span>
        </h1>

        <p className="max-w-xl mx-auto text-base text-white/60 font-medium leading-relaxed px-4">
          {t("hero.bio")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-white text-slate-950 font-black rounded-sm flex items-center space-x-3 transition-all"
          >
            <span>{t("nav.projects")}</span>
            <ChevronRight size={18} />
          </motion.button>
          
          <div className="flex items-center space-x-8">
            <a href="#" className="text-white/40 hover:text-white transition-colors">
              <Github size={22} />
            </a>
            <a href="#" className="text-white/40 hover:text-white transition-colors">
              <Linkedin size={22} />
            </a>
            <a href="mailto:yaofreemansegue@gmail.com" className="text-white/40 hover:text-white transition-colors">
              <Mail size={22} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Profile Image - Simplified */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-20 w-48 h-48 relative grayscale hover:grayscale-0 transition-all duration-700"
      >
        <div className="w-full h-full border border-white/10 p-1">
          <div className="w-full h-full relative overflow-hidden">
             <Image 
              src="/freeman.jpeg" 
              alt="Freeman Yao SEGUE" 
              fill
              className="object-cover"
             />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
