import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustBand from "@/components/TrustBand";
import ResidentialCommercial from "@/components/ResidentialCommercial";
import About from "@/components/About";
import Process from "@/components/Process";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <TrustBand />
        <ResidentialCommercial />
        <About />
        <Process />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
