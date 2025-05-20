import React from 'react';
import { Check, X } from 'lucide-react';

const tiers = [
  {
    name: "First Steps",
    price: "Free",
    description: "Perfect for getting started with asthma management",
    features: [
      { name: "Symptom tracking", included: true },
      { name: "Medication reminders", included: true },
      { name: "Trigger identification", included: true },
      { name: "Basic reports", included: true },
      { name: "Single user account", included: true },
      { name: "Connection with your doctor", included: false },
      { name: "Detailed data analysis", included: false },
      { name: "Multiple user management", included: false },
    ],
    cta: "Get Started",
    ctaStyle: "border-2 border-[#8C54A1] text-[#8C54A1]",
  },
  {
    name: "All-in-One",
    price: "$9.99",
    period: "per month",
    description: "Complete control over your asthma management",
    features: [
      { name: "Symptom tracking", included: true },
      { name: "Medication reminders", included: true },
      { name: "Trigger identification", included: true },
      { name: "Basic reports", included: true },
      { name: "Single user account", included: true },
      { name: "Connection with your doctor", included: true },
      { name: "Detailed data analysis", included: true },
      { name: "Multiple user management", included: true },
    ],
    cta: "Try for a Month",
    ctaStyle: "bg-[#8C54A1] text-white",
    popular: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan for your asthma management needs. Start with our free tier 
            or unlock all features with our All-in-One package.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden
                ${tier.popular ? 'ring-2 ring-[#8C54A1]' : ''}`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-[#8C54A1] text-white px-4 py-1 rounded-bl-lg text-sm">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  {tier.period && (
                    <span className="text-gray-500 ml-2">{tier.period}</span>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{tier.description}</p>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature.name} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-3" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mr-3" />
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-500'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold 
                    transition-colors duration-200 ${tier.ctaStyle} 
                    hover:opacity-90`}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-sm max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-[#8C54A1]/10 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-[#8C54A1]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m0 0v2m0-2h2m-2 0H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            💡 Your Data, Always Accessible
          </h3>
          <p className="text-gray-600">
            Rest assured, your data is yours. It will never be locked away, and you'll always 
            have the option to download a copy whenever you need.
          </p>
        </div>
      </div>
    </section>
  );
}