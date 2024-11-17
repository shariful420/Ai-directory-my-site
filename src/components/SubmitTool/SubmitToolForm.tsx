import React, { useState } from 'react';
import { Upload, Loader2 } from 'lucide-react';
import { PricingPlans } from './PricingPlans';
import type { Category } from '../../types';
import { useAuth } from '../../contexts/AuthContext';

const categories: Category[] = [
  { id: '1', name: 'AI Tools', slug: 'ai-tools', count: 150 },
  { id: '2', name: 'Machine Learning', slug: 'machine-learning', count: 89 },
  { id: '3', name: 'NLP', slug: 'nlp', count: 64 },
  { id: '4', name: 'Computer Vision', slug: 'computer-vision', count: 45 },
];

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const MAX_SCREENSHOTS = 5;

export function SubmitToolForm() {
  const { user } = useAuth();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    url: '',
    category: '',
    tags: '',
    logo: null as File | null,
    screenshots: [] as File[],
    pricing: 'basic',
  });

  const validateStep = (currentStep: number) => {
    setError('');
    
    switch (currentStep) {
      case 1:
        if (!formData.name.trim()) return 'Tool name is required';
        if (!formData.description.trim()) return 'Description is required';
        if (!formData.url.trim()) return 'Website URL is required';
        if (!formData.category) return 'Category is required';
        try {
          new URL(formData.url);
        } catch {
          return 'Please enter a valid URL';
        }
        break;
      case 2:
        if (!formData.logo) return 'Logo is required';
        if (formData.logo && formData.logo.size > MAX_FILE_SIZE) {
          return 'Logo file size must be less than 2MB';
        }
        if (formData.screenshots.length > MAX_SCREENSHOTS) {
          return 'Maximum 5 screenshots allowed';
        }
        for (const screenshot of formData.screenshots) {
          if (screenshot.size > MAX_FILE_SIZE) {
            return 'Each screenshot must be less than 2MB';
          }
        }
        break;
      case 3:
        if (!formData.pricing) return 'Please select a pricing plan';
        break;
    }
    return '';
  };

  const handleNext = () => {
    const error = validateStep(step);
    if (error) {
      setError(error);
      return;
    }
    setStep(step + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateStep(3);
    if (error) {
      setError(error);
      return;
    }

    if (!user) {
      setError('Please sign in to submit your tool');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Create FormData for file upload
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('description', formData.description);
      submitData.append('url', formData.url);
      submitData.append('category', formData.category);
      submitData.append('tags', formData.tags);
      submitData.append('pricing', formData.pricing);
      if (formData.logo) {
        submitData.append('logo', formData.logo);
      }
      formData.screenshots.forEach((screenshot) => {
        submitData.append('screenshots', screenshot);
      });

      // Replace with your actual API endpoint
      const response = await fetch('/api/tools', {
        method: 'POST',
        body: submitData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit tool');
      }

      // Redirect to success page or tool page
      window.location.href = '/submit/success';
    } catch (err) {
      setError('Failed to submit tool. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        {/* Progress Steps */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  1
                </span>
                <span className="text-sm font-medium">Details</span>
              </div>
              <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700 mx-4"></div>
              <div className="flex items-center space-x-4">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  2
                </span>
                <span className="text-sm font-medium">Media</span>
              </div>
              <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700 mx-4"></div>
              <div className="flex items-center space-x-4">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 3 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  3
                </span>
                <span className="text-sm font-medium">Plan</span>
              </div>
            </div>
          </div>
        </div>

        {error && (
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 text-red-700 dark:text-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {step === 1 && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Tool Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-purple-500 dark:bg-gray-700"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-purple-500 dark:bg-gray-700"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Website URL
                </label>
                <input
                  type="url"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-purple-500 dark:bg-gray-700"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-purple-500 dark:bg-gray-700"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.slug}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-purple-500 dark:bg-gray-700"
                  placeholder="AI, Machine Learning, NLP"
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Logo
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    {formData.logo ? (
                      <div className="flex flex-col items-center">
                        <img
                          src={URL.createObjectURL(formData.logo)}
                          alt="Logo preview"
                          className="w-24 h-24 object-contain mb-4"
                        />
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, logo: null })}
                          className="text-sm text-red-600 hover:text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <>
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600 dark:text-gray-400">
                          <label className="relative cursor-pointer rounded-md font-medium text-purple-600 hover:text-purple-500">
                            <span>Upload a file</span>
                            <input
                              type="file"
                              className="sr-only"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  setFormData({ ...formData, logo: file });
                                }
                              }}
                            />
                          </label>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          PNG, JPG, GIF up to 2MB
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Screenshots (up to 5)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    {formData.screenshots.length > 0 ? (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {formData.screenshots.map((file, index) => (
                          <div key={index} className="relative">
                            <img
                              src={URL.createObjectURL(file)}
                              alt={`Screenshot ${index + 1}`}
                              className="w-full h-32 object-cover rounded-lg"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                const newScreenshots = [...formData.screenshots];
                                newScreenshots.splice(index, 1);
                                setFormData({ ...formData, screenshots: newScreenshots });
                              }}
                              className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <>
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600 dark:text-gray-400">
                          <label className="relative cursor-pointer rounded-md font-medium text-purple-600 hover:text-purple-500">
                            <span>Upload files</span>
                            <input
                              type="file"
                              className="sr-only"
                              accept="image/*"
                              multiple
                              onChange={(e) => {
                                const files = Array.from(e.target.files || []).slice(0, MAX_SCREENSHOTS);
                                setFormData({ ...formData, screenshots: files });
                              }}
                            />
                          </label>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          PNG, JPG, GIF up to 5MB each
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <PricingPlans
              selectedPlan={formData.pricing}
              onSelectPlan={(plan) => setFormData({ ...formData, pricing: plan })}
            />
          )}

          <div className="flex justify-between pt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                disabled={isSubmitting}
              >
                Previous
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="ml-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="ml-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                    Submitting...
                  </>
                ) : (
                  'Submit & Pay'
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}