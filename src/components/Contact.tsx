"use client";

import React from "react";
import { useI18n } from "@/lib/i18n-context";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Download, Send } from "lucide-react";

const Contact = () => {
  const { lang, t } = useI18n();

  return (
    <section id="contact" className="space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-black">{t("contact.title")}</h2>
        <p className="text-white/50 max-w-xl mx-auto">
          {lang === 'fr' ? 'Prêt à transformer vos données en or ? Contactez-moi pour discuter de vos projets.' : 'Ready to turn your data into gold? Contact me to discuss your projects.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Links */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="mailto:yaofreemansegue@gmail.com" className="p-6 glass rounded-2xl flex items-center space-x-4 hover:border-cyan-400/50 transition-all border-glow">
              <div className="p-3 bg-cyan-400/10 rounded-xl text-cyan-400"><Mail /></div>
              <div>
                <p className="text-xs text-white/40 uppercase">Email</p>
                <p className="font-medium text-sm">yaofreemansegue@gmail.com</p>
              </div>
            </a>
            <a href="https://wa.me/22879869008" className="p-6 glass rounded-2xl flex items-center space-x-4 hover:border-green-400/50 transition-all border-glow">
              <div className="p-3 bg-green-400/10 rounded-xl text-green-400"><Phone /></div>
              <div>
                <p className="text-xs text-white/40 uppercase">WhatsApp</p>
                <p className="font-medium text-sm">+228 798 690 08</p>
              </div>
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="flex-1 min-w-[160px] px-6 py-4 bg-white/5 hover:bg-white/10 rounded-2xl flex items-center justify-center space-x-3 transition-all border border-white/10 group">
              <Linkedin className="group-hover:text-blue-400" />
              <span className="font-bold">LinkedIn</span>
            </button>
            <button className="flex-1 min-w-[160px] px-6 py-4 bg-white/5 hover:bg-white/10 rounded-2xl flex items-center justify-center space-x-3 transition-all border border-white/10 group">
              <Github className="group-hover:text-cyan-400" />
              <span className="font-bold">GitHub</span>
            </button>
          </div>

          <button className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-amethyst-600 rounded-2xl flex items-center justify-center space-x-3 font-bold shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-transform">
            <Download size={20} />
            <span>{lang === 'fr' ? 'Télécharger CV (PDF)' : 'Download CV (PDF)'}</span>
          </button>
        </div>

        {/* Form Placeholder */}
        <div className="glass rounded-[2.5rem] p-8 md:p-10 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-white/40">{t("contact.name")}</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400/50 transition-colors" placeholder="Freeman Yao" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-white/40">{t("contact.email")}</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400/50 transition-colors" placeholder="email@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-white/40">{t("contact.message")}</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400/50 transition-colors resize-none" placeholder={lang === 'fr' ? 'Votre message...' : 'Your message...'} />
            </div>
          </div>
          <button className="w-full py-4 bg-white text-indigo-950 font-black rounded-xl flex items-center justify-center space-x-3 hover:bg-cyan-400 hover:text-white transition-all">
            <span>{t("contact.send")}</span>
            <Send size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
