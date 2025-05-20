import React from 'react';
import {
  LineChart,
  Bell,
  Target,
  Activity,
  AlertCircle,
  Users,
} from 'lucide-react';

const features = [
  {
    icon: LineChart,
    title: "Comprehensive Symptom Tracking",
    description: "Log your asthma symptoms effortlessly with our intuitive interface. Track coughing, wheezing, and more.",
  },
  {
    icon: Bell,
    title: "Medication Management",
    description: "Never miss a dose again with our smart medication tracking and reminder system.",
  },
  {
    icon: Target,
    title: "Identify Your Triggers",
    description: "Track potential triggers like pollen, smoke, or exercise to better manage your condition.",
  },
  {
    icon: Activity,
    title: "Monitor Lung Function",
    description: "Keep track of your peak flow readings and visualize your lung function trends over time.",
  },
  {
    icon: AlertCircle,
    title: "Emergency Preparedness",
    description: "Stay prepared with our emergency tracking feature and quick-access action plans.",
  },
  {
    icon: Users,
    title: "Supportive Community",
    description: "Join a community of people who understand and share your experiences.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
          Why Choose MediMed?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md 
              transition-shadow">
              <feature.icon className="w-12 h-12 text-[#8C54A1] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}