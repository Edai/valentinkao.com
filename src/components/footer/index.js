import { Box, Container, Link } from '@chakra-ui/react';

const Footer = () => (
  <Box as="footer" w="100%" position="absolute" bottom="0" py={4}>
    <Container maxW="container.lg">
      <Box px={[null, null, 8]}>
        <Link href="https://www.linkedin.com/in/valentinkao">
          © Valentin Kao
        </Link>
      </Box>
    </Container>
  </Box>
);

export default Footer;
