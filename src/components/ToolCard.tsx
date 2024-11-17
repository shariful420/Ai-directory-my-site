import React from 'react';
import { ArrowUpRight, ThumbsUp } from 'lucide-react';
import type { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
  variant?: 'default' | 'featured';
}

export function ToolCard({ tool, variant = 'default' }: ToolCardProps) {
  return (
    <div className={`
      bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow
      ${variant === 'featured' ? 'border-2 border-purple-500' : 'border border-gray-200 dark:border-gray-700'}
    `}>
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={tool.logo}
              alt={tool.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {tool.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {tool.description}
              </p>
            </div>
          </div>
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
          >
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              {tool.category}
            </span>
            {tool.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <button className="inline-flex items-center space-x-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <ThumbsUp className="w-4 h-4" />
            <span className="text-sm">{tool.upvotes}</span>
          </button>
        </div>
      </div>
    </div>
  );
}