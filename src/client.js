import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import App from './App';

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'https://ecozoic-swapi-graphql.herokuapp.com',
  }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

loadableReady(() => {
  hydrate(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root'),
  );
});

if (module.hot) {
  module.hot.accept();
}
