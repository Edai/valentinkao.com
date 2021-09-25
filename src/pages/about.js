import Blocks from '@/components/blocks';
import MainLayout from '@/layouts/MainLayout';
import { description, name, socialImage, url } from '@/lib/config';
import { getAboutMe, getPostBySlug } from '@/lib/notion';
import { Container } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';

export default function AboutMe({ me }) {
  const { pageInfo, blocks } = me;

  const { entry } = pageInfo.properties;

  return (
    <MainLayout>
      <Head>
        <title>{name} - About me</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`About me`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={socialImage} />
      </Head>

      <Container maxW="container.md" align="center">
        <Image
          src={'/images/valentinkao.png'}
          alt="Me"
          width="250"
          height="250"
        ></Image>
      </Container>
      <Container maxW="container.md" px={[5, 6, 8]} pb={8}>
        <Blocks blocks={blocks} />
      </Container>
    </MainLayout>
  );
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
