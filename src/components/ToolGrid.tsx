import React from 'react';
import { ToolCard } from './ToolCard';
import type { Tool } from '../types';

interface ToolGridProps {
  tools: Tool[];
  viewMode: 'grid' | 'list';
}

export function ToolGrid({ tools, viewMode }: ToolGridProps) {
  return (
    <div className={`
      ${viewMode === 'grid'
        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        : 'space-y-4'
      }
    `}>
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}