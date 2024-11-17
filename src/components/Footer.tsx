import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
              LaunchAI
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              The premier platform for discovering and launching AI startups. Join our community of innovators and early adopters.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="/newsletter" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="/category/ai-tools" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  AI Tools
                </a>
              </li>
              <li>
                <a href="/category/machine-learning" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Machine Learning
                </a>
              </li>
              <li>
                <a href="/category/nlp" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Natural Language Processing
                </a>
              </li>
              <li>
                <a href="/category/computer-vision" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Computer Vision
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} LaunchAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}