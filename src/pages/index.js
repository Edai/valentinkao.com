import { getAboutMe, getPostBySlug } from '@/lib/notion';
import AboutMe from './about';
import Blog from './blog';

export default function Home({me}) {
  const blogMode = false;
  return blogMode ? <Blog /> : <AboutMe me={me} />;
}

export async function getStaticProps() {
  const me = await getAboutMe();
  if (!me) {
    return {
      notFound: true,
    };
  }
  const data = me.data.map(
    (post) => post.properties?.slug?.rich_text[0]?.plain_text,
  );
  if (!data || data.length === 0) {
    return {
      notFound: true,
    };
  }
  const slug = data[0];
  const post = await getPostBySlug(slug);
  if (post?.pageInfo?.properties.status.select.name !== 'published')
    return {
      notFound: true,
      revalidate: 30,
    };
  return {
    props: { me: post },
    revalidate: 10,
  };
}
