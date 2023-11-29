import React from "react";
import Navbar from "../components/Navbar";
import VacantSection from "./VacantSection";
import Footer from "../components/Footer";

const page = () => {
  return (
    <main className="flex flex-col min-h-screen bg-[#F6F6F6]">
      <Navbar />
      <div className="container mx-auto px-12">
        <VacantSection />
      </div>
      <Footer />
    </main>
  );
};

export default page;