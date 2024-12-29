import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', `${slug}.md`),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  const htmlContent = marked(content);

  return {
    frontmatter,
    content: htmlContent,
  };
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('posts'));

  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { frontmatter, content } = await getPost(params.slug);

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
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}
