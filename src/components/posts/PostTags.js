import { HStack, Tag, TagLabel } from '@chakra-ui/react';

const PostTags = ({ tags, size }) => {
  if (!tags || tags.length === 0) {
    tags = [{ id: '1', color: 'gray', name: 'uncategorized' }];
  }
  const renderTags = tags.map((t) => (
    <Tag
      size={size}
      key={t.id}
      borderRadius="full"
      variant="solid"
      colorScheme={t.color || 'gray'}
      fontFamily="heading"
      fontWeight="600"
    >
      <TagLabel>{t.name ? t.name.toLowerCase() : 'uncategorized'}</TagLabel>
    </Tag>
  ));

  return <HStack spacing={2}>{renderTags}</HStack>;
};

export default PostTags;
