import { blogPosts } from "@/data/blogs";
import { BlogSection } from "./components/blogSection";


export default function BlogPage() {
  return (
    <main>
      <BlogSection posts={blogPosts} />
    </main>
  );
}
