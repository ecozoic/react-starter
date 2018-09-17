import styled from 'styled-components';

const Greeting = styled.h1`
  color: ${props => props.theme.color};
`;

Greeting.defaultProps = {
  children: 'Hello world!',
};

export default Greeting;
