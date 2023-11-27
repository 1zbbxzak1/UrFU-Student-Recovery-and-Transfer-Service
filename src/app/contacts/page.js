import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactsSection from "./ContactsSection";

const page = () => {
  return (
    <main className="flex flex-col min-h-screen bg-[#F6F6F6]">
      <Navbar />
      <div className="container mx-auto px-12">
        <ContactsSection />
      </div>
      <Footer />
    </main>
  );
};

export default page;
