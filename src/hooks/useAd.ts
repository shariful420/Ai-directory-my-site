import { useState, useEffect } from 'react';
import type { Ad } from '../types/ads';

export function useAd(placement: string) {
  const [ad, setAd] = useState<Ad | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAd = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/ads?placement=${placement}`);
        if (!response.ok) throw new Error('Failed to fetch ad');

        const data = await response.json();
        setAd(data.ad);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch ad');
        setAd(null);
      } finally {
        setLoading(false);
      }
    };

    fetchAd();
  }, [placement]);

  return { ad, loading, error };
}