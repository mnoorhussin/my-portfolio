import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <section id="hero">
        <Hero />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </Layout>
  );
}
