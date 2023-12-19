import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FourthSection from "./FourthSection";

const page = () => {
  return (
    <main className="flex flex-col min-h-screen bg-[#F6F6F6]">
      <Navbar />
      <div className="flex-grow container mx-auto px-12">
        <FourthSection />
      </div>
      <Footer />
    </main>
  );
};

export default page;