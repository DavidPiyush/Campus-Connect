import Hero from "./_components/Hero/Hero";
import Navbar from "./_components/Navbar/Navbar";
import Features from "./_components/Features/Features";
import HowItWorks from "./_components/how/HowItWorks";
import Pricing from "./_components/Pricing/Pricing";
import Footer from "./_components/Footer/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features/>
      <HowItWorks/>
      <Pricing/>
      <Footer/>
    </main>
  );
}
