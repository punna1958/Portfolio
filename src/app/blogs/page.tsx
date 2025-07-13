import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    category: string;
    labels: string[];
    excerpt: string;
  };
  isExternal?: boolean;
  externalUrl?: string;
}

// External blog posts
const externalPosts: Post[] = [
  {
    slug: 'playwright-basics',
    frontmatter: {
      title: "Playwright Basics: A Beginner's Guide to Web Automation",
      date: '2024-05-16',
      category: 'Testing',
      labels: ['Playwright', 'Web Automation', 'Testing', 'Beginner Guide'],
      excerpt: "Comprehensive guide to getting started with Playwright for web automation and testing. Learn the fundamentals, architecture, and best practices for cross-browser testing."
    },
    isExternal: true,
    externalUrl: 'https://blog.crownstack.com/blog/fls/playwright-basics'
  },
  {
    slug: 'playwright-best-practices',
    frontmatter: {
      title: "Playwright Best Practices: Tips and Techniques for Effective Test Automation",
      date: '2024-07-22',
      category: 'Testing',
      labels: ['Playwright', 'Best Practices', 'Test Automation', 'Advanced'],
      excerpt: "Master Playwright with advanced tips and techniques. Learn framework setup, Page Object Model, data-driven testing, and strategies for reliable, maintainable test automation."
    },
    isExternal: true,
    externalUrl: 'https://blog.crownstack.com/blog/qa/playwright-best-practices-tips-and-techniques-for-effective-test-automation'
  }
];

async function getPosts(): Promise<Post[]> {
  let localPosts: Post[] = [];
  
  // Check if posts directory exists and get local posts
  if (fs.existsSync(path.join('posts'))) {
    const files = fs.readdirSync(path.join('posts'));
    
    localPosts = files.map((filename) => {
      const slug = filename.replace('.md', '');
      const markdownWithMeta = fs.readFileSync(
        path.join('posts', filename),
        'utf-8'
      );
      const { data: frontmatter } = matter(markdownWithMeta) as unknown as {
        data: Post['frontmatter'];
      };
      return { slug, frontmatter };
    });
  }

  // Combine local posts with external posts
  const allPosts = [...localPosts, ...externalPosts];

  return allPosts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export default async function BlogsPage() {
  const posts = await getPosts();

  const categories = Array.from(
    new Set(posts.map((post) => post.frontmatter.category))
  );

  const allLabels = Array.from(
    new Set(posts.flatMap((post) => post.frontmatter.labels || []))
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-16">
      <div className="mb-8">
        <Link href="/" className="text-white-600 hover:text-white-800 inline-flex items-center gap-2 mb-4">
          ← Back to Portfolio
        </Link>
        <h1 className="text-4xl font-bold text-white-900 mb-4">Blog</h1>
        <p className="text-gray-300 text-base">Insights on testing, automation, and software quality</p>
      </div>

      {/* Category and Label Pills */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/blogs?category=${category}`}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition"
          >
            {category}
          </Link>
        ))}
        {allLabels.map((label) => (
          <Link
            key={label}
            href={`/blogs?label=${label}`}
            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition"
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
          >
            <div className="p-6">
              {post.isExternal ? (
                <a
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h2 className="text-2xl font-semibold hover:text-blue-600 mb-2 flex items-start gap-2">
                    {post.frontmatter.title}
                    <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0 opacity-60 group-hover:opacity-100" />
                  </h2>
                </a>
              ) : (
                <Link href={`/blogs/${post.slug}`}>
                  <h2 className="text-2xl font-semibold hover:text-blue-600 mb-2">
                    {post.frontmatter.title}
                  </h2>
                </Link>
              )}
              
              <div className="text-gray-600 text-sm mb-4 flex items-center gap-2">
                {new Date(post.frontmatter.date).toLocaleDateString()}
                {post.isExternal && (
                  <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">
                    Published on Crownstack
                  </span>
                )}
              </div>
              
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                  {post.frontmatter.category}
                </span>
                {post.frontmatter.labels?.map((label: string) => (
                  <span
                    key={label}
                    className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm"
                  >
                    {label}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-600">{post.frontmatter.excerpt}</p>
              
              {post.isExternal && (
                <a
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer hover:underline"
                >
                  Read on Crownstack Blog
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
