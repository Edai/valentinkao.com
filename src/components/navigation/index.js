import Socials from '@/components/socials';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  List,
  ListItem,
  useColorMode,
  useMediaQuery,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDisplayingInBrowser, isLargerThan600] = useMediaQuery([
    '(display-mode: browser)',
    '(min-width:600px)',
  ]);

  const renderLinks = links.map((l) => (
    <ListItem key={l.title} fontSize="md" fontFamily="heading">
      {!l.isHyperlink ? (
        <NextLink href={l.url} passHref>
          <Link _hover={{ underline: 'none' }}>{l.title}</Link>
        </NextLink>
      ) : (
        <Link
          href={l.url}
          rel="noopener noreferrer"
          target="_blank"
          _hover={{ underline: 'none' }}
        >
          {l.title}
        </Link>
      )}
    </ListItem>
  ));

  return (
    <Box as="nav" py={[3, 6, 8]} mb={[2, 6, 24]}>
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center" px={[null, null, 8]}>
          <NextLink href="/" passHref>
            <Link
              fontSize={['xl', '3xl']}
              fontFamily="heading"
              fontWeight={600}
              _hover={{ underline: 'none' }}
            >
              {'VALENTIN KAO'}
            </Link>
          </NextLink>
          <List>
            <HStack wrap spacing="50px">
              {renderLinks}
              {isDisplayingInBrowser && isLargerThan600 && <Socials />}
              <ListItem role="listitem">
                <IconButton
                  role="button"
                  variant="ghost"
                  colorScheme="gray"
                  aria-label={
                    colorMode === 'dark'
                      ? 'Switch to dark mode'
                      : 'Switch to light mode'
                  }
                  size="lg"
                  icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                  onClick={toggleColorMode}
                />
              </ListItem>
            </HStack>
          </List>
        </Flex>
      </Container>
    </Box>
  );
};

const links = [
  { title: 'blog', url: '/blog' },
  { title: 'about', url: '/about' },
];

export default Navigation;
