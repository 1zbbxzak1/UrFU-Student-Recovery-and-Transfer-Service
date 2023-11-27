import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import CardSection from "./components/CardSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#F6F6F6]">
      <Navbar />
      <div className="container mt-28 mx-auto px-12">
        <HeroSection />
        <CardSection />
        <FAQSection />
      </div>
      <Footer />
    </main>
  );
}
