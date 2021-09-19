import React from 'react';
import { Avatar, Heading, Flex } from '@chakra-ui/react';

const User = ({ user }) => {
  return (
    <Flex direction="column" align="center" m="3">
      <Avatar
        src={user.avatar.image.url}
        size="xl"
        name={user.name}
        background={user.avatar.color}
      />
      <Heading size="md" color="gray.700" my="3">
        {user.name}
      </Heading>
    </Flex>
  );
};

export default User;
