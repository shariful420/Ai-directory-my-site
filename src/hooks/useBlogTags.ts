import { useState, useEffect } from 'react';
import type { BlogTag } from '../types/blog';

export function useBlogTags() {
  const [tags, setTags] = useState<BlogTag[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTags = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/blog/tags');
        if (!response.ok) throw new Error('Failed to fetch tags');

        const data = await response.json();
        setTags(data.tags);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch tags');
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  return { tags, loading, error };
}