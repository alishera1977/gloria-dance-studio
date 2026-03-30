import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />
      <Hero />
      <Programs />
      <Schedule />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
