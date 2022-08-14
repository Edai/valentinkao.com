import Blocks from '@/components/blocks';
import MainLayout from '@/layouts/MainLayout';
import { description, name, socialImage, url } from '@/lib/config';
import { Container } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';

export default function AboutMe({ me }) {
  const { pageInfo, blocks } = me || {};
  const { entry } = pageInfo?.properties || {};

  return (
    <MainLayout>
      <Head>
        <title>{name}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`About Valentin Kao`} />
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
        />
      </Container>
      <Container maxW="container.md" px={[5, 6, 8]} pb={8}>
        <Blocks blocks={blocks} />
      </Container>
    </MainLayout>
  );
}