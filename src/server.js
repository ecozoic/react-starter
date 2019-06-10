import React from 'react';
import path from 'path';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { Helmet } from 'react-helmet';
import { ChunkExtractor } from '@loadable/server';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import fetch from 'node-fetch';

import App from './App';

const statsFile = path.resolve('./build/loadable-stats.json');

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {
    const client = new ApolloClient({
      link: createHttpLink({
        uri: 'https://ecozoic-swapi-graphql.herokuapp.com',
        fetch,
      }),
      cache: new InMemoryCache(),
      ssrMode: true,
    });
    const context = {};
    const sheet = new ServerStyleSheet();
    const extractor = new ChunkExtractor({
      statsFile,
      entrypoints: ['client'],
    });
    const markup = await renderToStringWithData(
      extractor.collectChunks(
        <StyleSheetManager sheet={sheet.instance}>
          <ApolloProvider client={client}>
            <StaticRouter context={context} location={req.url}>
              <App />
            </StaticRouter>
          </ApolloProvider>
        </StyleSheetManager>,
      ),
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      const helmet = Helmet.renderStatic();

      res.status(200).send(
        `<!doctype html>
    <html ${helmet.htmlAttributes.toString()}>
    <head>
        ${helmet.meta.toString()}
        ${helmet.title.toString()}
        ${helmet.link.toString()}
        ${extractor.getLinkTags()}
        ${extractor.getStyleTags()}
        ${sheet.getStyleTags()}
    </head>
    <body ${helmet.bodyAttributes.toString()}>
        <div id="root">${markup}</div>
        <script>window.__APOLLO_STATE__=${JSON.stringify(
          client.cache.extract(),
        )};</script>
        ${extractor.getScriptTags()}
    </body>
</html>`,
      );
    }
  });

export default server;
