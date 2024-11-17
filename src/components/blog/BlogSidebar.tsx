import React from 'react';
import { Search, Tag } from 'lucide-react';
import { AdBanner } from '../ads/AdBanner';
import { useBlogCategories } from '../../hooks/useBlogCategories';
import { useBlogTags } from '../../hooks/useBlogTags';

export function BlogSidebar() {
  const { categories } = useBlogCategories();
  const { tags } = useBlogTags();

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Search
        </h3>
        <div className="relative">
          <input
            type="search"
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>
      </div>

      {/* Ad Banner */}
      <AdBanner placement="sidebar" />

      {/* Categories */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <a
              key={category.slug}
              href={`/blog/category/${category.slug}`}
              className="flex items-center justify-between group"
            >
              <span className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                {category.name}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                ({category.count})
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <a
              key={tag.slug}
              href={`/blog/tag/${tag.slug}`}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-purple-100 hover:text-purple-800 dark:hover:bg-purple-900 dark:hover:text-purple-200"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag.name}
            </a>
          ))}
        </div>
      </div>

      {/* Second Ad Banner */}
      <AdBanner placement="sidebar-bottom" />
    </div>
  );
}