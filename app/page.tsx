import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import HeroStats from "../components/home/HeroStats";
import WhyOceanMind from "../components/home/WhyOceanMind";
import Features from "../components/home/Features";
import HowItWorks from "../components/home/HowItWorks";
import Differentiator from "../components/home/Differentiator";
import CTA from "../components/home/CTA";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">

      <Navbar />

      <Hero />

      <HeroStats />

      <WhyOceanMind />

      <Features />

      <HowItWorks />

      <Differentiator />

      <CTA />

      <Footer />

    </main>
  );
}