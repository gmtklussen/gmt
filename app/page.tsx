import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Diensten from "@/components/Diensten";
import About from "@/components/About";
import Waarom from "@/components/Waarom";
import Werkwijze from "@/components/Werkwijze";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Diensten />
        <About />
        <Waarom />
        <Werkwijze />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
