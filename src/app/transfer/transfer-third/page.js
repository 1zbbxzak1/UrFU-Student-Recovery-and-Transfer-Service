import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ThirdSection from "./ThirdSection";

const page = () => {
  return (
    <main className="flex flex-col min-h-screen bg-[#F6F6F6]">
      <Navbar />
      <div className="flex-grow container mx-auto px-12">
        <ThirdSection />
      </div>
      <Footer />
    </main>
  );
};

export default page;