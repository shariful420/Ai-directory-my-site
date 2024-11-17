import React from 'react';
import { Filter, Grid, List } from 'lucide-react';
import type { Category } from '../types';

interface FilterBarProps {
  categories: Category[];
  selectedCategory: string;
  viewMode: 'grid' | 'list';
  onCategoryChange: (category: string) => void;
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

export function FilterBar({
  categories,
  selectedCategory,
  viewMode,
  onCategoryChange,
  onViewModeChange,
}: FilterBarProps) {
  return (
    <div className="sticky top-16 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 overflow-x-auto">
            <button
              onClick={() => onCategoryChange('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap
                ${selectedCategory === 'all'
                  ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
            >
              All Tools
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.slug)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap
                  ${selectedCategory === category.slug
                    ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
              >
                {category.name}
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`p-2 rounded-lg ${
                viewMode === 'grid'
                  ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/50'
                  : 'text-gray-400 hover:text-gray-500 dark:hover:text-gray-300'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`p-2 rounded-lg ${
                viewMode === 'list'
                  ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/50'
                  : 'text-gray-400 hover:text-gray-500 dark:hover:text-gray-300'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}