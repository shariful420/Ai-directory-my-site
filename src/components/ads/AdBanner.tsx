import React from 'react';
import { useAd } from '../../hooks/useAd';
import { AdSkeleton } from './AdSkeleton';

interface AdBannerProps {
  placement: 'header' | 'sidebar' | 'content' | 'footer';
  className?: string;
}

export function AdBanner({ placement, className = '' }: AdBannerProps) {
  const { ad, loading, error } = useAd(placement);

  if (loading) {
    return <AdSkeleton className={className} />;
  }

  if (error || !ad) {
    return null;
  }

  return (
    <div className={`relative ${className}`}>
      <div className="text-xs text-gray-500 dark:text-gray-400 text-center mb-2">
        Advertisement
      </div>
      <a
        href={ad.url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="block overflow-hidden rounded-lg transition-transform hover:scale-[1.02]"
        onClick={() => {
          // Track ad click
          fetch('/api/ads/click', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ adId: ad.id, placement }),
          });
        }}
      >
        <img
          src={ad.imageUrl}
          alt={ad.title}
          className="w-full h-auto"
          onLoad={() => {
            // Track ad impression
            fetch('/api/ads/impression', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ adId: ad.id, placement }),
            });
          }}
        />
        {ad.showTitle && (
          <div className="p-4 bg-white dark:bg-gray-800">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {ad.title}
            </h3>
            {ad.description && (
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {ad.description}
              </p>
            )}
          </div>
        )}
      </a>
    </div>
  );
}