"use client";

import React from "react";
import { useI18n } from "@/lib/i18n-context";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "AI & Machine Learning",
    tools: ["Langchain", "LlamaIndex", "Pydantic AI", "HuggingFace", "PyTorch", "Scikit-learn"],
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    category: "Data Analysis & Viz",
    tools: ["Pandas", "Numpy", "Seaborn", "Matplotlib", "PowerBI", "Apache Superset"],
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    category: "Backend & Dev",
    tools: ["FastAPI", "Python", "SQL", "R", "PostgreSQL"],
    gradient: "from-indigo-500 to-amethyst-500"
  },
  {
    category: "Data Collection",
    tools: ["KoboToolbox", "HTML/CSS"],
    gradient: "from-amethyst-500 to-pink-500"
  }
];

const Skills = () => {
  const { t } = useI18n();

  return (
    <section id="skills" className="space-y-16">
      <div className="flex flex-col items-start space-y-4">
        <h2 className="text-4xl font-black uppercase tracking-tighter">{t("skills.title")}</h2>
        <div className="h-px w-24 bg-white/20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
        {skillsData.map((category, idx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="p-10 bg-black/40 hover:bg-black/60 transition-colors group"
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-8 border-b border-white/5 pb-2">
              {category.category}
            </h3>
            
            <ul className="space-y-4">
              {category.tools.map((tool) => (
                <li key={tool} className="flex items-center space-x-3 text-sm font-medium text-white/50 group-hover:text-white/80 transition-colors">
                  <div className="w-1 h-1 bg-white/20" />
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
