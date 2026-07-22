import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Background />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
