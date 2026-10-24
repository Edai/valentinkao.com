import { getBlogPosts } from 'app/db/blog';

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `https://valentinkao.com/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ['', '/blog', '/about', '/work', 'contact'].map((route) => ({
    url: `https://www.valentinkao.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
