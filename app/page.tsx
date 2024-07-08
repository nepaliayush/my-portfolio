import Image from "next/image";
import Landing from "./components/Landing";
import VANTA from "vanta/dist/vanta.net.min";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-5">
      
      <Landing/>
      <Projects/>
      <AboutMe/>
      <Experience/>
      <Contact />
    </main>
  );
}
