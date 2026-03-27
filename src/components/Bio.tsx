"use client";

import React from "react";
import { useI18n } from "@/lib/i18n-context";
import { motion } from "framer-motion";
import { Brain, Database, Cpu, Globe } from "lucide-react";

const Bio = () => {
  const { lang, t } = useI18n();

  return (
    <section id="bio" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-black">{t("nav.bio")}</h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-amethyst-500 rounded-full" />
        
        <p className="text-lg text-white/80 font-light leading-relaxed">
          {lang === 'fr' ? (
            <>
              Passionné par l'<strong>intelligence artificielle</strong> et la <strong>science des données</strong>, 
              je me définis comme un alchimiste numérique. Ma mission est de transformer les pipelines de données 
              complexes en solutions d'IA intuitives et performantes. 
              <br /><br />
              Avec une expertise particulière dans les frameworks <strong>RAG</strong> (Retrieval-Augmented Generation) 
              et les agents autonomes, je conçois des systèmes qui ne se contentent pas de traiter l'information, 
              mais qui l'exploitent de manière stratégique.
            </>
          ) : (
            <>
              Passionate about <strong>Artificial Intelligence</strong> and <strong>Data Science</strong>, 
              I define myself as a digital alchemist. My mission is to transform complex data pipelines 
              into intuitive and high-performance AI solutions. 
              <br /><br />
              With specific expertise in <strong>RAG</strong> (Retrieval-Augmented Generation) frameworks 
              and autonomous agents, I design systems that don't just process information, 
              but leverage it strategically.
            </>
          )}
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-4">
        {[
          { icon: <Brain />, title: "Generative AI", color: "text-cyan-400" },
          { icon: <Database />, title: "RAG Systems", color: "text-amethyst-400" },
          { icon: <Cpu />, title: "ML Engineering", color: "text-blue-400" },
          { icon: <Globe />, title: "Data Strategy", color: "text-indigo-400" }
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 glass rounded-2xl flex flex-col items-center text-center space-y-3 hover:border-white/30 transition-all border-glow"
          >
            <div className={`${item.color} p-3 bg-white/5 rounded-xl`}>
              {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
            </div>
            <h3 className="font-bold text-sm tracking-tight">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Bio;
