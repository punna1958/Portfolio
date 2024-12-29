// src/app/api/blogs/[slug]/route.ts
import { type NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface Params {
  slug: string;
}

export const dynamic = 'auto';
export const dynamicParams = true;
export const revalidate = 0;

export async function GET(req: NextRequest, { params }: { params: Params }) {
  const filePath = path.join(process.cwd(), 'posts', `${params.slug}.md`);

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return new Response(JSON.stringify({ ...data, content }), {
      headers: {
        'content-type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Post not found' }), {
      status: 404,
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}
