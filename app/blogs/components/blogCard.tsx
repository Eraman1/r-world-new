import { BlogPost } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      key={post.slug || "#"}
      className="group block"
    >
      <div className="bg-white  overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
        </div>
      </div>
    </Link>
  );
};
