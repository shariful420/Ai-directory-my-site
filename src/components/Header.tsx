import React from 'react';
import { Search, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                LaunchAI
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/explore" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Explore
            </a>
            <a href="/submit" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Submit
            </a>
            <a href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Blog
            </a>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="search"
                placeholder="Search tools..."
                className="pl-10 pr-4 py-2 w-64 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <ThemeToggle />
            <a
              href="/login"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
            >
              Sign In
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="/explore"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Explore
              </a>
              <a
                href="/submit"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Submit
              </a>
              <a
                href="/blog"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Blog
              </a>
              <div className="px-3 py-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="search"
                    placeholder="Search tools..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              <div className="px-3 py-2">
                <ThemeToggle />
              </div>
              <a
                href="/login"
                className="block px-3 py-2 text-base font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md"
              >
                Sign In
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}