import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SecondSection from "./SecondSection";

const page = () => {
  return (
    <main className="flex flex-col min-h-screen bg-[#F6F6F6]">
      <Navbar />
      <div className="flex-grow container mx-auto px-12">
        <SecondSection />
      </div>
      <Footer />
    </main>
  );
};

export default page;