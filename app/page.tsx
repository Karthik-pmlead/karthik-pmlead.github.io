import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Platforms from "@/components/Platforms";
import About from "@/components/About";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Platforms />

        <About />

        <Experience />
      </main>
    </>
  );
}
