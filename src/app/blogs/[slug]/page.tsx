import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';

// Update the props interface
interface Params {
  slug: string;
}

// Use the correct Next.js page props type
export default async function BlogPost({ params }: { params: Params }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', `${params.slug}.md`),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  const htmlContent = marked(content);

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <Link
        href="/blogs"
        className="text-blue-600 hover:text-blue-800 mb-8 inline-block"
      >
        ← Back to Blogs
      </Link>

      <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>

      <div className="flex items-center gap-4 mb-8">
        <div className="text-gray-600">
          {new Date(frontmatter.date).toLocaleDateString()}
        </div>
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
          {frontmatter.category}
        </span>
        {frontmatter.labels?.map((label: string) => (
          <span
            key={label}
            className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm"
          >
            {label}
          </span>
        ))}
      </div>

      <div
        className="prose lg:prose-xl max-w-none"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </article>
  );
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('posts'));

  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}
