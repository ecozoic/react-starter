import styled from 'styled-components';

const Greeting = styled.h1`
  color: blue;
`;

Greeting.defaultProps = {
  children: 'Hello world!',
};

export default Greeting;
