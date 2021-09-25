import Blocks from '@/components/blocks';
import PostTags from '@/components/posts/PostTags';
import MainLayout from '@/layouts/MainLayout';
import { socialImage, url } from '@/lib/config';
import { getPostBySlug, getPosts } from '@/lib/notion';
import timeago from '@/lib/timeago';
import { AspectRatio, Container, Heading, HStack } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';

const renderTime = (date) => {
  const diffNow = Date.now() - date.getTime();

  if (diffNow >= 86400000 * 31) {
    return timeago(date, { format: 'long' });
  }
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
export default function Post({ post }) {
  const { pageInfo, blocks } = post;
  const { entry, slug, summary, image, social_image, created, categories } =
    pageInfo.properties;

  const titleContent = entry.title[0]?.text.content || 'super title';
  const summaryContent =
    summary.rich_text[0]?.text.content || 'default content';
  const slugContent = slug.rich_text[0]?.plain_text || 'default-slug';
  const createdTime =
    created && created.created_time
      ? new Date(created.created_time)
      : new Date();

  const renderFeaturedImage = () => {
    if (!image || !image.url) {
      return null;
    }

    return (
      <AspectRatio
        ratio={16 / 9}
        mb={[4, 8]}
        overflow="hidden"
        borderRadius="lg"
      >
        <Image
          src={image.url}
          alt={titleContent}
          layout="fill"
          objectFit="cover"
        />
      </AspectRatio>
    );
  };

  return (
    <MainLayout>
      <Head>
        <title>{titleContent}</title>
        <meta name="description" content={summaryContent} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={titleContent} />
        <meta property="og:description" content={summaryContent} />
        <meta property="og:url" content={`${url}/${slugContent}`} />
        <meta
          property="og:image"
          content={social_image ? social_image.url : socialImage}
        />
      </Head>

      <Container maxW="container.lg" mt={[8, 16]} mb={[8, 16]}>
        <Heading as="h1" mb={[4, 8, 8]} fontSize={['2xl', '4xl', '5xl']}>
          {titleContent}
        </Heading>
        <HStack mb={[4, 8, 8]} inline={true}>
          <Heading as="h4" fontSize="xsmall">
            {`${renderTime(createdTime)} - `}
          </Heading>
          <PostTags
            mb={[4, 8, 16]}
            px={[null, null, 16]}
            tags={categories?.multi_select}
          />
        </HStack>
        {renderFeaturedImage()}
      </Container>

      <Container maxW="container.md" px={[5, 6, 16]} pb={16}>
        <Blocks blocks={blocks} />
      </Container>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.data.map((post) => ({
    params: { slug: post.properties.slug.rich_text[0].plain_text },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  if (post?.pageInfo?.properties.status.select.name !== 'published') {
    return {
      notFound: true,
      revalidate: 30,
    };
  }

  return { props: { post }, revalidate: 30 };
}
