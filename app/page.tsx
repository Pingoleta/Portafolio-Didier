"use client";


import Contact from "@/components/contact";
import Skills from "@/components/skills";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import About from "@/components/about";
import { Button } from "@heroui/button";
import App from "@/components/cards";

export default function Home() {
  return (
    <div>
  
      <Hero />
      <About />
      <App/>
      <Projects />
      <Skills />
      <Contact />
    
    </div>
  );
}