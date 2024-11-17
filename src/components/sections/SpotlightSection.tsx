import React from 'react';
import { Lightbulb } from 'lucide-react';
import { ToolCard } from '../ToolCard';
import type { Tool } from '../../types';

interface SpotlightSectionProps {
  tool: Tool;
}

export function SpotlightSection({ tool }: SpotlightSectionProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <Lightbulb className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Spotlight On
          </h2>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {tool.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {tool.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
              >
                Learn More
              </a>
            </div>
            <div className="relative h-64 md:h-auto">
              <img
                src={tool.logo}
                alt={tool.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}