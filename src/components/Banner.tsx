import React from 'react';
import { Rocket, TrendingUp } from 'lucide-react';

export function Banner() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Main Content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Launch Your AI Startup to an Engaged Community
            </h1>
            <p className="text-xl text-purple-100">
              Join thousands of founders showcasing their AI innovations to early adopters, investors, and tech enthusiasts.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/submit"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-purple-600 hover:bg-purple-50 font-semibold transition-colors"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Launch Your Startup
              </a>
              <a
                href="/explore"
                className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold transition-colors"
              >
                Explore Tools
              </a>
            </div>
            <div className="flex items-center space-x-8 text-purple-100">
              <div>
                <span className="block text-2xl font-bold">1,000+</span>
                <span>AI Tools</span>
              </div>
              <div>
                <span className="block text-2xl font-bold">50K+</span>
                <span>Monthly Users</span>
              </div>
              <div>
                <span className="block text-2xl font-bold">100+</span>
                <span>Daily Launches</span>
              </div>
            </div>
          </div>

          {/* Featured Today */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-6 h-6 mr-2" />
              <h2 className="text-xl font-semibold">Featured Today</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors cursor-pointer">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=64&h=64&fit=crop"
                    alt="AI Tool"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">AImagine Pro</h3>
                    <p className="text-sm text-purple-100">
                      Advanced image generation with unprecedented control and quality
                    </p>
                    <div className="flex items-center mt-2 text-sm">
                      <span className="bg-purple-500 px-2 py-1 rounded-full">AI Image Generation</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors cursor-pointer">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1676277791608-ac54585e6876?w=64&h=64&fit=crop"
                    alt="AI Tool"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">CodePilot AI</h3>
                    <p className="text-sm text-purple-100">
                      Your intelligent coding companion powered by advanced AI
                    </p>
                    <div className="flex items-center mt-2 text-sm">
                      <span className="bg-purple-500 px-2 py-1 rounded-full">Developer Tools</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}