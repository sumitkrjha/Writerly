import About from "@/components/about";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Testimony from "@/components/testimony";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Testimony />
      <FAQ />
      <Footer />
    </>
  );
}
