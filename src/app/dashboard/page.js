import React from 'react'
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const page = () => {
    return (
        <main className="flex flex-col min-h-screen bg-[#F6F6F6]">
          <Navbar />
          <div className="container mt-24 mx-auto px-12 py-4">
            <AboutSection />
          </div>
          <Footer />
        </main>
    );
}

export default page