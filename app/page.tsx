import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import HomeScreen from "@/components/HomeScreen";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <HomeScreen />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
