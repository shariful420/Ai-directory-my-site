import React from 'react';
import { BlogCard } from './BlogCard';
import { AdBanner } from '../ads/AdBanner';
import { useBlogPosts } from '../../hooks/useBlogPosts';
import { Pagination } from '../Pagination';

export function BlogList() {
  const { posts, loading, error, currentPage, totalPages, setCurrentPage } = useBlogPosts();

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
        {error}
      </div>
    );
  }

  // Insert ad after every 3 posts
  const postsWithAds = posts.reduce((acc: (typeof posts[0] | 'ad')[], post, index) => {
    acc.push(post);
    if ((index + 1) % 3 === 0 && index !== posts.length - 1) {
      acc.push('ad');
    }
    return acc;
  }, []);

  return (
    <div className="space-y-8">
      {postsWithAds.map((item, index) => 
        item === 'ad' ? (
          <AdBanner key={`ad-${index}`} placement="content" />
        ) : (
          <BlogCard key={item.id} post={item} />
        )
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}