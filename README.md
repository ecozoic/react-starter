# react-starter

This project is an example implementation of a server-side rendered React web application. It includes advanced features such as code-splitting, sever-side rendered CSS, and server-side data-fetching via Apollo/GraphQL.

## Getting Started

```bash
git clone git@github.com:ecozoic/react-starter.git
cd react-starter
yarn
yarn start
```

App will be running at http://localhost:3000

## Server-Side Rendering

Server-side rendering (SSR) is a technique that renders React components on the server instead of serving up blank HTML pages that have to be completely rendered on the client. In a typical client-side rendered (CSR) application, the server serves a basic HTML document and some JavaScript bundles. The browser has to download these bundles and bootstrap the React application before the user sees anything. Fancier implementations might render a spinner or another loading indicator of some kind during this initialization process. For SSR, the server sends a fully-formed HTML page to the browser. The browser still downloads the JS bundles and React still has to initialize (albeit using a slightly different API for optimization), but during this process the user sees a fully-rendered page instead of a blank screen or spinner.

SSR is very powerful for certain applications and has become much easier to implement than it has been in the past. However, it is not necessary for all React applications so carefully consider the business needs when deciding on whether to go with SSR or traditional CSR.

### Benefits of SSR

- **Search Engine Optimization (SEO)** - Web crawlers need to be able to understand the structure of your application in order to be able to index it properly. If you are only serving up a blank HTML document with a `<div id="app"></div>`, there's not a lot of useful information to index. While some crawlers have gotten better at indexing single-page applications, results may vary and there are some limitations.

- **Social Media** - When sharing links on social media sites such as Twitter or Facebook or in chat applications like Slack, these platforms will typically "unfurl" these links and show helpful previews highlighting that page's content. This process works by interpreting special `<meta>` tags in the `<head>` of a document using Twitter cards or Facebook's Open Graph standards. The `<head>` is outside the realm of a typical React application unless you are using a special library like `react-helmet`, and SSR is required to dynamically render these `<meta>` tags and ensure your pages are social-media friendly. This can be important to help drive user engagement.

- **User Experience** - Users can see meaningful content sooner than with CSR. No need for spinners and no worry about content flickering and repainting during the initial render. This effect is most pronounced for users on low-powered devices or mobile phones, where the performance overhead of JavaScript becomes more noticeable. Wal-Mart has also performed extensive user testing on the benefits of SSR and found that server-side rendered pages increase user engagement by over 50%.

### Tradeoffs

- **Time To First Byte (TTFB)** - TTFB is obviously going to increase for a SSR application, as the server is now performing rendering logic (and potentially data-fetching logic) instead of simply serving up empty HTML pages. In addition, since the server is providing fully-rendered HTML instead of an empty skeleton, the user will be downloading a larger overall payload in SSR vs CSR.

- **Scalability** - Currently, rendering a React application in Node.js is a CPU-bound, synchronous process. That means while the server is rendering, it cannot actively service other requests. In order to avoid a rendering bottleneck you may need to horizontally scale SSR applications more aggressively. It's also recommended to use separate Node.js projects for your SSR application and your API (i.e, Express REST API, GraphQL, etc.). This lets you can scale them independently and helps with overall maintainability.

- **Time to Interactive** - While SSR applications will render much sooner than CSR applications, its important to remember that the JavaScript bundles still need to download and React still needs to bootstrap before the page becomes truly interactive. Generally speaking, this process takes the same amount of time for SSR vs CSR applications.

### TL;DR

Use SSR for any public-facing applications that you are exposing to the general internet. Use CSR for internal applications where you don't care about SEO or social media.

## Key Libraries

### Razzle

This project uses a library called [Razzle](https://github.com/jaredpalmer/razzle) to handle server-side rendering. Razzle is super lightweight and unopinionated when compared with other popular React SSR frameworks like Next.js. It leaves all the key architectural decisions for your application up to you (routing, code-splitting, data-fetching). It abstracts away all the tricky Webpack configuration required for SSR while still providing all the hooks you need to customize.

### Styled-Components

Using [styled-components](https://github.com/styled-components/styled-components) works very well with server-side rendering. They provide a simple SSR API that allows you to inline all the CSS for your page on the server-side based on which components are initially rendered. This avoids the flash-of-unstyled-content (FOUC) issues that you see with most CSS-in-JS implementations and also integrates perfectly with routing and code-splitting. The server inlines only the CSS necessary for the components/routees you rendered.

### React-Helmet

[react-helmet](https://github.com/nfl/react-helmet) is a library to manage the `<head>` of an HTML document. This lets us dynamically render `<meta>` tags, `<title>`s, and other useful document metadata on the server, helping with SEO and social media shareability.

### loadable-components

[loadable-components](https://github.com/smooth-code/loadable-components) is the premier code-splitting library for React. It allows you to dynamically import components on demand using standard `import()` syntax. It has a robust SSR API that allows you to pre-load the necessary chunks for your initial render based on your application, and integrates seamlessly with React-Router for route-based code-splitting. The server only includes the chunks necessary for the components/routes you rendered.

### Apollo

[Apollo](https://github.com/apollographql) provides a sophisticated set of components and APIs to interact with any GraphQL service. It also provides awesome SSR support that allows your application to pre-fetch necessary data on the server-side so your initial renders are hydrated with real data, all without requiring you to write special logic for the server. It also integrates seamlessly with code-splitting and routing, so the data you need for that particular request is retrieved automatically. The server only includes the data necessary for the components/routes you rendered.

For this demo application, we are using a simple [SWAPI GraphQL](https://github.com/graphql/swapi-graphql) service deployed to Heroku: https://ecozoic-swapi-graphql.herokuapp.com/
