/* @flow */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

/**
 * About page component.
 */
function About({ dispatch }) {
  return (
    <div>
      <h1>About</h1>
      <button onClick={() => dispatch(push('/'))}>Go Home</button>
    </div>
  );
}

About.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const AboutContainer = connect()(About);
export default AboutContainer;
