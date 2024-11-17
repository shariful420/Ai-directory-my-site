import React from 'react';
import { Calendar, Clock, Tag } from 'lucide-react';
import type { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.categories.map((category) => (
            <a
              key={category}
              href={`/blog/category/${category.toLowerCase()}`}
              className="text-sm px-3 py-1 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-800"
            >
              {category}
            </a>
          ))}
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          <a href={`/blog/${post.slug}`} className="hover:text-purple-600 dark:hover:text-purple-400">
            {post.title}
          </a>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(post.publishedAt).toLocaleDateString()}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {post.readingTime} min read
          </div>
          <div className="flex items-center">
            <Tag className="w-4 h-4 mr-1" />
            {post.tags.slice(0, 2).join(', ')}
          </div>
        </div>
      </div>
    </article>
  );
}