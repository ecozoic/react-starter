import React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

const Header = styled.h1`
  color: blue;
`;

const App = () => <Header>Hello world!</Header>;

export default hot(module)(App);
