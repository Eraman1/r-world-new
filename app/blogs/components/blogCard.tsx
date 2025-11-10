import { BlogPost } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  // ✅ Safely handle missing excerpt
  const excerpt = post.excerpt || "";
  const shortExcerpt =
    excerpt.length > 100 ? excerpt.substring(0, 100).trim() + "..." : excerpt;

  return (
    <Link
      href={`/blogs/${post.slug}`}
      key={post.slug || "#"}
      className="group block h-full"
    >
      <div className="bg-white flex flex-col h-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        {/* Image section */}
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={post.image || "/placeholder.png"}
            alt={post.title || "Blog image"}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text section */}
        <div className="flex flex-col flex-grow p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3 flex-grow">
            {shortExcerpt}
          </p>
          <div className="mt-4">
            <span className="text-amber-600 text-sm font-semibold group-hover:underline">
              Read more →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
