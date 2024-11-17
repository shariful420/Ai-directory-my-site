import React from 'react';
import { SubmitToolForm } from '../components/SubmitTool/SubmitToolForm';

export function SubmitTool() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Submit Your AI Tool
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcase your innovation to thousands of AI enthusiasts, developers, and potential users.
          </p>
        </div>

        <SubmitToolForm />
      </div>
    </div>
  );
}