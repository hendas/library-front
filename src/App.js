import React from 'react';
import AuthorsPage from './pages/AuthorsPage';
import UsersPage from './pages/UsersPage';
import BooksPage from './pages/BooksPage';
import RandomBookPage from './pages/RandomBookPage';
import { Heading, Flex, Link, Box, Divider } from '@chakra-ui/react';
import { Routes, Route, Link as RouterLink } from 'react-router-dom';

const App = () => {
  return (
    <Flex
      direction="column"
      width={['100%', '75%', '650px']}
      align="center"
      mx="auto"
    >
      <Flex
        direction={['column', null, null, 'row']}
        align="center"
        justifyContent="space-between"
        w="100%"
        mx="5"
      >
        <Link to="/" as={RouterLink}>
          <Heading as="h1">Personal Library</Heading>
        </Link>
        <Box d="flex" alignItems="center">
          <Link to="/" as={RouterLink}>
            <h1>Books</h1>
          </Link>
          <Divider
            orientation="vertical"
            m="10px"
            height="15px"
            color="gray.900"
          />
          <Link to="/authors" as={RouterLink}>
            <h1>Authors</h1>
          </Link>
          <Divider
            orientation="vertical"
            m="10px"
            height="15px"
            color="gray.900"
          />
          <Link to="/users" as={RouterLink}>
            <h1>Users</h1>
          </Link>
          <Divider
            orientation="vertical"
            m="10px"
            height="15px"
            color="gray.900"
          />
          <Link to="/random_book" as={RouterLink}>
            <h1>Random book</h1>
          </Link>
        </Box>
      </Flex>
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="authors/" element={<AuthorsPage />} />
        <Route path="users/" element={<UsersPage />} />
        <Route path="random_book/" element={<RandomBookPage />} />
      </Routes>
    </Flex>
  );
};

export default App;
