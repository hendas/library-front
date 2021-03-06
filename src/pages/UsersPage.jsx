import React from 'react';
import { gql, useQuery } from '@apollo/client';
import User from '../components/User';
import { SimpleGrid } from '@chakra-ui/react';

const ALL_USERS_QUERY = gql`
  query GetAllUsers {
    users {
      name
      avatar {
        image {
          url
        }
        color
      }
    }
  }
`;

const UsersPage = () => {
  const { loading, error, data } = useQuery(ALL_USERS_QUERY);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not load users...</p>;
  }
  const { users } = data;
  return (
    <SimpleGrid columns={['1', '2', '4']}>
      {users.map((user) => (
        <User key={user.name} user={user} />
      ))}
    </SimpleGrid>
  );
};

export default UsersPage;
