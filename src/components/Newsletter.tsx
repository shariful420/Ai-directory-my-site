import React from 'react';
import { Mail } from 'lucide-react';

export function Newsletter() {
  return (
    <section className="bg-purple-50 dark:bg-gray-800/50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-12 h-12 mx-auto mb-4 text-purple-600 dark:text-purple-400" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Stay Updated with AI Innovation
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Get weekly curated lists of the best AI tools and startups delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            No spam ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}