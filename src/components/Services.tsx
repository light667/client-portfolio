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
    <section id="services" className="space-y-16">
      <div className="flex flex-col items-start space-y-4">
        <h2 className="text-4xl font-black uppercase tracking-tighter">{t("services.title")}</h2>
        <div className="h-px w-24 bg-white/20" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group p-10 bg-black/40 hover:bg-black/60 transition-all flex flex-col items-start text-left space-y-6"
          >
            <div className="text-white/20 group-hover:text-white transition-colors">
              {React.cloneElement(service.icon as React.ReactElement, { size: 28, strokeWidth: 1.5 })}
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold tracking-tight">
                {lang === 'fr' ? service.title : service.titleEn}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed font-medium">
                {lang === 'fr' ? service.desc : service.descEn}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
