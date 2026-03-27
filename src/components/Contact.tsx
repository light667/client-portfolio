"use client";

import React from "react";
import { useI18n } from "@/lib/i18n-context";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const { lang, t } = useI18n();

  return (
    <section id="contact" className="space-y-16">
      <div className="flex flex-col items-start space-y-4">
        <h2 className="text-4xl font-black uppercase tracking-tighter">{t("contact.title")}</h2>
        <div className="h-px w-24 bg-white/20" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
            <a href="mailto:yaofreemansegue@gmail.com" className="p-8 bg-black/40 hover:bg-black/60 transition-all group">
              <Mail className="text-white/20 mb-4 group-hover:text-white transition-colors" size={20} />
              <p className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-1">Email</p>
              <p className="font-bold text-sm text-white/80">yaofreemansegue@gmail.com</p>
            </a>
            <a href="https://wa.me/22879869008" className="p-8 bg-black/40 hover:bg-black/60 transition-all group">
              <Phone className="text-white/20 mb-4 group-hover:text-white transition-colors" size={20} />
              <p className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-1">WhatsApp</p>
              <p className="font-bold text-sm text-white/80">+228 798 690 08</p>
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="flex-1 px-8 py-4 border border-white/5 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white text-xs font-black uppercase tracking-widest transition-all">
              LinkedIn
            </button>
            <button className="flex-1 px-8 py-4 border border-white/5 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white text-xs font-black uppercase tracking-widest transition-all">
              GitHub
            </button>
          </div>

          <button className="w-full px-8 py-4 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-slate-200 transition-all">
            {lang === 'fr' ? 'Télécharger CV (PDF)' : 'Download CV (PDF)'}
          </button>
        </div>

        <div className="border border-white/10 p-10 space-y-10">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/30">{t("contact.name")}</label>
              <input type="text" className="w-full bg-white/5 border-b border-white/10 px-0 py-3 outline-none focus:border-white transition-colors text-sm" placeholder="Freeman Yao SEGUE" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/30">{t("contact.email")}</label>
              <input type="email" className="w-full bg-white/5 border-b border-white/10 px-0 py-3 outline-none focus:border-white transition-colors text-sm" placeholder="email@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/30">{t("contact.message")}</label>
              <textarea rows={4} className="w-full bg-white/5 border-b border-white/10 px-0 py-3 outline-none focus:border-white transition-colors resize-none text-sm" placeholder={lang === 'fr' ? 'Votre message...' : 'Your message...'} />
            </div>
          </div>
          <button className="w-full py-4 border border-white text-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            {t("contact.send")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
