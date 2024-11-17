import { useState, useEffect } from 'react';
import type { BlogPost } from '../types/blog';

interface UseBlogPostsOptions {
  category?: string;
  tag?: string;
  page?: number;
  limit?: number;
}

export function useBlogPosts(options: UseBlogPostsOptions = {}) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(options.page || 1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const queryParams = new URLSearchParams();
        if (options.category) queryParams.append('category', options.category);
        if (options.tag) queryParams.append('tag', options.tag);
        queryParams.append('page', currentPage.toString());
        if (options.limit) queryParams.append('limit', options.limit.toString());

        const response = await fetch(`/api/blog/posts?${queryParams}`);
        if (!response.ok) throw new Error('Failed to fetch blog posts');

        const data = await response.json();
        setPosts(data.posts);
        setTotalPages(data.totalPages);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch blog posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [options.category, options.tag, currentPage, options.limit]);

  return { posts, loading, error, currentPage, totalPages, setCurrentPage };
}