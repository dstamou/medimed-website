import React from 'react';
import { LineChart, Target, Activity, BarChart2 } from 'lucide-react';

const visualizations = [
  {
    icon: LineChart,
    title: "Symptom Timeline",
    description: "View when symptoms occur and track their severity over time.",
  },
  {
    icon: Target,
    title: "Trigger Correlation Charts",
    description: "Discover patterns between your symptoms and potential triggers.",
  },
  {
    icon: Activity,
    title: "Peak Flow Trendline",
    description: "Monitor changes in your lung function with detailed trend analysis.",
  },
  {
    icon: BarChart2,
    title: "Symptom Severity Heatmap",
    description: "Identify days and patterns of severe symptoms for better management.",
  },
];

export function Visualizations() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
          Visualize Your Progress
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {visualizations.map((viz, index) => (
            <div key={index} className="flex items-start space-x-4">
              <viz.icon className="w-8 h-8 text-[#8C54A1] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{viz.title}</h3>
                <p className="text-gray-600">{viz.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}