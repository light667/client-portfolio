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
        <h2 className="text-4xl font-black uppercase tracking-tighter">{t("nav.bio")}</h2>
        <div className="w-12 h-1 bg-white" />
        
        <p className="text-base text-white/50 font-medium leading-relaxed">
          {lang === 'fr' ? (
            <>
              Passionné par l&apos;<strong>intelligence artificielle</strong> et la <strong>science des données</strong>, 
              je me définis comme un alchimiste numérique. Ma mission est de transformer les pipelines de données 
              complexes en solutions d&apos;IA intuitives et performantes. 
              <br /><br />
              Avec une expertise particulière dans les frameworks <strong>RAG</strong> (Retrieval-Augmented Generation) 
              et les agents autonomes, je conçois des systèmes qui ne se contentent pas de traiter l&apos;information, 
              mais qui l&apos;exploitent de manière stratégique.
            </>
          ) : (
            <>
              Passionate about <strong>Artificial Intelligence</strong> and <strong>Data Science</strong>, 
              I define myself as a digital alchemist. My mission is to transform complex data pipelines 
              into intuitive and high-performance AI solutions. 
              <br /><br />
              With specific expertise in <strong>RAG</strong> (Retrieval-Augmented Generation) frameworks 
              and autonomous agents, I design systems that don&apos;t just process information, 
              but leverage it strategically.
            </>
          )}
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5">
        {[
          { icon: <Brain />, title: "Generative AI" },
          { icon: <Database />, title: "RAG Systems" },
          { icon: <Cpu />, title: "ML Engineering" },
          { icon: <Globe />, title: "Data Strategy" }
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-8 bg-slate-950/40 flex flex-col items-center text-center space-y-4 hover:bg-slate-900/40 transition-colors"
          >
            <div className="text-white/40 group-hover:text-white transition-colors">
              {React.cloneElement(item.icon as React.ReactElement, { size: 24, strokeWidth: 1.5 })}
            </div>
            <h3 className="font-bold text-xs uppercase tracking-widest text-white/60">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Bio;
