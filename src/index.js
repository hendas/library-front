import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { theme, ThemeProvider, CSSReset } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const GRAPHQL_ENDPOINT = 'https://young-caverns-36214.herokuapp.com/graphql';

const cache = new InMemoryCache({
  addTypename: false,
  resultCaching: false,
});
const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache,
});

const rootElement = document.getElementById('root');
ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <App />
      </ThemeProvider>
    </Router>
  </ApolloProvider>,
  rootElement
);
