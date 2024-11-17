import React from 'react';

interface AdSkeletonProps {
  className?: string;
}

export function AdSkeleton({ className = '' }: AdSkeletonProps) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="text-xs text-gray-500 dark:text-gray-400 text-center mb-2">
        Advertisement
      </div>
      <div className="bg-gray-200 dark:bg-gray-700 rounded-lg w-full h-32"></div>
    </div>
  );
}