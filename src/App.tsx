import React from 'react';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { FeaturedSection } from './components/sections/FeaturedSection';
import { SpotlightSection } from './components/sections/SpotlightSection';
import { TopPicksSection } from './components/sections/TopPicksSection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

// Mock data - Replace with actual API calls
const featuredTools = [
  {
    id: '1',
    name: 'AImagine Pro',
    description: 'Advanced image generation with unprecedented control and quality',
    logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=64&h=64&fit=crop',
    url: '#',
    category: 'AI Image Generation',
    tags: ['Image Generation', 'AI'],
    launchDate: '2024-03-15',
    featured: true,
    upvotes: 128,
  },
  {
    id: '2',
    name: 'CodePilot AI',
    description: 'Your intelligent coding companion powered by advanced AI',
    logo: 'https://images.unsplash.com/photo-1676277791608-ac54585e6876?w=64&h=64&fit=crop',
    url: '#',
    category: 'Developer Tools',
    tags: ['Coding', 'AI Assistant'],
    launchDate: '2024-03-14',
    featured: true,
    upvotes: 95,
  },
  {
    id: '3',
    name: 'VoiceGenius',
    description: 'Transform your voice content with AI-powered enhancement',
    logo: 'https://images.unsplash.com/photo-1678382156212-f1df773dfb33?w=64&h=64&fit=crop',
    url: '#',
    category: 'Audio Processing',
    tags: ['Voice', 'Audio', 'AI'],
    launchDate: '2024-03-13',
    featured: true,
    upvotes: 82,
  },
];

const spotlightTool = {
  id: '4',
  name: 'DataSense AI',
  description: 'Revolutionary data analytics platform powered by artificial intelligence. Transform your raw data into actionable insights with advanced machine learning algorithms and intuitive visualizations.',
  logo: 'https://images.unsplash.com/photo-1678382156212-f1df773dfb33?w=800&h=600&fit=crop',
  url: '#',
  category: 'Data Analytics',
  tags: ['Analytics', 'Machine Learning', 'Business Intelligence'],
  launchDate: '2024-03-12',
  featured: true,
  upvotes: 156,
};

// Generate more mock tools for the top picks section
const topPicks = Array.from({ length: 20 }, (_, i) => ({
  id: `${i + 5}`,
  name: `AI Tool ${i + 1}`,
  description: 'An innovative AI-powered solution',
  logo: `https://images.unsplash.com/photo-${1678382156212 + i}?w=64&h=64&fit=crop`,
  url: '#',
  category: 'AI Tools',
  tags: ['AI', 'Innovation'],
  launchDate: '2024-03-10',
  featured: false,
  upvotes: Math.floor(Math.random() * 100),
}));

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main>
        <Banner />
        <FeaturedSection tools={featuredTools} />
        <SpotlightSection tool={spotlightTool} />
        <TopPicksSection tools={topPicks} />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;