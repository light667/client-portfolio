"use client";

import React, { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n-context";
import { useTheme } from "next-themes";
import { Moon, Sun, Languages, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { lang, setLang, t } = useI18n();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const navLinks = [
    { name: t("nav.home"), href: "#" },
    { name: t("nav.bio"), href: "#bio" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="w-full max-w-6xl border-b border-white/10 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-sm">
        <div className="text-xl font-black tracking-tighter text-white">
          FREEMAN YAO SEGUE
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Controls */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            title="Toggle Language"
          >
            <Languages size={20} className="text-cyan-400" />
          </button>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            title="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-indigo-950" />
            )}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 glass rounded-2xl p-6 md:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                className="flex items-center space-x-2 text-sm"
              >
                <Languages size={20} />
                <span>{lang === "fr" ? "English" : "Français"}</span>
              </button>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 bg-white/10 rounded-full"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
