/* @flow */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Helmet from 'react-helmet';

/**
 * About page component.
 */
function About({ dispatch }) {
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
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
