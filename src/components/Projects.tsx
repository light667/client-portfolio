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
    <section id="projects" className="space-y-16">
      <div className="flex flex-col items-start space-y-4">
        <h2 className="text-4xl font-black uppercase tracking-tighter">{t("projects.title")}</h2>
        <div className="h-px w-24 bg-white/20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative p-10 bg-black/40 hover:bg-black/60 transition-all"
          >
            <div className="relative z-10 space-y-6">
              <div className="flex items-start justify-between">
                <div className="p-3 border border-white/10 rounded-sm">
                  <Folder size={20} className="text-white/40 group-hover:text-white transition-colors" />
                </div>
                <div className="flex space-x-4">
                  <a href={project.links.github} className="text-white/30 hover:text-white transition-colors"><Github size={18} /></a>
                  <a href={project.links.external} className="text-white/30 hover:text-white transition-colors"><ExternalLink size={18} /></a>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-white transition-colors">{project.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed line-clamp-2">
                  {lang === 'fr' ? project.desc : project.descEn}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold tracking-wider uppercase text-white/30 border border-white/5 px-2 py-1">
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
