
import { BlogPost } from '@/types/blog';
import { BlogSection } from './components/blogSection';

const samplePosts: BlogPost[] = [
  {
      id: '1',
      title: 'Increase Agility and Scalability with Headless CMS Solutions',
      excerpt: 'Headless CMS solutions are the optimized upgrade of the traditional CMS (Content Management System)...',
      image: 'https://cdn.pixabay.com/photo/2025/10/09/08/14/mushroom-9883036_1280.jpg',
      category: 'Technical Perspectives',
      industry: 'Technology',
      technologies: ['CMS', 'API', 'React'],
      url: '/blogs/headless-cms-solutions',
      slug: '',
      content: '',
      author: {
          name: '',
          avatar: '',
          role: '',
          bio: ''
      },
      publishedAt: '',
      readTime: '',
      tags: []
  },
  {
      id: '2',
      title: 'Build NFT-Based "Play-to-Earn" Games',
      excerpt: 'The gaming industry never remains stagnant, as cutting-edge tech developments are constantly...',
      image: 'https://cdn.pixabay.com/photo/2025/10/09/08/14/mushroom-9883036_1280.jpg',
      category: 'Gaming',
      industry: 'Gaming',
      technologies: ['Blockchain', 'NFT', 'Web3'],
      url: '/blogs/nft-play-to-earn',
      slug: '',
      content: '',
      author: {
          name: '',
          avatar: '',
          role: '',
          bio: ''
      },
      publishedAt: '',
      readTime: '',
      tags: []
  },
  {
      id: '3',
      title: 'Optimizing Web Development Lifecycle',
      excerpt: 'Low code business solutions have risen in popularity for a good reason; the current shortage...',
      image: 'https://cdn.pixabay.com/photo/2025/10/09/08/14/mushroom-9883036_1280.jpg',
      category: 'Development',
      industry: 'Technology',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      url: '/blogs/web-development-lifecycle',
      slug: '',
      content: '',
      author: {
          name: '',
          avatar: '',
          role: '',
          bio: ''
      },
      publishedAt: '',
      readTime: '',
      tags: []
  },
];

export default function BlogPage() {
  return (
    <main>
      <BlogSection posts={samplePosts} />
    </main>
  );
}