import React from 'react';
import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import Book from './Book';

const BookDetails = ({ id, title, cover, author }) => {
  return (
    <Flex
      mt="5"
      d="column"
      w="100%"
      border="1px"
      borderRadius="md"
      borderColor="gray.200"
      overflow="hidden"
      bg="gray.50"
    >
      <Flex align="center" m="2">
        <Text fontSize={['sm', 'md']} color="gray.500">
          Title:
        </Text>
        <Heading as="h3" size={['sm', 'md']} color="gray.700" m="2">
          {title}
        </Heading>
      </Flex>
      <Image width="100%" objectFit="cover" src={cover.url} />
      <Flex align="center" m="2">
        <Text fontSize={['sm', 'md']} color="gray.500">
          Author:
        </Text>
        <Heading as="h3" fontSize={['sm', 'md']} color="gray.700" m="2">
          {author.name}
        </Heading>
      </Flex>
      <Flex direction="column" align="center" m="2">
        <Image
          width={['100%', '75%', '50%']}
          objectFit="cover"
          src={author.photo.url}
        />
      </Flex>
      <Heading as="h3" fontSize={['sm', 'md']} color="gray.700" m="2" mt="4">
        See also:
      </Heading>
      {author.books.map((book) => (
        <Book key={book.title} {...book} />
      ))}
    </Flex>
  );
};

export default BookDetails;
