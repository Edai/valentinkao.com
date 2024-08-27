import Link from 'next/link';
import { Suspense } from 'react';
import ViewCounter from './view-counter';
import { getViewsCount } from 'app/db/queries';
import { getBlogPosts } from 'app/db/blog';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

function convertDate(dateStr: string) {
  const dateObj = new Date(dateStr);

  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return dateObj.toLocaleDateString('en-US', options as any);
}

export default function BlogPage() {
  const allBlogs = getBlogPosts();

  return (
    <section>
      <p className="mb-8">
        This is a collection of ideas, stories, tutorials, and whatever
        come to my mind. Better sharing them than keeping them into a Notion
        privately.
      </p>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                {convertDate(post.metadata.publishedAt)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
              <Suspense fallback={<p className="h-6" />}>
                <Views slug={post.slug} />
              </Suspense>
            </div>
          </Link>
        ))}
    </section>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();

  return <ViewCounter allViews={views} slug={slug} />;
}
