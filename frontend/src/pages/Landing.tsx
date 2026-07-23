import { Navbar } from "../components/landing/Navbar";
import { Hero } from "../components/landing/Hero";
import { Features } from "../components/landing/Features";
import { HowItWorks } from "../components/landing/HowItWorks";
import { Statistics } from "../components/landing/Statistics";
import { FAQ } from "../components/landing/FAQ";
import { Footer } from "../components/landing/Footer";
import { CTA } from "../components/landing/CTA";
export const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features/>
      <HowItWorks/>
      <Statistics/>
      <FAQ/>
      <Footer/>
      <CTA/>
    </>
  );
};