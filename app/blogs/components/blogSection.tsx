"use client";

import { useState, useMemo } from "react";
import { BlogPost } from "@/types/blog";
import { BlogCard } from "./blogCard";
import { BlogFilter } from "./blogFilter";

interface BlogSectionProps {
  posts: BlogPost[];
}

export const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  const [selectedIndustry, setSelectedIndustry] =
    useState<string>("All Industries");
  const [selectedTechnology, setSelectedTechnology] =
    useState<string>("All Technologies");

  const industries = useMemo<string[]>(() => {
    const uniqueIndustries = [
      ...new Set(
        posts
          .map((post) => post.industry)
          .filter(
            (industry): industry is string => typeof industry === "string"
          )
      ),
    ];
    return uniqueIndustries.sort();
  }, [posts]);

  const technologies = useMemo<string[]>(() => {
    const allTechs = posts.flatMap((post) =>
      Array.isArray(post.technologies) ? post.technologies : []
    );
    const uniqueTechs = [...new Set(allTechs)];
    return uniqueTechs.sort();
  }, [posts]);

  const filteredPosts = useMemo<BlogPost[]>(() => {
    return posts.filter((post) => {
      const matchesIndustry =
        selectedIndustry === "All Industries" ||
        post.industry === selectedIndustry;

      const matchesTechnology =
        selectedTechnology === "All Technologies" ||
        (Array.isArray(post.technologies) &&
          post.technologies.includes(selectedTechnology));

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
          onFilterChange={handleFilterChange}
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
