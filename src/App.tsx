import React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import _ from 'lodash';

const Header = styled.h1`
  color: blue;
`;

const App = () => <Header>{_.identity('Hello world!')}</Header>;

export default hot(module)(App);
