import React from 'react';
import { BlogList } from '../components/blog/BlogList';
import { BlogSidebar } from '../components/blog/BlogSidebar';
import { BlogHeader } from '../components/blog/BlogHeader';

export function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <BlogHeader />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <main className="lg:col-span-8">
            <BlogList />
          </main>
          <aside className="lg:col-span-4">
            <BlogSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}