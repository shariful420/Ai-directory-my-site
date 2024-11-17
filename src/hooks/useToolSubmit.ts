import { useState } from 'react';
import type { Tool } from '../types';

interface SubmitToolData {
  name: string;
  description: string;
  url: string;
  category: string;
  tags: string;
  logo: File | null;
  screenshots: File[];
  pricing: string;
}

export function useToolSubmit() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const submitTool = async (data: SubmitToolData) => {
    setIsSubmitting(true);
    setError('');

    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key === 'screenshots') {
          value.forEach((file: File) => {
            formData.append('screenshots', file);
          });
        } else if (value !== null) {
          formData.append(key, value);
        }
      });

      const response = await fetch('/api/tools', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit tool');
      }

      const result = await response.json();
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit tool');
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitTool, isSubmitting, error };
}