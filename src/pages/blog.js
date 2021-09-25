import PostsList from '@/components/posts/PostsList';
import MainLayout from '@/layouts/MainLayout';
import { description, name, socialImage, url } from '@/lib/config';
import { usePaginatePosts } from '@/lib/posts';
import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Posts() {
  const { pathname } = useRouter();

  const { posts, error, isLoadingMore, size, setSize, reachedEnd } =
    usePaginatePosts();

  return (
    <MainLayout>
      <Head>
        <title>{name} - Blog</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${name} - Blog`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url + pathname} />
        <meta property="og:image" content={socialImage} />
      </Head>

      <Container maxW="container.lg" pb={16}>
        <Box mb={[8, 16]}>
          <PostsList
            posts={posts}
            error={error}
            isLoadingMore={isLoadingMore}
            loadMore={() => setSize(size + 1)}
            reachedEnd={reachedEnd}
          />
        </Box>
      </Container>
    </MainLayout>
  );
}
