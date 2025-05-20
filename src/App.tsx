import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Visualizations } from './components/Visualizations';
import { Pricing } from './components/Pricing';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-br from-[#8C54A1] to-[#9E6DB4] text-white">
        <Navbar />
        <Hero />
      </header>
      <Features />
      <Visualizations />
      <Pricing />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;