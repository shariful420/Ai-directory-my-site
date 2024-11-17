import React, { useState } from 'react';
import { Award } from 'lucide-react';
import { ToolGrid } from '../ToolGrid';
import { Pagination } from '../Pagination';
import { AdBanner } from '../ads/AdBanner';
import { ToolCard } from '../ToolCard';
import type { Tool } from '../../types';

interface TopPicksSectionProps {
  tools: Tool[];
}

const ITEMS_PER_PAGE = 9;

export function TopPicksSection({ tools }: TopPicksSectionProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const totalPages = Math.ceil(tools.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleTools = tools.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Insert ad after every 6 tools
  const toolsWithAds = visibleTools.reduce((acc: (Tool | 'ad')[], tool, index) => {
    acc.push(tool);
    if ((index + 1) % 6 === 0 && index !== visibleTools.length - 1) {
      acc.push('ad');
    }
    return acc;
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Top Picks
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${
                viewMode === 'grid'
                  ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${
                viewMode === 'list'
                  ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              List
            </button>
          </div>
        </div>

        <div className={`
          ${viewMode === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'space-y-4'
          }
        `}>
          {toolsWithAds.map((item, index) => 
            item === 'ad' ? (
              <div key={`ad-${index}`} className="col-span-full">
                <AdBanner placement="content" className="my-8" />
              </div>
            ) : (
              <ToolCard key={item.id} tool={item} />
            )
          )}
        </div>

        <div className="mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
}