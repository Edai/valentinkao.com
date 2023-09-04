import TextRenderer from '@/components/blocks/TextRenderer';
import ListSkeleton from '@/components/skeleton/ListSkeleton';
import timeago from '@/lib/timeago';
import {
  Button,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  useColorMode,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import PostTags from './PostTags';

const PostsList = ({ posts, error, isLoadingMore, loadMore, reachedEnd }) => {
  const { colorMode } = useColorMode();

  const renderPosts = () => {
    if (error) {
      return <p>There was an error while fetching the posts...</p>;
    }

    if (!posts) {
      return <p>It&apos;s looking a bit empty here...</p>;
    }

    return posts
      .sort((a, b) => {})
      .map((r) => {
        const { slug, entry, summary, created, categories } = r.properties;
        return (
          <PostItem
            key={r.id}
            slug={slug.rich_text[0]}
            title={entry.title[0].text.content}
            summary={summary.rich_text}
            createdTime={
              created && created.created_time
                ? new Date(created.created_time)
                : new Date()
            }
            categories={categories?.multi_select}
          />
        );
      });
  };

  return (
    <>
      <SimpleGrid columns={[1, null, 1]} spacing={8}>
        {renderPosts()}
        {isLoadingMore && (
          <>
            <ListSkeleton type="posts" />
          </>
        )}
      </SimpleGrid>

      {loadMore && !reachedEnd && (
        <Button
          onClick={loadMore}
          disabled={isLoadingMore}
          colorScheme={colorMode === 'dark' ? 'gray' : 'black'}
          variant={colorMode === 'dark' ? 'solid' : 'outline'}
          w="100%"
          mt={[4, 8]}
          size="lg"
          fontFamily="heading"
          _hover={{
            boxShadow: isLoadingMore ? 'unset' : '2px 2px 0 #90CDF4',
          }}
        >
          {isLoadingMore ? 'Loading...' : 'Load more'}
        </Button>
      )}
    </>
  );
};

export default PostsList;

const PostItem = ({ slug, title, summary, createdTime, categories }) => {
  const { colorMode } = useColorMode();
  const renderTime = () => {
    return createdTime.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  return (
    <NextLink href={`/post/${slug.plain_text}`} passHref>
      <Link
        px={6}
        py={6}
        bg={colorMode === 'dark' ? 'primaryGray' : 'transparent'}
        border="1px"
        borderColor={colorMode === 'dark' ? 'transparent' : 'primaryDark'}
        borderRadius="md"
        _hover={{ textDecoration: 'none', boxShadow: '5px 5px 0 #63B3ED' }}
      >
        <Heading as="h4" mb={[2, 4, 6]} fontSize="xsmall" fontWeight={10}>
          {`${renderTime()}`}
        </Heading>
        <HStack spacing={2}>
          <Heading as="h2" mb={[2, 4, 2]} fontSize="xl">
            {`${title}`}
          </Heading>
          <PostTags tags={categories} />
        </HStack>
        <TextRenderer content={summary} />
      </Link>
    </NextLink>
  );
};
