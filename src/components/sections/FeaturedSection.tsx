import React from 'react';
import { Sparkles } from 'lucide-react';
import { ToolCard } from '../ToolCard';
import type { Tool } from '../../types';

interface FeaturedSectionProps {
  tools: Tool[];
}

export function FeaturedSection({ tools }: FeaturedSectionProps) {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Featured Launches
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} variant="featured" />
          ))}
        </div>
      </div>
    </section>
  );
}