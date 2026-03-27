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
    <section id="skills" className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-black">{t("skills.title")}</h2>
        <p className="text-white/50 max-w-xl mx-auto">
          Un arsenal technologique complet pour transformer le chaos des données en clarté décisionnelle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((category, idx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="p-8 glass rounded-3xl space-y-6 relative overflow-hidden group"
          >
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${category.gradient} opacity-10 blur-2xl group-hover:opacity-30 transition-opacity`} />
            
            <h3 className="text-xl font-bold bg-white/10 px-4 py-2 rounded-lg inline-block">
              {category.category}
            </h3>
            
            <ul className="space-y-3">
              {category.tools.map((tool) => (
                <li key={tool} className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors cursor-default">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient}`} />
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
