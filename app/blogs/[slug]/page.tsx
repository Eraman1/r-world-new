import axiosInstance from "@/lib/axiosInstance";
import { BlogPost } from "@/types/blog";
import { notFound } from "next/navigation";
import { BlogDetailPage } from "../components/blogDetailPage";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogSlugPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  try {
    const res = await axiosInstance.get<BlogPost>(
      `/blogs/slug/${encodeURIComponent(slug)}`
    );
    const post = res.data;

    if (!post) return notFound();

    return <BlogDetailPage post={post} />;
  } catch (err: any) {
    if (err?.response?.status === 404) return notFound();
    console.error("Failed to fetch blog by slug:", err);
    return notFound();
  }
}
