import React from 'react';

export function Hero() {
  return (
    <div className="container mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Transform Your Asthma Management Journey with MediMed
      </h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Managing asthma has never been easier. Track symptoms, manage medications, 
        and identify triggers—all in one place with MediMed's innovative platform. 
        Join thousands of users who have improved their respiratory health with our 
        comprehensive tools and supportive community.
      </p>
      <div className="mt-8 text-lg text-white/90 max-w-3xl mx-auto mb-12">
        <p className="mb-4">
          MediMed is more than just an app - it's your personal asthma management companion. 
          Our platform combines advanced tracking capabilities with an intuitive interface, 
          making it easier than ever to monitor your respiratory health and identify patterns 
          that affect your well-being.
        </p>
        <p>
          Whether you're newly diagnosed or have been managing asthma for years, our 
          comprehensive suite of tools helps you stay on top of your condition. From medication 
          reminders to detailed symptom tracking, we're here to support your journey to 
          better respiratory health.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="#features" 
          className="border-2 border-white text-white px-8 py-3 rounded-lg 
            font-semibold hover:bg-white/10 transition-colors"
        >
          Explore Features
        </a>
        <a 
          href="#pricing" 
          className="bg-white text-[#8C54A1] px-8 py-3 rounded-lg font-semibold 
            hover:bg-purple-100 transition-colors"
        >
          View Plans
        </a>
      </div>
      <div className="mt-12 flex justify-center space-x-4">
        <div className="fb-share-button" 
          data-href="https://medimed.leon-tech.com" 
          data-layout="button_count">
        </div>
        <a className="twitter-share-button"
          href="https://twitter.com/intent/tweet?text=Take%20control%20of%20your%20asthma%20management%20with%20MediMed!&url=https://medimed.leon-tech.com">
          Tweet
        </a>
      </div>
    </div>
  );
}