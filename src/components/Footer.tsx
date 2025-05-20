import React from 'react';
import { Stethoscope } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Stethoscope className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">MediMed</span>
            </div>
            <p className="text-sm">
              Your trusted companion for comprehensive asthma management and respiratory health tracking.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="https://blog.medimed.leon-tech.com" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#community" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://www.lung.org" className="hover:text-white transition-colors">American Lung Association</a></li>
              <li><a href="https://ginasthma.org" className="hover:text-white transition-colors">GINA Guidelines</a></li>
              <li><a href="https://www.who.int/health-topics/asthma" className="hover:text-white transition-colors">WHO Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/gdpr" className="hover:text-white transition-colors">GDPR Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>© 2024 MediMed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}