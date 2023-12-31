import React from "react";
import Navbar from "../components/Navbar";
import ProfileSection from "./ProfileSection";
import Footer from "../components/Footer";

const page = () => {
  return (
    <main className="flex flex-col min-h-screen bg-[#F6F6F6]">
      <Navbar />
      <div className="flex-grow container mx-auto">
        <ProfileSection />
      </div>
      <Footer />
    </main>
  );
};

export default page;