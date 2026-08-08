import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-slate-950 via-blue-950 to-cyan-900 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
    </main>
  );
}