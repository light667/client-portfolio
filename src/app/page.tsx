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
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-24 overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_50%),radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.1),transparent_50%)] pointer-events-none" />
      
      <Navbar />
      
      <div className="w-full max-w-6xl space-y-32">
        <Hero />
        <Bio />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </div>

      <footer className="mt-20 py-8 text-center text-sm text-white/50 border-t border-white/10 w-full">
        <p>© 2026 Freeman Yao SEGUE - Built with Next.js & Framer Motion</p>
      </footer>
    </main>
  );
}
