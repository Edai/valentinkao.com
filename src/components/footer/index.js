import { Box, Container, Link } from '@chakra-ui/react';

const Footer = () => (
  <Box as="footer" w="100%" position="absolute" bottom="0" py={4}>
    <Container maxW="container.lg">
      <Box px={[null, null, 8]}>
        <Link href="https://twitter.com/messages/1001-156688692?text=Hi%20Valentin&recipient_id=156688692">
          © Valentin Kao - Contact me on Twitter
        </Link>
      </Box>
    </Container>
  </Box>
);

export default Footer;
