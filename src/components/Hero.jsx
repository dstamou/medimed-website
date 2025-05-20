import React from 'react';

export function Hero() {
  return (
    <div className="relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#8C54A1]/90 to-[#9E6DB4]/90"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          MediMed: Take Control of Your Health
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto drop-shadow">
          Managing asthma has never been easier. Track symptoms, manage medications, 
          and identify triggers—all in one place with MediMed's innovative platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-[#8C54A1] px-8 py-3 rounded-lg font-semibold 
            hover:bg-purple-100 transition-colors shadow-lg hover:shadow-xl">
            Sign Up for Free
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg 
            font-semibold hover:bg-white/10 transition-colors shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}