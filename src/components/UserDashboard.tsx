import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Settings, Tool, BarChart, Plus } from 'lucide-react';

export function UserDashboard() {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* User Profile Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center space-x-4">
          <img
            src={user?.avatar}
            alt={user?.name}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {user?.name}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Tools Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Your Tools
            </h2>
            <button className="text-purple-600 hover:text-purple-700 dark:text-purple-400">
              <Plus className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            {/* Tool items will go here */}
            <p className="text-gray-500 dark:text-gray-400">
              No tools submitted yet
            </p>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Analytics
            </h2>
            <button className="text-purple-600 hover:text-purple-700 dark:text-purple-400">
              <BarChart className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            {/* Analytics content will go here */}
            <p className="text-gray-500 dark:text-gray-400">
              No analytics data available
            </p>
          </div>
        </div>

        {/* Settings Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Settings
            </h2>
            <button className="text-purple-600 hover:text-purple-700 dark:text-purple-400">
              <Settings className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            {/* Settings content will go here */}
            <p className="text-gray-500 dark:text-gray-400">
              Account settings and preferences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}