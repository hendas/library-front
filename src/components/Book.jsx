import React from 'react';
import { Image, Heading, Flex } from '@chakra-ui/react';

const Book = ({ id, title, cover, author }) => {
  return (
    <Flex
      mt="5"
      w="100%"
      border="1px"
      borderRadius="md"
      borderColor="gray.200"
      overflow="hidden"
      bg="gray.50"
    >
      <Image boxSize="100px" objectFit="cover" src={cover.url} />
      <Flex direction="column" mx="2" justify="center">
        <Heading as="h3" fontSize={['sm', 'md']} size="md" color="gray.700">
          {title}
        </Heading>
        <Heading as="h4" fontSize={['sm', 'md']} size="sm" color="gray.400">
          {author.name}
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Book;
