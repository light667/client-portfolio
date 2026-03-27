/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-24 overflow-hidden bg-background">
      <Navbar />
      
      <div className="w-full max-w-6xl space-y-48">
        <Hero />
        <Bio />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </div>

      <footer className="mt-40 py-12 text-center text-xs font-bold tracking-widest uppercase text-white/20 border-t border-white/5 w-full">
        <p>© 2026 FREEMAN YAO SEGUE — BUILT WITH NEXT.JS & FRAMER MOTION</p>
      </footer>
    </main>
  );
}
