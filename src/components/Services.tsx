"use client";

import React from "react";
import { useI18n } from "@/lib/i18n-context";
import { motion } from "framer-motion";
import { Zap, Activity, BarChart3, Binary } from "lucide-react";

const services = [
  {
    title: "IA Générative & RAG",
    titleEn: "Generative AI & RAG",
    desc: "Conception d'assistants intelligents sur mesure exploitant vos données propres.",
    descEn: "Custom intelligent assistants leveraging your unique data.",
    icon: <Zap />,
    color: "bg-cyan-500/20 text-cyan-400"
  },
  {
    title: "Data Science Pipelines",
    titleEn: "Data Science Pipelines",
    desc: "De l'ingestion automatisée (KoboToolbox/SQL) à la modélisation prédictive robuste.",
    descEn: "From automated ingestion (KoboToolbox/SQL) to robust predictive modeling.",
    icon: <Activity />,
    color: "bg-blue-500/20 text-blue-400"
  },
  {
    title: "BI & Dashboarding",
    titleEn: "BI & Dashboarding",
    desc: "Visualisation avancée avec PowerBI et Superset pour un pilotage par la donnée.",
    descEn: "Advanced visualization with PowerBI and Superset for data-driven decisions.",
    icon: <BarChart3 />,
    color: "bg-indigo-500/20 text-indigo-400"
  },
  {
    title: "Déploiement d'API IA",
    titleEn: "AI API Deployment",
    desc: "Mise en production de modèles via FastAPI, Streamlit ou Chainlit.",
    descEn: "Productionizing models via FastAPI, Streamlit, or Chainlit.",
    icon: <Binary />,
    color: "bg-amethyst-500/20 text-amethyst-400"
  }
];

const Services = () => {
  const { lang, t } = useI18n();

  return (
    <section id="services" className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-black">{t("services.title")}</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-amethyst-500 rounded-full mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group p-8 glass rounded-3xl flex flex-col items-center text-center space-y-4 hover:bg-white/5 transition-all"
          >
            <div className={`p-4 rounded-2xl ${service.color} group-hover:scale-110 transition-transform`}>
              {React.cloneElement(service.icon as React.ReactElement, { size: 32 })}
            </div>
            <h3 className="text-xl font-bold">
              {lang === 'fr' ? service.title : service.titleEn}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {lang === 'fr' ? service.desc : service.descEn}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
