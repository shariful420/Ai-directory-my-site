import React from 'react';
import { Check } from 'lucide-react';

interface PricingPlansProps {
  selectedPlan: string;
  onSelectPlan: (plan: string) => void;
}

export function PricingPlans({ selectedPlan, onSelectPlan }: PricingPlansProps) {
  const plans = [
    {
      id: 'basic',
      name: 'Basic Launch',
      price: 49,
      features: [
        'Standard listing placement',
        '1 week featured section',
        'Basic analytics',
        'Community support',
      ],
    },
    {
      id: 'pro',
      name: 'Pro Launch',
      price: 99,
      features: [
        'Premium listing placement',
        '2 weeks featured section',
        'Advanced analytics',
        'Priority support',
        'Social media promotion',
      ],
    },
    {
      id: 'enterprise',
      name: 'Enterprise Launch',
      price: 199,
      features: [
        'Top listing placement',
        '4 weeks featured section',
        'Comprehensive analytics',
        'Dedicated support',
        'Social media promotion',
        'Newsletter feature',
        'Custom branding options',
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Choose Your Launch Plan
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Select the perfect plan to showcase your AI tool to our community
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-lg border-2 p-6 ${
              selectedPlan === plan.id
                ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/20'
                : 'border-gray-300 dark:border-gray-700'
            }`}
          >
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${plan.price}
                </span>
                <span className="ml-2 text-gray-500 dark:text-gray-400">one-time</span>
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => onSelectPlan(plan.id)}
                className={`w-full py-2 px-4 rounded-md text-sm font-medium ${
                  selectedPlan === plan.id
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'border border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20'
                }`}
              >
                {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}