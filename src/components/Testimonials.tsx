"use client";

import React from "react";
import { useI18n } from "@/lib/i18n-context";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

// Mock testimonials for demonstration
const testimonials = [
  {
    text: "Freeman a transformé notre approche des données. Son expertise en RAG a permis de créer un assistant médical d'une précision inégalée.",
    textEn: "Freeman transformed our approach to data. His RAG expertise allowed us to create a medical assistant with unparalleled accuracy.",
    author: "Dr. Jean Dupont",
    role: "Directeur Médical, PulseAI"
  },
  {
    text: "Un ingénieur rigoureux et créatif. Les dashboards automatisés qu'il a mis en place nous font gagner des heures d'analyse chaque semaine.",
    textEn: "A rigorous and creative engineer. The automated dashboards he implemented save us hours of analysis every week.",
    author: "Marie Lemoine",
    role: "Lead Data Scientist"
  }
];

const Testimonials = () => {
  const { lang, t } = useI18n();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-indigo-950/20 rounded-[3rem] border border-white/5 relative overflow-hidden">
      <div className="absolute top-10 left-10 text-white/5">
        <Quote size={120} />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
        <h2 className="text-3xl font-bold opacity-50 uppercase tracking-widest">{lang === 'fr' ? 'Témoignages' : 'Testimonials'}</h2>
        
        <div className="h-64 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <p className="text-2xl md:text-3xl font-light italic leading-relaxed text-white/90">
                  "{lang === 'fr' ? testimonials[current].text : testimonials[current].textEn}"
                </p>
                <div className="space-y-1">
                  <h4 className="font-bold text-cyan-400">{testimonials[current].author}</h4>
                  <p className="text-sm text-white/50">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
        </div>

        <div className="flex justify-center space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all ${current === idx ? 'bg-cyan-400 w-8' : 'bg-white/10'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
