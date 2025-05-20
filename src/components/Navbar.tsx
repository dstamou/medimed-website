import React from 'react';
import { Stethoscope } from 'lucide-react';

export function Navbar() {
  const handleLogin = () => {
    window.location.href = import.meta.env.VITE_AUTH_URL;
  };

  const handleSignUp = () => {
    window.location.href = import.meta.env.VITE_REGISTER_URL;
  };

  return (
    <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Stethoscope className="h-8 w-8" />
        <span className="text-xl font-bold">MediMed</span>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <a href="#features" className="hover:text-purple-200">Features</a>
        <a href="#pricing" className="hover:text-purple-200">Pricing</a>
        <a href="#community" className="hover:text-purple-200">Community</a>
        <button 
          onClick={handleLogin}
          className="text-white border-2 border-white/50 px-4 py-2 rounded-lg font-semibold 
            hover:bg-white/10 transition-colors">
          Login
        </button>
        <button 
          onClick={handleSignUp}
          className="bg-white text-[#8C54A1] px-4 py-2 rounded-lg font-semibold 
            hover:bg-purple-100 transition-colors">
          Sign Up
        </button>
      </div>
    </nav>
  );
}