import { socials } from '@/lib/config';
import { QuestionOutlineIcon } from '@chakra-ui/icons';
import { HStack, Icon, Link, List, ListItem } from '@chakra-ui/react';
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiMedium,
  SiTiktok,
  SiTwitch,
  SiTwitter,
  SiYoutube,
} from 'react-icons/si';

const Socials = () => {
  const getIcon = (icon) => {
    switch (icon) {
      case 'SiFacebook':
        return SiFacebook;
      case 'SiTwitter':
        return SiTwitter;
      case 'SiInstagram':
        return SiInstagram;
      case 'SiLinkedin':
        return SiLinkedin;
      case 'SiYoutube':
        return SiYoutube;
      case 'SiTiktok':
        return SiTiktok;
      case 'SiMedium':
        return SiMedium;
      case 'SiTwitch':
        return SiTwitch;
      case 'SiGithub':
        return SiGithub;
      default:
        return QuestionOutlineIcon;
    }
  };

  const renderSocials = socials.map((s) => {
    if (s.url === '') {
      return null;
    }

    return (
      <ListItem key={s.name} role="listitem">
        <Link href={s.url} target="_blank" rel="noopener noreferrer">
          <Icon as={getIcon(s.icon)} />
        </Link>
      </ListItem>
    );
  });

  return (
    <List>
      <HStack spacing={6} justify="flex-end">
        {renderSocials}
      </HStack>
    </List>
  );
};

export default Socials;
