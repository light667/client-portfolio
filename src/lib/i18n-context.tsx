"use client";

import React, { createContext, useContext, useState } from 'react';

type Language = 'fr' | 'en';

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    'nav.home': 'Accueil',
    'nav.bio': 'Bio',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'hero.catchphrase': 'In Data We Trust',
    'hero.bio': 'Expert en alchimie des données, je transforme le bruit brut en intelligence actionnable. Spécialisé en IA Générative et architectures RAG, je bâtis des ponts entre les statistiques rigoureuses et les agents autonomes du futur.',
    'skills.title': 'Expertise Tech',
    'projects.title': 'Projets Innovants',
    'services.title': 'Mes Services',
    'contact.title': 'Parlons de vos données',
    'contact.send': 'Envoyer',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
  },
  en: {
    'nav.home': 'Home',
    'nav.bio': 'Bio',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'hero.catchphrase': 'In Data We Trust',
    'hero.bio': 'Expert in data alchemy, I transform raw noise into actionable intelligence. Specialized in Generative AI and RAG architectures, I build bridges between rigorous statistics and the autonomous agents of the future.',
    'skills.title': 'Tech Expertise',
    'projects.title': 'Innovative Projects',
    'services.title': 'My Services',
    'contact.title': "Let's Talk Data",
    'contact.send': 'Send',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
  }
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('fr');

  const t = (key: string) => {
    return (translations[lang] as Record<string, string>)[key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
