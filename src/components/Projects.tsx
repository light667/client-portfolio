"use client";

import React from "react";
import { useI18n } from "@/lib/i18n-context";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Pulse AI",
    desc: "Plateforme de santé innovante (Collaboration avec Light Djossou).",
    descEn: "Innovative healthcare platform (Collaboration with Light Djossou).",
    tech: ["Next.js", "FastAPI", "Mistral AI"],
    links: { github: "#", external: "#" },
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    title: "Medical-RAG Chatbot",
    desc: "Assistant médical avancé utilisant l'architecture RAG.",
    descEn: "Advanced medical assistant using RAG architecture.",
    tech: ["LlamaIndex", "Langchain", "OpenAI"],
    links: { github: "#", external: "#" },
    gradient: "from-amethyst-500/20 to-purple-500/20"
  },
  {
    title: "Data Analysis AI Assistant",
    desc: "Agent expert pour l'automatisation de l'analyse de données.",
    descEn: "Expert agent for automated data insights.",
    tech: ["Pandas", "LLM", "Python"],
    links: { github: "#", external: "#" },
    gradient: "from-blue-500/20 to-indigo-500/20"
  },
  {
    title: "Sentiment Analysis Dashboard",
    desc: "Tableau de bord interactif pour l'analyse de sentiments.",
    descEn: "Interactive dashboard for sentiment analysis.",
    tech: ["NLP", "PowerBI", "FastAPI"],
    links: { github: "#", external: "#" },
    gradient: "from-indigo-500/20 to-cyan-500/20"
  }
];

const Projects = () => {
  const { lang, t } = useI18n();

  return (
    <section id="projects" className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-black">{t("projects.title")}</h2>
          <p className="text-white/50 max-w-xl">
            Sélection de travaux combinant rigueur statistique et innovation technologique.
          </p>
        </div>
        <a href="#" className="text-cyan-400 font-bold flex items-center space-x-2 border-b border-cyan-400/30 hover:border-cyan-400 transition-all pb-1">
          <span>{lang === 'fr' ? 'Voir tout sur GitHub' : 'View all on GitHub'}</span>
          <Github size={18} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`group relative p-8 glass rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-white/20 transition-all`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10 space-y-4">
              <div className="flex items-start justify-between">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                  <Folder className="text-cyan-400" />
                </div>
                <div className="flex space-x-3">
                  <a href={project.links.github} className="p-3 hover:bg-white/10 rounded-full transition-colors"><Github size={20} /></a>
                  <a href={project.links.external} className="p-3 hover:bg-white/10 rounded-full transition-colors"><ExternalLink size={20} /></a>
                </div>
              </div>

              <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              <p className="text-white/70 line-clamp-2">
                {lang === 'fr' ? project.desc : project.descEn}
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                {project.tech.map(t => (
                  <span key={t} className="text-xs font-medium px-3 py-1 bg-white/5 rounded-full border border-white/10 transition-colors group-hover:border-cyan-400/30">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
