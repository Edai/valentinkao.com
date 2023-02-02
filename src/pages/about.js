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
        <div
          style={{
            borderRadius: '25px',
            overflow: 'hidden',
            maxWidth: 150,
            maxHeight: 150,
          }}
        >
          <Image
            src={'https://avatars.githubusercontent.com/u/11737262'}
            alt="Me"
            width="150"
            height="150"
          />
        </div>
      </Container>
      <Container maxW="container.md" px={[5, 6, 8]} pb={8}>
        <Blocks blocks={blocks} />
      </Container>
    </MainLayout>
  );
}
