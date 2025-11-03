// app/blog/page.tsx

import axiosInstance from "@/lib/axiosInstance";
import { BlogPost } from "@/types/blog";
import { BlogSection } from "./components/blogSection";

export default async function BlogPage() {
  let posts: BlogPost[] = [];

  try {
    const res = await axiosInstance.get<BlogPost[]>("/blogs");
    posts = res.data ?? [];
  } catch (err) {
    // log on server - replace with your logger if needed
    console.error("Failed to fetch blog posts:", err);
    posts = [];
  }

  return (
    <main>
      <BlogSection posts={posts} />
    </main>
  );
}
