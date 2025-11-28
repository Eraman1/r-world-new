"use client";

import Link from "next/link";
import { JSX, useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Tag,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  ChevronRight,
} from "lucide-react";
import { BlogPost } from "@/types/blog";
import Breadcrumb from "@/app/industries/components/breadcrumb";

interface BlogDetailPageProps {
  post: BlogPost;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({
  post,
}): JSX.Element => {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  // Handle share URL on client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(encodeURIComponent(window.location.href));
    }
  }, []);

  const shareTitle = encodeURIComponent(post.title ?? "Blog Post");

  // Copy blog link to clipboard
  const handleCopyLink = (): void => {
    if (typeof window !== "undefined" && navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="absolute inset-0 opacity-40">
          <img
            src={post.image || "/images/default-blog.jpg"}
            alt={post.title || "Blog Image"}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full max-w-5xl mx-auto px-4 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            {post.category && (
              <span className="px-4 py-1 bg-amber-500 text-white text-sm font-medium rounded-full">
                {post.category}
              </span>
            )}
            {post.industry && (
              <span className="px-4 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                {post.industry}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {post.date
                  ? new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                  : "Unknown date "}
              </span>
            </div>
            {post.readTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            )}
            {post.author?.name && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author.name}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <Breadcrumb />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <div className="sticky top-8 space-y-6">
              {/* Author */}
              {post.author && (
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">
                    Author
                  </h3>
                  <div className="flex-col items-start gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={post.author.avatar || "/images/default-avatar.png"}
                        alt={post.author.name}
                        className="object-cover w-16 h-16"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {post.author.name}
                      </h4>
                      {post.author.role && (
                        <p className="text-sm text-amber-600 mb-2">
                          {post.author.role}
                        </p>
                      )}
                      {post.author.bio && (
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {post.author.bio}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Share */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">
                  Share Article
                </h3>
                <div className="space-y-3">
                  <a
                    href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1a8cd8] transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                    <span className="text-sm font-medium">Twitter</span>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2 bg-[#1877F2] text-white rounded-lg hover:bg-[#0c63d4] transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    <span className="text-sm font-medium">Facebook</span>
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className="w-full flex items-center gap-3 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Link2 className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {copied ? "Copied!" : "Copy Link"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">
                  Technologies
                </h3>
                {post.technologies?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {post.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">
                    No technologies listed.
                  </p>
                )}
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-9 order-1 lg:order-2">
            <div className="prose prose-lg max-w-none">
              <div
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
              />
            </div>

            {/* Tags */}
            {post.tags?.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3 flex-wrap">
                  <Tag className="w-5 h-5 text-gray-500" />
                  <span className="text-sm font-semibold text-gray-700">
                    Tags:
                  </span>
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag.toLowerCase()}`}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-lg transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related Posts */}
            {post.relatedPosts?.length ? (
              <div className="mt-16">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Related Articles
                  </h2>
                  <Link
                    href="/blog"
                    className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center gap-1"
                  >
                    View All
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {post.relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.id}`}
                      className="group"
                    >
                      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative h-48 w-full">
                          <img
                            src={
                              relatedPost.image || "/images/default-blog.jpg"
                            }
                            alt={relatedPost.title}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-5">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs text-teal-600 font-medium">
                              {relatedPost.category}
                            </span>
                            <span className="text-xs text-gray-400">•</span>
                            <span className="text-xs text-gray-500">
                              {relatedPost.readTime}
                            </span>
                          </div>
                          <h3 className="font-bold text-gray-900 group-hover:text-teal-600 transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-800 text-lg mb-8">
            Let&#39;s discuss how we can help bring your ideas to life
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact-us"
              className="px-8 py-3 bg-white text-amber-400 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/blogs"
              className="px-8 py-3 bg-amber-400 text-white font-semibold rounded-lg hover:bg-blue-900/80 transition-colors"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
