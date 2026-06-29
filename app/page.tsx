import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Platforms from "@/components/Platforms";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Platforms />
      </main>
    </>
  );
}
