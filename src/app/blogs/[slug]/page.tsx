// src/app/blogs/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';

// Match the frontmatter structure from your config
interface BlogPost {
  title: string;
  date: string;
  category: 'Tech' | 'Development';
  labels: string[];
  excerpt: string;
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  // Get the file path from the posts directory
  const filePath = path.join(process.cwd(), 'posts', `${params.slug}.md`);

  // Read and parse the markdown file
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const blogData = data as BlogPost;

  // Convert markdown to HTML
  const htmlContent = marked(content);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          href="/blogs"
          className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2"
        >
          ← Back to Blogs
        </Link>
      </div>

      <article>
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{blogData.title}</h1>

          <div className="flex flex-wrap items-center gap-4 mb-4">
            <time
              dateTime={new Date(blogData.date).toISOString()}
              className="text-gray-600"
            >
              {new Date(blogData.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>

            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              {blogData.category}
            </span>
          </div>

          {/* Labels */}
          {blogData.labels && blogData.labels.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {blogData.labels.map((label) => (
                <span
                  key={label}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {label}
                </span>
              ))}
            </div>
          )}

          {/* Excerpt */}
          <p className="text-lg text-gray-600 italic">{blogData.excerpt}</p>
        </header>

        {/* Blog Content */}
        <div
          className="prose lg:prose-xl max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>
    </main>
  );
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'posts'));

  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({
      slug: file.replace('.md', ''),
    }));
}
