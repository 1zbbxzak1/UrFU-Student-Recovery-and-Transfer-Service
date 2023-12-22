import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import CardSection from "./components/CardSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen mx-auto bg-[#F6F6F6]">
      <Navbar />
      <HeroSection />
      <div className="flex-grow container mx-auto px-12">
        <CardSection />
        <FAQSection />
      </div>
      <Footer />
    </main>
  );
}
