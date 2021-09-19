import React, { useCallback } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Button } from '@chakra-ui/react';
import BookDetails from '../components/BookDetails';

const GET_RANDOM_BOOK_QUERY = gql`
  query GetRandomBook {
    randomBook {
      title
      cover {
        url
      }
      author {
        name
        photo {
          url
        }
        books {
          title
          cover {
            url
          }
          author {
            name
          }
        }
      }
    }
  }
`;

const RandomBookPage = () => {
  const { loading, error, data, refetch } = useQuery(GET_RANDOM_BOOK_QUERY, {
    fetchPolicy: 'no-cache',
    onError: (error) => {
      console.error('error', error);
      window.lastError = error;
    },
  });
  // modyfikacja pliku wymaga odświeżenia strony, inaczej są błędy z refetchem
  // podejrzewam, że jest to związane ze środowiskiem
  const handleOnClick = useCallback(() => {
    refetch();
  }, [refetch]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not load random book</p>;
  }
  const { randomBook } = data;
  return (
    <>
      <BookDetails key={randomBook.title} {...randomBook} />
      <Button my="2" onClick={handleOnClick}>
        Reroll
      </Button>
    </>
  );
};

export default RandomBookPage;
