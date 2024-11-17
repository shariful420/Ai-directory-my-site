import { useState, useEffect } from 'react';
import type { Tool } from '../types';

interface UseToolsOptions {
  featured?: boolean;
  category?: string;
  page?: number;
  limit?: number;
}

export function useTools(options: UseToolsOptions = {}) {
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        setLoading(true);
        const queryParams = new URLSearchParams();
        if (options.featured) queryParams.append('featured', 'true');
        if (options.category) queryParams.append('category', options.category);
        if (options.page) queryParams.append('page', options.page.toString());
        if (options.limit) queryParams.append('limit', options.limit.toString());

        const response = await fetch(`/api/tools?${queryParams}`);
        if (!response.ok) throw new Error('Failed to fetch tools');

        const data = await response.json();
        setTools(data.tools);
        setTotalPages(data.totalPages);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch tools');
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, [options.featured, options.category, options.page, options.limit]);

  return { tools, loading, error, totalPages };
}