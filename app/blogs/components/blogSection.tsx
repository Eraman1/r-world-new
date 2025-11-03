'use client';

import { useState, useMemo } from 'react';
import { BlogPost } from '@/types/blog';
import { BlogCard } from './blogCard';
import { BlogFilter } from './blogFilter';

interface BlogSectionProps {
  posts: BlogPost[];
}

export const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedTechnology, setSelectedTechnology] = useState('All Technologies');

  const industries = useMemo(() => {
    const uniqueIndustries = [...new Set(posts.map((post) => post.industry))];
    return uniqueIndustries.sort();
  }, [posts]);

  const technologies = useMemo(() => {
    const allTechs = posts.flatMap((post) => post.technologies);
    const uniqueTechs = [...new Set(allTechs)];
    return uniqueTechs.sort();
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesIndustry =
        selectedIndustry === 'All Industries' || post.industry === selectedIndustry;
      const matchesTechnology =
        selectedTechnology === 'All Technologies' ||
        post.technologies.includes(selectedTechnology);
      return matchesIndustry && matchesTechnology;
    });
  }, [posts, selectedIndustry, selectedTechnology]);

  const handleFilterChange = (industry: string, technology: string) => {
    setSelectedIndustry(industry);
    setSelectedTechnology(technology);
  };

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <BlogFilter
          industries={industries}
          technologies={technologies}
          onFilterChange={(industry, technology) =>
            handleFilterChange(industry, technology)
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.id ?? `post-${index}`} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No posts found matching your filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};