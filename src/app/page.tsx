import { CallToAction } from "@/sections/CallToAction";
import { Features } from "@/sections/Features";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <Pricing />
      <CallToAction />
      <Footer />
    </>
  );
}
