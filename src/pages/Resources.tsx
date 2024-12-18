import { useState } from 'react';
import { ResourceGrid } from '../components/resources/ResourceGrid';
import { ResourceFilters } from '../components/resources/ResourceFilters';
import { useResources } from '../hooks/useResources';
import type { Resource } from '../types/resource';

export function Resources() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { resources, isLoading, error } = useResources();

  const filteredResources = resources.filter(resource => 
    selectedCategory === 'all' || resource.category === selectedCategory
  );

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 text-[#1C160C]">Mental Health Resources</h1>
            <p className="text-[#4B4639] leading-relaxed text-lg">
              Explore our collection of articles, guides, and insights to support your mental health journey.
            </p>
          </div>

          <ResourceFilters 
            selectedCategory={selectedCategory} 
            onCategoryChange={setSelectedCategory} 
          />

          {isLoading ? (
            <div className="text-center py-12">Loading resources...</div>
          ) : error ? (
            <div className="text-center py-12 text-red-600">Failed to load resources</div>
          ) : (
            <ResourceGrid resources={filteredResources} />
          )}
        </div>
      </section>
    </div>
  );
}