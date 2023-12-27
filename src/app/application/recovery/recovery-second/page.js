import React from "react";
import Navbar from "@/app/components/Navbar";
import AddApplication from "./AddSection";
import Footer from "@/app/components/Footer";

const page = () => {
  return (
    <main className="flex flex-col min-h-screen bg-[#F6F6F6]">
      <Navbar />
      <div className="flex-grow container mx-auto">
        <AddApplication />
      </div>
      <Footer />
    </main>
  );
};

export default page;
