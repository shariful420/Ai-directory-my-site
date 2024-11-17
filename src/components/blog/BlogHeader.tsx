import React from 'react';
import { Newspaper } from 'lucide-react';

export function BlogHeader() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Newspaper className="w-8 h-8" />
            <h1 className="text-4xl font-bold">AI Innovation Blog</h1>
          </div>
          <p className="text-xl text-purple-100">
            Discover the latest trends, insights, and success stories in the AI startup ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
}