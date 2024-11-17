import React from 'react';
import { useAd } from '../../hooks/useAd';
import { AdSkeleton } from './AdSkeleton';
import { Star } from 'lucide-react';

export function FeaturedAd() {
  const { ad, loading, error } = useAd('featured');

  if (loading) {
    return <AdSkeleton className="max-w-4xl mx-auto" />;
  }

  if (error || !ad) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="text-xs text-gray-500 dark:text-gray-400 text-center py-2 bg-gray-50 dark:bg-gray-700">
        Featured Promotion
      </div>
      <a
        href={ad.url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="block"
        onClick={() => {
          fetch('/api/ads/click', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ adId: ad.id, placement: 'featured' }),
          });
        }}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative">
            <img
              src={ad.imageUrl}
              alt={ad.title}
              className="w-full h-full object-cover"
              onLoad={() => {
                fetch('/api/ads/impression', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ adId: ad.id, placement: 'featured' }),
                });
              }}
            />
            {ad.badge && (
              <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <Star className="w-4 h-4 mr-1" />
                {ad.badge}
              </div>
            )}
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {ad.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {ad.description}
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Learn More
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}