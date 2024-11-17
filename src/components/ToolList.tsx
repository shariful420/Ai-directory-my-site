import React from 'react';
import { FilterBar } from './FilterBar';
import { ToolGrid } from './ToolGrid';
import type { Tool, Category } from '../types';

interface ToolListProps {
  title: string;
  description?: string;
}

export function ToolList({ title, description }: ToolListProps) {
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  // Mock data - Replace with actual API calls
  const categories: Category[] = [
    { id: '1', name: 'AI Tools', slug: 'ai-tools', count: 150 },
    { id: '2', name: 'Machine Learning', slug: 'machine-learning', count: 89 },
    { id: '3', name: 'NLP', slug: 'nlp', count: 64 },
    { id: '4', name: 'Computer Vision', slug: 'computer-vision', count: 45 },
  ];

  const tools: Tool[] = [
    {
      id: '1',
      name: 'AImagine Pro',
      description: 'Advanced image generation with unprecedented control and quality',
      logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=64&h=64&fit=crop',
      url: '#',
      category: 'AI Image Generation',
      tags: ['Image Generation', 'AI'],
      launchDate: '2024-03-15',
      featured: true,
      upvotes: 128,
    },
    {
      id: '2',
      name: 'CodePilot AI',
      description: 'Your intelligent coding companion powered by advanced AI',
      logo: 'https://images.unsplash.com/photo-1676277791608-ac54585e6876?w=64&h=64&fit=crop',
      url: '#',
      category: 'Developer Tools',
      tags: ['Coding', 'AI Assistant'],
      launchDate: '2024-03-14',
      featured: false,
      upvotes: 95,
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h2>
          {description && (
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
          )}
        </div>

        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          viewMode={viewMode}
          onCategoryChange={setSelectedCategory}
          onViewModeChange={setViewMode}
        />

        <div className="mt-8">
          <ToolGrid tools={tools} viewMode={viewMode} />
        </div>

        {/* Pagination - To be implemented */}
        <div className="mt-8 flex justify-center">
          {/* Pagination component will go here */}
        </div>
      </div>
    </section>
  );
}