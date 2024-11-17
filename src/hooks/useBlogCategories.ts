import { useState, useEffect } from 'react';
import type { BlogCategory } from '../types/blog';

export function useBlogCategories() {
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/blog/categories');
        if (!response.ok) throw new Error('Failed to fetch categories');

        const data = await response.json();
        setCategories(data.categories);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
}